import React, { useEffect, useState } from 'react'
import {
  XIcon,
  ImageIcon,
  LinkIcon,
  UploadIcon,
  PlusIcon,
  TagIcon,
  LoaderIcon,
  ShareIcon,
} from 'lucide-react'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDoc,
  query,
  orderBy,
  where,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { BlogPost } from './models/BlogPost'
// Define Tag interface
interface Tag {
  id: number | string
  name: string
  slug: string
}
interface Category {
  id: number | string
  name: string
  slug: string
}
interface PostFormProps {
  post: BlogPost | null
  onSave: (post: any) => void
  onCancel: () => void
}
export const PostForm = ({ post, onSave, onCancel }: PostFormProps) => {
  // Initialize form state
  const [formData, setFormData] = useState<
    Omit<any, 'id'> & {
      id?: number | string
    }
  >({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    author: {
      name: '',
      avatar: '',
    },
    publishedDate: new Date().toISOString(),
    readingTime: 0,
    tags: [],
    status: 'Draft' as const,
    isFeatured: false,
  })
  // State for categories and tags
  const [categories, setCategories] = useState<Category[]>([])
  const [availableTags, setAvailableTags] = useState<Tag[]>([])
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [newTagName, setNewTagName] = useState('')
  // State for image upload
  const [imageOption, setImageOption] = useState<'url' | 'upload'>('url')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageError, setImageError] = useState<string | null>(null)
  // Loading and error states
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  // Fetch categories and tags from Firestore
  useEffect(() => {
    const fetchCategoriesAndTags = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Fetch categories
        const categoriesCollection = collection(db, 'categories')
        const categoryQuery = query(
          categoriesCollection,
          orderBy('name', 'asc'),
        )
        const categorySnapshot = await getDocs(categoryQuery)
        const fetchedCategories = categorySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Category,
        )
        setCategories(fetchedCategories)
        // Fetch tags
        const tagsCollection = collection(db, 'tags')
        const tagQuery = query(tagsCollection, orderBy('name', 'asc'))
        const tagSnapshot = await getDocs(tagQuery)
        const fetchedTags = tagSnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Tag,
        )
        setAvailableTags(fetchedTags)
      } catch (err) {
        console.error('Error fetching categories and tags:', err)
        setError('Failed to load categories and tags. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategoriesAndTags()
  }, [])
  // Populate form when editing a post
  useEffect(() => {
    if (post) {
      setFormData(post)
      if (post.featuredImage) {
        setImagePreview(post.featuredImage)
        setImageOption('url')
      }
      if (post.tags) {
        setSelectedTags(post.tags)
      }
    }
  }, [post])
  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    if (name === 'authorName') {
      setFormData((prev) => ({
        ...prev,
        author: {
          ...prev.author,
          name: value,
        },
      }))
    } else if (name === 'featuredImage') {
      setFormData((prev) => ({
        ...prev,
        featuredImage: value,
      }))
      // Clear error when imageUrl is changed
      setImageError(null)
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }
  // Calculate reading time based on content length
  const calculateReadingTime = (content: string): number => {
    const wordsPerMinute = 200
    const wordCount = content.trim().split(/\s+/).length
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  }
  // Handle image file upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setImageError(null)
    if (!file) return
    // Validate file type
    if (!file.type.match('image.*')) {
      setImageError('Please select an image file (PNG, JPG, JPEG, GIF)')
      return
    }
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setImageError('Image size should not exceed 5MB')
      return
    }
    setImageFile(file)
    // Create image preview
    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      setImagePreview(result)
      setFormData((prev) => ({
        ...prev,
        featuredImage: result,
      }))
    }
    reader.readAsDataURL(file)
  }
  // Handle image URL validation
  const validateImageUrl = (url: string) => {
    if (!url) return
    const img = new Image()
    img.onerror = () => {
      setImageError('Invalid image URL or image not accessible')
      setImagePreview(null)
    }
    img.onload = () => {
      setImageError(null)
      setImagePreview(url)
    }
    img.src = url
  }
  // Validate image URL when it changes
  useEffect(() => {
    if (imageOption === 'url' && formData.featuredImage) {
      validateImageUrl(formData.featuredImage)
    }
  }, [formData.featuredImage, imageOption])
  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
  }
  // Auto-generate slug when title changes
  useEffect(() => {
    if (formData.title && !post) {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(formData.title),
      }))
    }
  }, [formData.title, post])
  // Handle adding a tag
  const handleAddTag = async () => {
    if (newTagName.trim() === '') return
    setError(null)
    // Generate slug from name
    const slug = generateSlug(newTagName)
    try {
      // Check if tag with this name already exists
      const tagsCollection = collection(db, 'tags')
      const tagQuery = query(
        tagsCollection,
        where('name', '==', newTagName.trim()),
      )
      const tagSnapshot = await getDocs(tagQuery)
      if (!tagSnapshot.empty) {
        // Tag already exists, use it
        const existingTag = {
          id: tagSnapshot.docs[0].id,
          ...tagSnapshot.docs[0].data(),
        } as Tag
        if (!selectedTags.some((t) => t.id === existingTag.id)) {
          setSelectedTags([...selectedTags, existingTag])
        }
      } else {
        // Create new tag in Firestore
        const newTagData = {
          name: newTagName.trim(),
          slug,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }
        const docRef = await addDoc(collection(db, 'tags'), newTagData)
        // Create new tag object with Firestore ID
        const newTag = {
          id: docRef.id,
          name: newTagName.trim(),
          slug,
        }
        // Add to selected tags and available tags
        setSelectedTags([...selectedTags, newTag])
        setAvailableTags([...availableTags, newTag])
      }
      // Clear input
      setNewTagName('')
    } catch (err) {
      console.error('Error adding new tag:', err)
      setError('Failed to add new tag. Please try again.')
    }
  }
  // Handle selecting a tag
  const handleSelectTag = (tag: Tag) => {
    if (!selectedTags.some((t) => t.id === tag.id)) {
      setSelectedTags([...selectedTags, tag])
    }
  }
  // Handle removing a tag
  const handleRemoveTag = (tagId: number | string) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== tagId))
  }
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSaving(true)
    // Validate image URL if option is URL
    if (imageOption === 'url' && formData.featuredImage && !imagePreview) {
      setImageError('Please enter a valid image URL')
      setIsSaving(false)
      return
    }
    try {
      // Calculate reading time
      const readingTime = calculateReadingTime(formData.content)
      // Generate a sharable URL
      const sharableUrl = `${window.location.origin}/blog/${formData.slug}`
      // Add selected tags to form data
      const finalFormData = {
        ...formData,
        readingTime,
        sharableUrl,
        tags: selectedTags,
      } as any
      // Save to Firestore
      if (finalFormData.id) {
        // Update existing post
        const postRef = doc(db, 'posts', finalFormData.id as string)
        await updateDoc(postRef, {
          title: finalFormData.title,
          slug: finalFormData.slug,
          excerpt: finalFormData.excerpt || '',
          content: finalFormData.content || '',
          featuredImage: finalFormData.featuredImage || '',
          author: {
            name: finalFormData.author.name,
            avatar: finalFormData.author.avatar || '',
          },
          publishedDate: finalFormData.publishedDate,
          readingTime: readingTime,
          tags: selectedTags.map((tag) => ({
            id: tag.id,
            name: tag.name,
            slug: tag.slug,
          })),
          isFeatured: finalFormData.isFeatured || false,
          status: finalFormData.status,
          sharableUrl: sharableUrl,
          updatedAt: serverTimestamp(),
        })
        // Get the updated document to return
        const updatedDoc = await getDoc(postRef)
        const updatedPost = {
          id: updatedDoc.id,
          ...updatedDoc.data(),
        } as any
        onSave(updatedPost)
      } else {
        // Create new post
        const newPostData = {
          title: finalFormData.title,
          slug: finalFormData.slug,
          excerpt: finalFormData.excerpt || '',
          content: finalFormData.content || '',
          featuredImage: finalFormData.featuredImage || '',
          author: {
            name: finalFormData.author.name,
            avatar: finalFormData.author.avatar || '',
          },
          publishedDate: new Date().toISOString(),
          readingTime: readingTime,
          tags: selectedTags.map((tag) => ({
            id: tag.id,
            name: tag.name,
            slug: tag.slug,
          })),
          isFeatured: finalFormData.isFeatured || false,
          status: finalFormData.status,
          sharableUrl: sharableUrl,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }
        const docRef = await addDoc(collection(db, 'posts'), newPostData)
        // Return the new post with its Firestore ID
        const newPost = {
          id: docRef.id,
          ...newPostData,
        } as any
        onSave(newPost)
      }
    } catch (err) {
      console.error('Error saving post:', err)
      setError('Failed to save post. Please try again.')
      setIsSaving(false)
    }
  }
  // Handle image option change
  const handleImageOptionChange = (option: 'url' | 'upload') => {
    setImageOption(option)
    setImageError(null)
    if (option === 'upload') {
      setFormData((prev) => ({
        ...prev,
        featuredImage: imagePreview || '',
      }))
    } else {
      setImagePreview(formData.featuredImage || null)
    }
  }
  // Show loading spinner while fetching data
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center">
          <LoaderIcon size={32} className="animate-spin text-blue-600 mb-4" />
          <p className="text-gray-700">Loading categories and tags...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {post ? 'Edit Post' : 'Create New Post'}
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700"
          >
            <XIcon size={24} />
          </button>
        </div>
        {error && (
          <div className="mx-6 mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          {/* Slug */}
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="post-url-slug"
            />
            <p className="text-sm text-gray-500 mt-1">
              This will be used in the post's URL
            </p>
          </div>
          {/* Author */}
          <div>
            <label
              htmlFor="authorName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Author
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={formData.author.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author name"
            />
          </div>
          {/* Excerpt */}
          <div>
            <label
              htmlFor="excerpt"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief summary of the post"
            ></textarea>
          </div>
          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            {/* Selected Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedTags.length === 0 ? (
                <p className="text-gray-500 text-sm">No tags selected</p>
              ) : (
                selectedTags.map((tag) => (
                  <div
                    key={tag.id}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {tag.name}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag.id)}
                      className="ml-1.5 text-blue-800 hover:text-blue-900"
                    >
                      <XIcon size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>
            {/* Add New Tag */}
            <div className="flex mb-3">
              <input
                type="text"
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a new tag"
              />
              <button
                type="button"
                onClick={handleAddTag}
                disabled={newTagName.trim() === ''}
                className="bg-blue-600 text-white px-3 py-2 rounded-r-md hover:bg-blue-700 disabled:bg-blue-300 flex items-center"
              >
                {isSaving ? (
                  <LoaderIcon size={20} className="animate-spin" />
                ) : (
                  <PlusIcon size={20} />
                )}
              </button>
            </div>
            {/* Available Tags */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Available Tags:
              </p>
              <div className="flex flex-wrap gap-2">
                {availableTags
                  .filter((tag) => !selectedTags.some((t) => t.id === tag.id))
                  .map((tag) => (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() => handleSelectTag(tag)}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 flex items-center"
                    >
                      <TagIcon size={12} className="mr-1" />
                      {tag.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>
          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>
            {/* Image Option Tabs */}
            <div className="flex border-b border-gray-200 mb-4">
              <button
                type="button"
                className={`py-2 px-4 font-medium flex items-center ${imageOption === 'url' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                onClick={() => handleImageOptionChange('url')}
              >
                <LinkIcon size={16} className="mr-2" />
                Image URL
              </button>
              <button
                type="button"
                className={`py-2 px-4 font-medium flex items-center ${imageOption === 'upload' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                onClick={() => handleImageOptionChange('upload')}
              >
                <UploadIcon size={16} className="mr-2" />
                Upload Image
              </button>
            </div>
            {/* Image URL Input */}
            {imageOption === 'url' && (
              <div>
                <input
                  type="text"
                  id="featuredImage"
                  name="featuredImage"
                  value={formData.featuredImage || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image URL"
                />
                {imageError && (
                  <p className="text-red-500 text-sm mt-1">{imageError}</p>
                )}
              </div>
            )}
            {/* Image Upload Input */}
            {imageOption === 'upload' && (
              <div>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
                  <ImageIcon size={32} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">
                    Drag & drop an image or click to browse
                  </p>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <label
                    htmlFor="imageUpload"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    Browse Files
                  </label>
                  {imageError && (
                    <p className="text-red-500 text-sm mt-2">{imageError}</p>
                  )}
                </div>
              </div>
            )}
            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Preview
                </p>
                <div className="relative w-full h-48 bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null)
                      setImageFile(null)
                      setFormData((prev) => ({
                        ...prev,
                        featuredImage: '',
                      }))
                    }}
                    className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white p-1 rounded-full hover:bg-opacity-100"
                  >
                    <XIcon size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content || ''}
              onChange={handleChange}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your post content here"
            ></textarea>
          </div>
          {/* Featured Post */}
          <div>
            <div className="flex items-center">
              <input
                id="isFeatured"
                name="isFeatured"
                type="checkbox"
                checked={formData.isFeatured || false}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isFeatured: e.target.checked,
                  }))
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="isFeatured"
                className="ml-2 block text-sm text-gray-900"
              >
                Feature this post
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Featured posts appear prominently on the homepage
            </p>
          </div>
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Draft"
                  checked={formData.status === 'Draft'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Draft</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Published"
                  checked={formData.status === 'Published'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Published</span>
              </label>
            </div>
          </div>
          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              disabled={isSaving}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <LoaderIcon size={18} className="animate-spin mr-2" />
                  Saving...
                </>
              ) : post ? (
                'Update Post'
              ) : (
                <>
                  <ShareIcon size={16} className="mr-2" />
                  Create & Get Shareable Link
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
