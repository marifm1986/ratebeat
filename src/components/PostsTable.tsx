import React, { useState } from 'react'
import { EditIcon, TrashIcon, EyeIcon } from 'lucide-react'
import { PostPreview } from './PostPreview'
interface Post {
    id: number
    title: string
    author: string
    category: string
    status: 'Published' | 'Draft'
    content?: string
}
interface PostsTableProps {
    posts: Post[]
    onEdit: (post: Post) => void
    onDelete: (postId: number) => void
}
export const PostsTable = ({ posts, onEdit, onDelete }: PostsTableProps) => {
    // State to track which post is being deleted
    const [deletePostId, setDeletePostId] = useState<number | null>(null)
    const [postToDelete, setPostToDelete] = useState<Post | null>(null)
    // State to track which post is being previewed
    const [previewPost, setPreviewPost] = useState<Post | null>(null)
    // Function to open delete confirmation
    const handleDeleteClick = (post: Post) => {
        setDeletePostId(post.id)
        setPostToDelete(post)
    }
    // Function to cancel deletion
    const handleCancelDelete = () => {
        setDeletePostId(null)
        setPostToDelete(null)
    }
    // Function to confirm deletion
    const handleConfirmDelete = () => {
        if (deletePostId !== null) {
            onDelete(deletePostId)
            setDeletePostId(null)
            setPostToDelete(null)
        }
    }
    // Function to handle preview
    const handlePreview = (post: Post) => {
        setPreviewPost(post)
    }
    // Function to close preview
    const closePreview = () => {
        setPreviewPost(null)
    }
    return (
        <div className="overflow-x-auto">
            {posts.length === 0 ? (
                <p className="text-center py-4 text-gray-500">No posts found</p>
            ) : (
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left pb-4 text-gray-500 font-medium">
                                TITLE
                            </th>
                            <th className="text-left pb-4 text-gray-500 font-medium">
                                AUTHOR
                            </th>
                            <th className="text-left pb-4 text-gray-500 font-medium">
                                CATEGORY
                            </th>
                            <th className="text-left pb-4 text-gray-500 font-medium">
                                STATUS
                            </th>
                            <th className="text-left pb-4 text-gray-500 font-medium">
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="border-b border-gray-200">
                                <td className="py-4">{post.title}</td>
                                <td className="py-4">{post.author}</td>
                                <td className="py-4">{post.category}</td>
                                <td className="py-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                                    >
                                        {post.status}
                                    </span>
                                </td>
                                <td className="py-4">
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => onEdit(post)}
                                            className="text-blue-600 hover:text-blue-800 flex items-center"
                                        >
                                            <EditIcon size={16} className="mr-1" />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(post)}
                                            className="text-red-600 hover:text-red-800 flex items-center"
                                        >
                                            <TrashIcon size={16} className="mr-1" />
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handlePreview(post)}
                                            className="text-gray-600 hover:text-gray-800 flex items-center"
                                        >
                                            <EyeIcon size={16} className="mr-1" />
                                            View
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {/* Delete Confirmation Modal */}
            {deletePostId !== null && postToDelete && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            {/* Trash icon in a circle */}
                            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                <TrashIcon className="h-8 w-8 text-red-500" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">Delete Post</h2>
                            <p className="text-gray-600 mb-1">
                                Are you sure you want to delete "{postToDelete.title}"?
                            </p>
                            <p className="text-gray-500 text-sm mb-6">
                                This action cannot be undone.
                            </p>
                            <div className="flex space-x-4 w-full">
                                <button
                                    onClick={handleConfirmDelete}
                                    className="w-1/2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={handleCancelDelete}
                                    className="w-1/2 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Post Preview */}
            {previewPost && <PostPreview post={previewPost} onClose={closePreview} />}
        </div>
    )
}
