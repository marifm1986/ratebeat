import React, { useState } from 'react'
import { PlusIcon, SearchIcon } from 'lucide-react'
import { StatsCard } from './StatsCard'
import { PostsTable } from './PostsTable'
import { PostForm } from './PostForm'
// Define Post type
interface Post {
    id: number
    title: string
    author: string
    category: string
    status: 'Published' | 'Draft'
    content?: string
}
export const PostsPage = () => {
    // Sample initial posts data
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            title: 'Exploring the Wonders of the Cosmos',
            author: 'Dr. Anya Sharma',
            category: 'Science',
            status: 'Published',
            content: 'Sample content about the cosmos...',
        },
        {
            id: 2,
            title: 'The Art of Sustainable Living',
            author: 'Ethan Carter',
            category: 'Lifestyle',
            status: 'Published',
            content: 'Tips for sustainable living...',
        },
        {
            id: 3,
            title: 'Decoding the Mysteries of Quantum Physics',
            author: 'Dr. Anya Sharma',
            category: 'Science',
            status: 'Draft',
            content: 'An exploration of quantum physics...',
        },
        {
            id: 4,
            title: 'A Journey Through Ancient Civilizations',
            author: 'Isabella Rossi',
            category: 'History',
            status: 'Published',
            content: 'Discovering ancient civilizations...',
        },
        {
            id: 5,
            title: 'The Future of Artificial Intelligence',
            author: 'Dr. Anya Sharma',
            category: 'Technology',
            status: 'Published',
            content: 'AI advancements and future predictions...',
        },
    ])
    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    // State for current post being edited (null means creating a new post)
    const [currentPost, setCurrentPost] = useState<Post | null>(null)
    // State for search term
    const [searchTerm, setSearchTerm] = useState('')
    // Filter posts based on search term
    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    // Open modal for creating a new post
    const handleAddPost = () => {
        setCurrentPost(null) // Set to null for new post
        setIsModalOpen(true)
    }
    // Open modal for editing an existing post
    const handleEditPost = (post: Post) => {
        setCurrentPost(post)
        setIsModalOpen(true)
    }
    // Handle deleting a post - now directly deletes without browser confirm
    const handleDeletePost = (postId: number) => {
        // Remove the post with the given ID
        setPosts(posts.filter((post) => post.id !== postId))
    }
    // Handle saving a post (create or update)
    const handleSavePost = (post: Post) => {
        if (post.id) {
            // Update existing post
            setPosts(posts.map((p) => (p.id === post.id ? post : p)))
        } else {
            // Create new post with generated ID
            const newPost = {
                ...post,
                id: Math.max(0, ...posts.map((p) => p.id)) + 1,
            }
            setPosts([...posts, newPost])
        }
        setIsModalOpen(false)
    }
    // Get counts for stats cards
    const totalPosts = posts.length
    const publishedPosts = posts.filter(
        (post) => post.status === 'Published',
    ).length
    const draftPosts = posts.filter((post) => post.status === 'Draft').length
    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h1 className="text-3xl font-bold mb-4 md:mb-0">Posts</h1>
                <button
                    onClick={handleAddPost}
                    className="bg-blue-600 text-white flex items-center justify-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    <PlusIcon size={20} className="mr-2" />
                    <span>Add New Post</span>
                </button>
            </div>
            {/* Search */}
            <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatsCard title="Total Posts" value={totalPosts.toString()} />
                <StatsCard title="Published" value={publishedPosts.toString()} />
                <StatsCard title="Drafts" value={draftPosts.toString()} />
            </div>
            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-bold mb-6">Recent Posts</h2>
                <PostsTable
                    posts={filteredPosts}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                />
            </div>
            {/* Post Form Modal */}
            {isModalOpen && (
                <PostForm
                    post={currentPost}
                    onSave={handleSavePost}
                    onCancel={() => setIsModalOpen(false)}
                />
            )}
        </div>
    )
}
