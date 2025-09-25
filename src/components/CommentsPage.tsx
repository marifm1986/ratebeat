import React, { useEffect, useState } from 'react'
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import {
  SearchIcon,
  LoaderIcon,
  MessageSquareIcon,
  TrashIcon,
  HeartIcon,
  CheckIcon,
  XIcon,
  AlertTriangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SendIcon,
  FileTextIcon,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useComments } from '../pages/admin/AdminPanel'
interface Comment {
  id: string
  postId: string
  name: string
  text: string
  loves: number
  createdAt: any
  status?: 'approved' | 'pending' | 'rejected'
  parentId?: string
  isAdmin?: boolean
}
interface BlogPost {
  id: string
  title: string
  slug: string
  featuredImage?: string
}
export const CommentsPage = () => {
  // Use the comments context instead of fetching directly
  const {
    comments: allComments,
    isLoading,
    error: contextError,
    refreshComments,
  } = useComments()
  const [blogPosts, setBlogPosts] = useState<Record<string, BlogPost>>({})
  const [error, setError] = useState<string | null>(null)
  const [expandedPosts, setExpandedPosts] = useState<Record<string, boolean>>(
    {},
  )
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyText, setReplyText] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { currentUser } = useAuth()
  const [userRole, setUserRole] = useState<string | null>(null)
  // Add this function to handle post expansion
  const togglePostExpanded = (postId: string) => {
    setExpandedPosts((prev) => {
      const newState = {
        ...prev,
      }
      newState[postId] = !prev[postId]
      return newState
    })
  }
  // Add this function before the return statement
  const handleSubmitReply = async (parentId: string) => {
    if (!replyText.trim()) {
      setError('Reply text cannot be empty')
      return
    }
    setIsSubmitting(true)
    setError(null)
    try {
      // Get the parent comment's post ID
      const parentComment = allComments.find(
        (comment) => comment.id === parentId,
      )
      if (!parentComment) {
        throw new Error('Parent comment not found')
      }
      // Create a new reply comment in Firestore
      const newReply = {
        postId: parentComment.postId,
        parentId: parentId,
        name: currentUser?.displayName || 'Admin',
        text: replyText.trim(),
        loves: 0,
        createdAt: serverTimestamp(),
        isAdmin: true,
        status: 'approved', // Admin replies are automatically approved
      }
      await addDoc(collection(db, 'comments'), newReply)
      // Clear form and close reply form
      setReplyText('')
      setReplyingTo(null)
      // Refresh comments to show the new reply
      refreshComments()
    } catch (err) {
      console.error('Error posting reply:', err)
      setError('Failed to post reply. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  // Add this function before the return statement
  const handleDeleteComment = async (commentId: string) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) {
      return
    }
    try {
      // Delete comment from Firestore
      const commentRef = doc(db, 'comments', commentId)
      await deleteDoc(commentRef)
      // Update local state to remove the comment
      const updatedComments = allComments.filter(
        (comment) => comment.id !== commentId,
      )
      // Since we're using context, we should refresh comments
      // This will trigger a re-fetch from Firestore
      refreshComments()
    } catch (err) {
      console.error('Error deleting comment:', err)
      setError('Failed to delete comment. Please try again.')
    }
  }
  // Add this function before the return statement
  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Just now'
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    } catch (e) {
      return 'Invalid date'
    }
  }
  // Add this function before the return statement, after the formatDate function
  const handleUpdateCommentStatus = async (
    commentId: string,
    newStatus: 'approved' | 'pending' | 'rejected',
  ) => {
    try {
      // Update comment status in Firestore
      const commentRef = doc(db, 'comments', commentId)
      await updateDoc(commentRef, {
        status: newStatus,
      })
      // Update local state to reflect the change
      const updatedComments = allComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              status: newStatus,
            }
          : comment,
      )
      // Since we're using context, we should refresh comments
      // This will trigger a re-fetch from Firestore
      refreshComments()
    } catch (err) {
      console.error('Error updating comment status:', err)
      setError('Failed to update comment status. Please try again.')
    }
  }
  // Fetch user role
  useEffect(() => {
    const fetchUserRole = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role)
          }
        } catch (err) {
          console.error('Error fetching user role:', err)
        }
      }
    }
    fetchUserRole()
  }, [currentUser])
  // Fetch post details when comments change
  useEffect(() => {
    const fetchPostDetails = async () => {
      if (!allComments.length) return
      try {
        // Get unique post IDs
        const postIds = [
          ...new Set(allComments.map((comment) => comment.postId)),
        ]
        // Fetch post details for each post ID
        const postsData: Record<string, BlogPost> = {}
        await Promise.all(
          postIds.map(async (postId) => {
            try {
              const postDoc = await getDoc(doc(db, 'posts', postId))
              if (postDoc.exists()) {
                const postData = postDoc.data()
                postsData[postId] = {
                  id: postId,
                  title: postData.title || 'Untitled Post',
                  slug: postData.slug || '',
                  featuredImage: postData.featuredImage || '',
                }
              } else {
                postsData[postId] = {
                  id: postId,
                  title: 'Deleted Post',
                  slug: '',
                }
              }
            } catch (err) {
              console.error(`Error fetching post ${postId}:`, err)
              postsData[postId] = {
                id: postId,
                title: 'Error Loading Post',
                slug: '',
              }
            }
          }),
        )
        setBlogPosts(postsData)
        // Initialize expanded state for all posts
        const initialExpandedState: Record<string, boolean> = {}
        postIds.forEach((id) => {
          initialExpandedState[id] = false
        })
        setExpandedPosts((prev) => ({
          ...prev,
          ...initialExpandedState,
        }))
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError('Failed to load post details. Please try again.')
      }
    }
    fetchPostDetails()
  }, [allComments])
  // Filter comments based on search and status
  const filterComments = () => {
    let filtered = [...allComments]
    // Apply search filter
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (comment) =>
          comment.text.toLowerCase().includes(lowerSearch) ||
          comment.name.toLowerCase().includes(lowerSearch),
      )
    }
    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter((comment) => comment.status === statusFilter)
    }
    return filtered
  }
  // Get filtered and grouped comments
  const filteredComments = filterComments()
  const filteredCommentsByPost = filteredComments.reduce(
    (groups, comment) => {
      if (!groups[comment.postId]) {
        groups[comment.postId] = []
      }
      groups[comment.postId].push(comment)
      return groups
    },
    {} as Record<string, Comment[]>,
  )
  // Organize comments into threads (parent comments and their replies)
  const getCommentThreads = (postComments: Comment[]) => {
    const parentComments = postComments.filter((c) => !c.parentId)
    const replies = postComments.filter((c) => c.parentId)
    // Map of parent comment ID to array of replies
    const replyMap: Record<string, Comment[]> = {}
    replies.forEach((reply) => {
      if (!replyMap[reply.parentId!]) {
        replyMap[reply.parentId!] = []
      }
      replyMap[reply.parentId!].push(reply)
    })
    return {
      parentComments,
      replyMap,
    }
  }
  // Check if user can moderate comments
  const canModerateComments = () => {
    return (
      userRole === 'admin' || userRole === 'editor' || userRole === 'moderator'
    )
  }
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto flex items-center justify-center h-64">
        <div className="flex flex-col items-center">
          <LoaderIcon size={36} className="animate-spin text-blue-600 mb-4" />
          <p className="text-gray-600">Loading comments...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Comments</h1>
        {/* Comment stats */}
        <div className="flex space-x-4">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Total: {allComments.length}
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Approved:{' '}
            {
              allComments.filter((c) => c.status === 'approved' || !c.status)
                .length
            }
          </div>
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
            Pending: {allComments.filter((c) => c.status === 'pending').length}
          </div>
          <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
            Rejected:{' '}
            {allComments.filter((c) => c.status === 'rejected').length}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search comments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Status filter */}
          <div className="flex-shrink-0">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Comments</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{error}</p>
        </div>
      )}

      {/* Comments by post */}
      <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
        {Object.keys(filteredCommentsByPost).length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <MessageSquareIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No comments found matching your filters.</p>
          </div>
        ) : (
          Object.keys(filteredCommentsByPost).map((postId) => {
            const postComments = filteredCommentsByPost[postId]
            const post = blogPosts[postId]
            const { parentComments, replyMap } = getCommentThreads(postComments)
            return (
              <div key={postId} className="divide-y divide-gray-100">
                {/* Post header */}
                <div
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() => togglePostExpanded(postId)}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      {post?.featuredImage ? (
                        <div className="h-10 w-10 rounded overflow-hidden">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                          <FileTextIcon className="h-5 w-5 text-blue-600" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {post?.title || 'Unknown Post'}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {postComments.length} comment
                        {postComments.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <div>
                    {expandedPosts[postId] ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Comments list */}
                {expandedPosts[postId] && (
                  <div className="px-4 py-2 bg-gray-50">
                    {parentComments.length === 0 ? (
                      <p className="text-center py-4 text-gray-500">
                        No comments found for this post.
                      </p>
                    ) : (
                      <div className="space-y-4 py-2">
                        {parentComments.map((comment) => (
                          <div
                            key={comment.id}
                            className="rounded-lg border border-gray-200 overflow-hidden"
                          >
                            <div
                              className={`p-4 ${comment.status === 'rejected' ? 'bg-red-50' : comment.status === 'pending' ? 'bg-yellow-50' : 'bg-white'}`}
                            >
                              <div className="flex justify-between">
                                <div className="flex items-center mb-2">
                                  <div className="font-bold mr-2">
                                    {comment.name}
                                  </div>
                                  {comment.isAdmin && (
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                                      Admin
                                    </span>
                                  )}
                                  <span className="text-gray-500 text-xs ml-2">
                                    {formatDate(comment.createdAt)}
                                  </span>
                                  {/* Status indicator badge - show approved by default if no status */}
                                  <span
                                    className={`ml-2 text-xs px-2 py-0.5 rounded-full ${comment.status === 'rejected' ? 'bg-red-100 text-red-800' : comment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}
                                  >
                                    {comment.status
                                      ? comment.status.charAt(0).toUpperCase() +
                                        comment.status.slice(1)
                                      : 'Approved'}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <span className="flex items-center text-gray-500 mr-3">
                                    <HeartIcon
                                      size={14}
                                      className="mr-1 text-red-500"
                                    />
                                    {comment.loves || 0}
                                  </span>
                                </div>
                              </div>
                              <div className="text-gray-700 mb-3">
                                {comment.text}
                              </div>
                              {/* Comment actions */}
                              <div className="flex justify-between items-center">
                                <div className="flex flex-wrap gap-2">
                                  {/* Moderation actions based on status and user role */}
                                  {canModerateComments() && (
                                    <>
                                      {/* Pending comment actions */}
                                      {comment.status === 'pending' && (
                                        <>
                                          <button
                                            onClick={() =>
                                              handleUpdateCommentStatus(
                                                comment.id,
                                                'approved',
                                              )
                                            }
                                            className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex items-center hover:bg-green-200 transition-colors"
                                            title="Approve this comment"
                                          >
                                            <CheckIcon
                                              size={12}
                                              className="mr-1"
                                            />
                                            Approve
                                          </button>
                                          <button
                                            onClick={() =>
                                              handleUpdateCommentStatus(
                                                comment.id,
                                                'rejected',
                                              )
                                            }
                                            className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded flex items-center hover:bg-red-200 transition-colors"
                                            title="Reject this comment"
                                          >
                                            <XIcon size={12} className="mr-1" />
                                            Reject
                                          </button>
                                        </>
                                      )}
                                      {/* Rejected comment actions */}
                                      {comment.status === 'rejected' && (
                                        <button
                                          onClick={() =>
                                            handleUpdateCommentStatus(
                                              comment.id,
                                              'approved',
                                            )
                                          }
                                          className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex items-center hover:bg-green-200 transition-colors"
                                          title="Approve this comment"
                                        >
                                          <CheckIcon
                                            size={12}
                                            className="mr-1"
                                          />
                                          Approve
                                        </button>
                                      )}
                                      {/* Approved comment actions - applies to both explicit approved status and no status */}
                                      {(comment.status === 'approved' ||
                                        !comment.status) && (
                                        <button
                                          onClick={() =>
                                            handleUpdateCommentStatus(
                                              comment.id,
                                              'rejected',
                                            )
                                          }
                                          className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded flex items-center hover:bg-red-200 transition-colors"
                                          title="Reject this comment"
                                        >
                                          <XIcon size={12} className="mr-1" />
                                          Reject
                                        </button>
                                      )}
                                    </>
                                  )}
                                </div>
                                <div className="flex items-center">
                                  <button
                                    onClick={() =>
                                      setReplyingTo(
                                        replyingTo === comment.id
                                          ? null
                                          : comment.id,
                                      )
                                    }
                                    className="text-blue-600 text-sm hover:text-blue-800 mr-4 flex items-center"
                                  >
                                    <MessageSquareIcon
                                      size={14}
                                      className="mr-1"
                                    />
                                    Reply
                                  </button>
                                  {canModerateComments() && (
                                    <button
                                      onClick={() =>
                                        handleDeleteComment(comment.id)
                                      }
                                      className="text-red-600 text-sm hover:text-red-800 flex items-center"
                                    >
                                      <TrashIcon size={14} className="mr-1" />
                                      Delete
                                    </button>
                                  )}
                                </div>
                              </div>
                              {/* Reply form */}
                              {replyingTo === comment.id && (
                                <div className="mt-3 pt-3 border-t border-gray-200">
                                  <textarea
                                    value={replyText}
                                    onChange={(e) =>
                                      setReplyText(e.target.value)
                                    }
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                                    placeholder="Write your reply..."
                                  ></textarea>
                                  <div className="flex justify-end space-x-2">
                                    <button
                                      onClick={() => setReplyingTo(null)}
                                      className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleSubmitReply(comment.id)
                                      }
                                      disabled={
                                        !replyText.trim() || isSubmitting
                                      }
                                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300 flex items-center"
                                    >
                                      {isSubmitting ? (
                                        <LoaderIcon
                                          size={14}
                                          className="animate-spin mr-1"
                                        />
                                      ) : (
                                        <SendIcon size={14} className="mr-1" />
                                      )}
                                      Post Reply
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                            {/* Replies */}
                            {replyMap[comment.id] &&
                              replyMap[comment.id].length > 0 && (
                                <div className="bg-gray-50 p-4 border-t border-gray-200">
                                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                                    {replyMap[comment.id].length}{' '}
                                    {replyMap[comment.id].length === 1
                                      ? 'Reply'
                                      : 'Replies'}
                                  </h4>
                                  <div className="space-y-3">
                                    {replyMap[comment.id].map((reply) => (
                                      <div
                                        key={reply.id}
                                        className="pl-4 border-l-2 border-gray-200"
                                      >
                                        <div className="flex justify-between items-start">
                                          <div className="flex items-center mb-1">
                                            <div className="font-medium mr-2">
                                              {reply.name}
                                            </div>
                                            {reply.isAdmin && (
                                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                                                Admin
                                              </span>
                                            )}
                                            <span className="text-gray-500 text-xs ml-2">
                                              {formatDate(reply.createdAt)}
                                            </span>
                                          </div>
                                          <div className="flex items-center">
                                            <span className="flex items-center text-gray-500">
                                              <HeartIcon
                                                size={12}
                                                className="mr-1 text-red-500"
                                              />
                                              {reply.loves || 0}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="text-gray-700 text-sm">
                                          {reply.text}
                                        </div>
                                        {/* Reply actions */}
                                        {canModerateComments() && (
                                          <div className="mt-1 flex justify-end">
                                            <button
                                              onClick={() =>
                                                handleDeleteComment(reply.id)
                                              }
                                              className="text-red-600 text-xs hover:text-red-800 flex items-center"
                                            >
                                              <TrashIcon
                                                size={12}
                                                className="mr-1"
                                              />
                                              Delete
                                            </button>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
