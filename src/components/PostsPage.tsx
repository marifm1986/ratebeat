import React, { useEffect, useState } from 'react'
import { PlusIcon, SearchIcon, LoaderIcon } from 'lucide-react'
import { StatsCard } from './StatsCard'
import { PostsTable } from './PostsTable'
import { PostForm } from './PostForm'
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  getDoc,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../context/AuthContext'
import { BlogPost, Tag } from './models/BlogPost'
export const PostsPage = () => {
  // State for posts
  const [posts, setPosts] = useState<BlogPost[]>([])
  // Loading and error states
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  // State for current post being edited (null means creating a new post)
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null)
  // State for search term
  const [searchTerm, setSearchTerm] = useState('')
  // Get current user from auth context
  const { currentUser } = useAuth()
  // State for user role and access permissions
  const [userRole, setUserRole] = useState<string | null>(null)
  const [userAccessAreas, setUserAccessAreas] = useState<string[]>([])
  const [userPermissionsLoaded, setUserPermissionsLoaded] = useState(false)
  // Fetch user role and permissions
  useEffect(() => {
    const fetchUserPermissions = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
          if (userDoc.exists()) {
            const userData = userDoc.data()
            setUserRole(userData.role)
            setUserAccessAreas(userData.accessAreas || [])
          }
        } catch (err) {
          console.error('Error fetching user permissions:', err)
        } finally {
          setUserPermissionsLoaded(true)
        }
      } else {
        setUserPermissionsLoaded(true)
      }
    }
    fetchUserPermissions()
  }, [currentUser])
  // Fetch posts from Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const postsCollection = collection(db, 'posts')
        const postQuery = query(postsCollection, orderBy('createdAt', 'desc'))
        const snapshot = await getDocs(postQuery)
        const fetchedPosts = snapshot.docs.map(
          (doc:any) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as BlogPost,
        )
        setPosts(fetchedPosts)
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError('Failed to load posts. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])
  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post:any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.tags &&
        post.tags.some((tag:Tag) =>
          tag.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )),
  )
  // Check if user has edit/delete permissions
  const canEdit = () => {
    if (userRole === 'admin' || userRole === 'editor') {
      return true
    }
    return false
  }
  // Open modal for creating a new post
  const handleAddPost = () => {
    setCurrentPost(null) // Set to null for new post
    setIsModalOpen(true)
  }
  // Open modal for editing an existing post
  const handleEditPost = (post: BlogPost) => {
    if (!canEdit()) return
    setCurrentPost(post)
    setIsModalOpen(true)
  }
  // Handle deleting a post
  const handleDeletePost = async (postId: number | string) => {
    if (!canEdit()) return
    try {
      // Delete from Firestore
      await deleteDoc(doc(db, 'posts', postId as string))
      // Update state
      setPosts(posts.filter((post) => post.id !== postId))
    } catch (err) {
      console.error('Error deleting post:', err)
      setError('Failed to delete post. Please try again.')
    }
  }
  // Handle saving a post (create or update)
  const handleSavePost = (post: BlogPost) => {
    if (posts.some((p) => p.id === post.id)) {
      // Update existing post in state
      setPosts(posts.map((p) => (p.id === post.id ? post : p)))
    } else {
      // Add new post to state
      setPosts([post, ...posts])
    }
    setIsModalOpen(false)
  }
  // Get counts for stats cards
  const totalPosts = posts.length
  const publishedPosts = posts.filter(
    (post) => post.status === 'Published',
  ).length
  const draftPosts = posts.filter((post) => post.status === 'Draft').length
  // Show loading spinner
  if (isLoading || !userPermissionsLoaded) {
    return (
      <div className="max-w-7xl mx-auto flex items-center justify-center h-64">
        <div className="flex flex-col items-center">
          <LoaderIcon size={36} className="animate-spin text-blue-600 mb-4" />
          <p className="text-gray-600">Loading posts...</p>
        </div>
      </div>
    )
  }
  // Show error message
  if (error) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Posts</h1>
        {canEdit() && (
          <button
            onClick={handleAddPost}
            className="bg-blue-600 text-white flex items-center justify-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <PlusIcon size={20} className="mr-2" />
            <span>Add New Post</span>
          </button>
        )}
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
          canEdit={canEdit()}
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
