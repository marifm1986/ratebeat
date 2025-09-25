import React, { useEffect, useState, useRef, createElement, Component } from 'react';
import { EditIcon, TrashIcon, EyeIcon, ShareIcon, CopyIcon, TwitterIcon, LinkedinIcon, FacebookIcon, MoreHorizontalIcon, AlertTriangleIcon } from 'lucide-react';
import { PostPreview } from './PostPreview';
import { BlogPost } from './models/BlogPost';
interface PostsTableProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (postId: number | string) => void;
  canEdit: boolean;
}
export const PostsTable = ({
  posts,
  onEdit,
  onDelete,
  canEdit
}: PostsTableProps) => {
  // State to track which post is being deleted
  const [deletePostId, setDeletePostId] = useState<number | string | null>(null);
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);
  // State to track which post is being previewed
  const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);
  // State for share notification
  const [shareNotification, setShareNotification] = useState<{
    visible: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    visible: false,
    message: '',
    type: 'success'
  });
  // State for dropdown menu
  const [activeDropdownId, setActiveDropdownId] = useState<number | string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdownId(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // Function to open delete confirmation
  const handleDeleteClick = (post: BlogPost) => {
    setDeletePostId(post.id);
    setPostToDelete(post);
  };
  // Function to cancel deletion
  const handleCancelDelete = () => {
    setDeletePostId(null);
    setPostToDelete(null);
  };
  // Function to confirm deletion
  const handleConfirmDelete = () => {
    if (deletePostId !== null) {
      onDelete(deletePostId);
      setDeletePostId(null);
      setPostToDelete(null);
    }
  };
  // Function to handle preview
  const handlePreview = (post: BlogPost) => {
    setPreviewPost(post);
  };
  // Function to close preview
  const closePreview = () => {
    setPreviewPost(null);
  };
  // Toggle dropdown visibility
  const toggleDropdown = (postId: number | string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdownId(activeDropdownId === postId ? null : postId);
  };
  // Helper function for clipboard copying with better error handling
  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setShareNotification({
          visible: true,
          message: 'Link copied to clipboard!',
          type: 'success'
        });
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setShareNotification({
            visible: true,
            message: 'Link copied to clipboard!',
            type: 'success'
          });
        } else {
          throw new Error('Clipboard copy failed');
        }
      }
    } catch (error) {
      console.error('Clipboard error:', error);
      setShareNotification({
        visible: true,
        message: 'Failed to copy link. Please try again.',
        type: 'error'
      });
    }
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShareNotification(prev => ({
        ...prev,
        visible: false
      }));
    }, 3000);
  };
  // Share functions
  const handleCopyPostLink = async (post: BlogPost) => {
    const shareUrl = post.sharableUrl || `${window.location.origin}/blog/${post.slug}`;
    await copyToClipboard(shareUrl);
    setActiveDropdownId(null);
  };
  const shareToX = (post: BlogPost) => {
    const shareUrl = post.sharableUrl || `${window.location.origin}/blog/${post.slug}`;
    const text = `Check out this post: ${post.title}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
    setActiveDropdownId(null);
  };
  const shareToLinkedIn = (post: BlogPost) => {
    const shareUrl = post.sharableUrl || `${window.location.origin}/blog/${post.slug}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, '_blank');
    setActiveDropdownId(null);
  };
  const shareToFacebook = (post: BlogPost) => {
    const shareUrl = post.sharableUrl || `${window.location.origin}/blog/${post.slug}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank');
    setActiveDropdownId(null);
  };
  // Function to handle sharing a post
  const handleSharePost = async (post: BlogPost) => {
    try {
      const shareUrl = post.sharableUrl || `${window.location.origin}/blog/${post.slug}`;
      // Check if Web Share API is available
      if (navigator.share) {
        try {
          await navigator.share({
            title: post.title,
            text: post.excerpt || 'Check out this post!',
            url: shareUrl
          });
          setShareNotification({
            visible: true,
            message: 'Post shared successfully!',
            type: 'success'
          });
        } catch (webShareError) {
          console.log('Web Share API error, falling back to clipboard', webShareError);
          // Fall back to clipboard if Web Share API fails
          await copyToClipboard(shareUrl);
        }
      } else {
        // Fallback to clipboard for browsers without Web Share API
        await copyToClipboard(shareUrl);
      }
    } catch (error) {
      console.error('Error sharing post:', error);
      setShareNotification({
        visible: true,
        message: 'Failed to share post. Please try again.',
        type: 'error'
      });
    }
  };
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (e) {
      return 'Invalid date';
    }
  };
  return <div className="overflow-x-auto relative">
      {/* Share notification */}
      {shareNotification.visible && <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-md shadow-lg z-50 ${shareNotification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p>{shareNotification.message}</p>
        </div>}
      {posts.length === 0 ? <p className="text-center py-4 text-gray-500">No posts found</p> : <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left pb-4 text-gray-500 font-medium">
                TITLE
              </th>
              <th className="text-left pb-4 text-gray-500 font-medium">
                AUTHOR
              </th>
              <th className="text-left pb-4 text-gray-500 font-medium">DATE</th>
              <th className="text-left pb-4 text-gray-500 font-medium">
                STATUS
              </th>
              <th className="text-left pb-4 text-gray-500 font-medium">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => <tr key={post.id} className="border-b border-gray-200">
                <td className="py-4">
                  <div className="flex items-center">
                    {post.isFeatured && <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full mr-2">
                        Featured
                      </span>}
                    {post.title}
                  </div>
                </td>
                <td className="py-4">{post.author.name}</td>
                <td className="py-4">{formatDate(post.publishedDate)}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {post.status}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex space-x-3">
                    {canEdit && <>
                        <button onClick={() => onEdit(post)} className="text-blue-600 hover:text-blue-800 flex items-center">
                          <EditIcon size={16} className="mr-1" />
                          Edit
                        </button>
                        <button onClick={() => handleDeleteClick(post)} className="text-red-600 hover:text-red-800 flex items-center">
                          <TrashIcon size={16} className="mr-1" />
                          Delete
                        </button>
                      </>}
                    <button onClick={() => handlePreview(post)} className="text-gray-600 hover:text-gray-800 flex items-center">
                      <EyeIcon size={16} className="mr-1" />
                      View
                    </button>
                    <div className="relative">
                      
                      
                    </div>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>}
      {/* Delete Confirmation Modal */}
      {deletePostId !== null && postToDelete && <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
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
                <button onClick={handleConfirmDelete} className="w-1/2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                  Delete
                </button>
                <button onClick={handleCancelDelete} className="w-1/2 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>}
      {/* Post Preview */}
      {previewPost && <PostPreview post={previewPost} onClose={closePreview} />}
    </div>;
};