import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';

import {
    ArrowLeftIcon,
    ClockIcon,
    HeartIcon,
    SendIcon,
    MessageCircleIcon,
    AlertTriangleIcon,
    LoaderIcon,
} from 'lucide-react'
import {
    collection,
    addDoc,
    query,
    where,
    orderBy,
    getDocs,
    serverTimestamp,
    updateDoc,
    doc,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { BlogPost } from './models/BlogPost'
interface PostPreviewProps {
    post: any
    onClose: () => void
}
interface Comment {
    id: string
    postId: string | number
    name: string
    text: string
    loves: number
    createdAt: any
    status?: 'approved' | 'pending' | 'rejected'
}
export const PostPreview = ({ post, onClose }: PostPreviewProps) => {
    // State for comments
    const [comments, setComments] = useState<Comment[]>([])
    const [name, setName] = useState('')
    const [commentText, setCommentText] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    // Format the date for display
    const formattedDate = post.publishedDate
        ? new Date(post.publishedDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
        : new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
    // Fetch comments for this post
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const commentsRef = collection(db, 'comments')
                const q = query(
                    commentsRef,
                    where('postId', '==', post.id),
                    orderBy('createdAt', 'desc'),
                )
                const snapshot = await getDocs(q)
                const fetchedComments = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Comment[]
                // Filter out rejected comments
                const approvedComments = fetchedComments.filter(
                    (comment) => comment.status !== 'rejected',
                )
                setComments(approvedComments)
            } catch (err) {
                console.error('Error fetching comments:', err)
                setError('Failed to load comments. Please try again.')
            }
        }
        if (post.id) {
            fetchComments()
        }
    }, [post.id])
    // Handle comment submission
    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim() || !commentText.trim()) {
            setError('Please enter your name and comment')
            return
        }
        setIsSubmitting(true)
        setError(null)
        try {
            const newComment = {
                postId: post.id,
                name: name.trim(),
                text: commentText.trim(),
                loves: 0,
                createdAt: serverTimestamp(),
                status: 'pending', // Set new comments as pending by default
            }
            const docRef = await addDoc(collection(db, 'comments'), newComment)
            // Add the new comment to the state with a temporary timestamp
            setComments([
                {
                    id: docRef.id,
                    ...newComment,
                    createdAt: new Date(), // Use current date for UI until refresh
                } as Comment,
                ...comments,
            ])
            // Clear form
            setName('')
            setCommentText('')
        } catch (err) {
            console.error('Error adding comment:', err)
            setError('Failed to post comment. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }
    // Handle love reaction
    const handleLoveComment = async (commentId: string) => {
        try {
            // Find the comment to update
            const commentToUpdate = comments.find((c) => c.id === commentId)
            if (!commentToUpdate) return
            // Update in Firestore
            const commentRef = doc(db, 'comments', commentId)
            await updateDoc(commentRef, {
                loves: (commentToUpdate.loves || 0) + 1,
            })
            // Update in state
            setComments(
                comments.map((comment) =>
                    comment.id === commentId
                        ? {
                            ...comment,
                            loves: (comment.loves || 0) + 1,
                        }
                        : comment,
                ),
            )
        } catch (err) {
            console.error('Error updating loves:', err)
        }
    }
    // Format comment date
    const formatCommentDate = (timestamp: any) => {
        if (!timestamp) return 'Just now'
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
        // If less than 24 hours ago, show relative time
        const now = new Date()
        const diffHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
        if (diffHours < 1) {
            return 'Just now'
        } else if (diffHours < 24) {
            return `${Math.floor(diffHours)} hour${Math.floor(diffHours) === 1 ? '' : 's'} ago`
        } else {
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            })
        }
    }
    return (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-6 py-8">
                {/* Header with back button */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-xl font-bold">Post Preview</h1>
                    <button
                        onClick={onClose}
                        className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
                    >
                        <ArrowLeftIcon size={16} className="mr-2" />
                        Back to Editor
                    </button>
                </div>
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag: any) => (
                            <span
                                key={tag.id}
                                className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                )}
                {/* Post title */}
                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                {/* Author and date */}
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                        {post.author.avatar ? (
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-600 font-bold">
                                {post.author.name.charAt(0)}
                            </span>
                        )}
                    </div>
                    <div>
                        <p className="font-medium">{post.author.name}</p>
                        <div className="text-gray-500 text-sm flex items-center">
                            <span>{formattedDate}</span>
                            <span className="mx-2">•</span>
                            <span className="flex items-center">
                                <ClockIcon size={14} className="mr-1" />
                                {post.readingTime || 5} min read
                            </span>
                        </div>
                    </div>
                </div>
                {/* Featured Image */}
                {post.featuredImage && (
                    <div className="mb-8">
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                )}
                {/* Post content */}
                <div className="prose max-w-none mb-12">
                    {post.excerpt && (
                        <p className="text-xl text-gray-600 mb-8 font-light italic">
                            {post.excerpt}
                        </p>
                    )}
                    {post.content ? (
                        <div className="text-gray-700 leading-relaxed">
                            {post.content.split('\n').map((paragraph: any, index: number) =>
                                paragraph ? (
                                    // <p key={index} className="mb-4 ql-editor" dangerouslySetInnerHTML={{ __html: paragraph }} >

                                    // </p>
                                    <div className="ql-snow" key={index}>
                                        <div className="ql-editor" dangerouslySetInnerHTML={{ __html: paragraph }} />
                                    </div>

                                ) : (
                                    <br key={index} />
                                ),
                            )}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">
                            No content available for preview.
                        </p>
                    )}
                </div>
                {/* Comments Section */}
                <div className="border-t border-gray-200 pt-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <MessageCircleIcon className="mr-2" />
                        Comments {comments.length > 0 && `(${comments.length})`}
                    </h2>
                    {/* Comment Form */}
                    <form onSubmit={handleSubmitComment} className="mb-8">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                    // Clear error when user starts typing
                                    if (error) setError(null)
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="comment"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Your Comment
                            </label>
                            <textarea
                                id="comment"
                                value={commentText}
                                onChange={(e) => {
                                    setCommentText(e.target.value)
                                    // Clear error when user starts typing
                                    if (error) setError(null)
                                }}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Share your thoughts..."
                                required
                            ></textarea>
                        </div>
                        {error && (
                            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md flex items-center">
                                <AlertTriangleIcon size={16} className="mr-2 flex-shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={isSubmitting || !name.trim() || !commentText.trim()}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
                        >
                            {isSubmitting ? (
                                <>
                                    <LoaderIcon size={16} className="mr-2 animate-spin" />
                                    Posting...
                                </>
                            ) : (
                                <>
                                    <SendIcon size={16} className="mr-2" />
                                    Post Comment
                                </>
                            )}
                        </button>
                    </form>
                    {/* Comments List */}
                    <div className="space-y-6">
                        {comments.length === 0 ? (
                            <p className="text-gray-500 italic text-center py-4">
                                Be the first to leave a comment!
                            </p>
                        ) : (
                            comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="border border-gray-200 rounded-lg p-4"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-bold">{comment.name}</h4>
                                            <p className="text-sm text-gray-500">
                                                {formatCommentDate(comment.createdAt)}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleLoveComment(comment.id)}
                                            className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                                            aria-label="Love this comment"
                                        >
                                            <HeartIcon
                                                size={18}
                                                className={`mr-1 ${comment.loves > 0 ? 'text-red-500 fill-red-500' : ''}`}
                                            />
                                            <span>{comment.loves || 0}</span>
                                        </button>
                                    </div>
                                    <p className="text-gray-700">{comment.text}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
