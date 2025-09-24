import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  PlusIcon,
  FileTextIcon,
  UsersIcon,
  EyeIcon,
  MessageSquareIcon,
  TrendingUpIcon,
  BookmarkIcon,
  CalendarIcon,
  LoaderIcon,
} from 'lucide-react'
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { BlogPost } from './models/BlogPost'
export const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    categories: 0,
    tags: 0,
  })
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Fetch posts
        const postsCollection = collection(db, 'posts')
        const postsSnapshot = await getDocs(postsCollection)
        const allPosts = postsSnapshot.docs.map(
          (doc:any) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as BlogPost,
        )
        // Calculate stats
        const published = allPosts.filter(
          (post) => post.status === 'Published',
        ).length
        const drafts = allPosts.filter((post) => post.status === 'Draft').length
        // Fetch categories and tags count
        const categoriesCollection = collection(db, 'categories')
        const categoriesSnapshot = await getDocs(categoriesCollection)
        const tagsCollection = collection(db, 'tags')
        const tagsSnapshot = await getDocs(tagsCollection)
        setStats({
          totalPosts: allPosts.length,
          publishedPosts: published,
          draftPosts: drafts,
          categories: categoriesSnapshot.docs.length,
          tags: tagsSnapshot.docs.length,
        })
        // Get recent posts
        const recentPostsQuery = query(
          postsCollection,
          orderBy('createdAt', 'desc'),
          limit(5),
        )
        const recentPostsSnapshot = await getDocs(recentPostsQuery)
        const recentPostsData = recentPostsSnapshot.docs.map(
          (doc:any) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as BlogPost,
        )
        setRecentPosts(recentPostsData)
        // Get featured posts as "popular" for demo
        const popularPostsQuery = query(
          postsCollection,
          where('isFeatured', '==', true),
          limit(3),
        )
        const popularPostsSnapshot = await getDocs(popularPostsQuery)
        let popularPostsData = popularPostsSnapshot.docs.map(
          (doc:any) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as BlogPost,
        )
        // If no featured posts, use most recent
        if (popularPostsData.length === 0) {
          popularPostsData = recentPostsData.slice(0, 3)
        }
        setPopularPosts(popularPostsData)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    } catch (e) {
      return 'Invalid date'
    }
  }
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto flex items-center justify-center h-64">
        <div className="flex flex-col items-center">
          <LoaderIcon size={36} className="animate-spin text-blue-600 mb-4" />
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Dashboard</h1>
        <Link
          to="/admin/posts"
          className="bg-blue-600 text-white flex items-center justify-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <PlusIcon size={20} className="mr-2" />
          <span>Create New Post</span>
        </Link>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <FileTextIcon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Posts</p>
            <p className="text-xl font-bold">{stats.totalPosts}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <TrendingUpIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Published</p>
            <p className="text-xl font-bold">{stats.publishedPosts}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
          <div className="rounded-full bg-yellow-100 p-3 mr-4">
            <FileTextIcon className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Drafts</p>
            <p className="text-xl font-bold">{stats.draftPosts}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
          <div className="rounded-full bg-purple-100 p-3 mr-4">
            <BookmarkIcon className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Categories</p>
            <p className="text-xl font-bold">{stats.categories}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
          <div className="rounded-full bg-pink-100 p-3 mr-4">
            <BookmarkIcon className="h-6 w-6 text-pink-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Tags</p>
            <p className="text-xl font-bold">{stats.tags}</p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Posts */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Recent Posts</h2>
              <Link
                to="/admin/posts"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              {recentPosts.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No posts found</p>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left pb-2 text-xs text-gray-500 font-medium">
                        TITLE
                      </th>
                      <th className="text-left pb-2 text-xs text-gray-500 font-medium">
                        DATE
                      </th>
                      <th className="text-left pb-2 text-xs text-gray-500 font-medium">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPosts.map((post) => (
                      <tr key={post.id} className="border-b border-gray-100">
                        <td className="py-3">
                          <Link
                            to={`/admin/posts`}
                            className="font-medium text-gray-900 hover:text-blue-600"
                            onClick={() => { }}
                          >
                            {post.title}
                          </Link>
                        </td>
                        <td className="py-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <CalendarIcon size={14} className="mr-1" />
                            {formatDate(post.publishedDate)}
                          </div>
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                          >
                            {post.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Link
                to="/admin/posts"
                className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
              >
                <FileTextIcon size={18} className="mr-2 text-gray-600" />
                <span>Manage Posts</span>
              </Link>
              <Link
                to="/admin/categories"
                className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
              >
                <BookmarkIcon size={18} className="mr-2 text-gray-600" />
                <span>Manage Categories & Tags</span>
              </Link>
              <Link
                to="/admin/comments"
                className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
              >
                <MessageSquareIcon size={18} className="mr-2 text-gray-600" />
                <span>Manage Comments</span>
              </Link>
            </div>
          </div>
          {/* Popular Posts */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-bold mb-4">Featured Posts</h2>
            <div className="space-y-4">
              {popularPosts.length === 0 ? (
                <p className="text-gray-500 text-center py-2">
                  No featured posts
                </p>
              ) : (
                popularPosts.map((post) => (
                  <div key={post.id} className="flex items-start">
                    {post.featuredImage ? (
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded overflow-hidden mr-3">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded flex items-center justify-center mr-3">
                        <FileTextIcon size={18} className="text-blue-600" />
                      </div>
                    )}
                    <div>
                      <Link
                        to={`/admin/posts`}
                        onClick={() => { }}
                        className="font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <EyeIcon size={12} className="mr-1" />
                        <span className="mr-3">124 views</span>
                        <MessageSquareIcon size={12} className="mr-1" />
                        <span>8 comments</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
