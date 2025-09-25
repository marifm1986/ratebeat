import React from 'react'
import { ArrowLeftIcon, ClockIcon } from 'lucide-react'
import { BlogPost } from './models/BlogPost'
interface PostPreviewProps {
    post: any
    onClose: () => void
}
export const PostPreview = ({ post, onClose }: PostPreviewProps) => {
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
                        {post.tags.map((tag:any) => (
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
                            {post.content.split('\n').map((paragraph:any, index:number) =>
                                paragraph ? (
                                    <p key={index} className="mb-4">
                                        {paragraph}
                                    </p>
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
                {/* Sharable URL section */}
               
            </div>
        </div>
    )
}
