import React, { useEffect, useState } from 'react'
import { XIcon, ImageIcon, LinkIcon, UploadIcon } from 'lucide-react'
interface Post {
    id: number
    title: string
    author: string
    category: string
    status: 'Published' | 'Draft'
    content?: string
    imageUrl?: string
}
interface PostFormProps {
    post: Post | null
    onSave: (post: Post) => void
    onCancel: () => void
}
export const PostForm = ({ post, onSave, onCancel }: PostFormProps) => {
    // Initialize form state
    const [formData, setFormData] = useState<
        Omit<Post, 'id'> & {
            id?: number
        }
    >({
        title: '',
        author: '',
        category: '',
        status: 'Draft' as const,
        content: '',
        imageUrl: '',
    })
    // State for image upload
    const [imageOption, setImageOption] = useState<'url' | 'upload'>('url')
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [imageError, setImageError] = useState<string | null>(null)
    // Populate form when editing a post
    useEffect(() => {
        if (post) {
            setFormData(post)
            if (post.imageUrl) {
                setImagePreview(post.imageUrl)
                setImageOption('url')
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
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        // Clear error when imageUrl is changed
        if (name === 'imageUrl') {
            setImageError(null)
        }
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
                imageUrl: result,
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
        if (imageOption === 'url' && formData.imageUrl) {
            validateImageUrl(formData.imageUrl)
        }
    }, [formData.imageUrl, imageOption])
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Validate image URL if option is URL
        if (imageOption === 'url' && formData.imageUrl && !imagePreview) {
            setImageError('Please enter a valid image URL')
            return
        }
        onSave(formData as Post)
    }
    // Handle image option change
    const handleImageOptionChange = (option: 'url' | 'upload') => {
        setImageOption(option)
        setImageError(null)
        if (option === 'upload') {
            setFormData((prev) => ({
                ...prev,
                imageUrl: imagePreview || '',
            }))
        } else {
            setImagePreview(formData.imageUrl || null)
        }
    }
    // Categories for dropdown
    const categories = [
        'Technology',
        'Science',
        'Lifestyle',
        'History',
        'Business',
        'Health',
    ]
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
                    {/* Author */}
                    <div>
                        <label
                            htmlFor="author"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter author name"
                        />
                    </div>
                    {/* Category */}
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
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
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={formData.imageUrl || ''}
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
                                                imageUrl: '',
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
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            {post ? 'Update Post' : 'Create Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
