import React, { useEffect, useState } from 'react'
import {
  PlusIcon,
  SearchIcon,
  EditIcon,
  TrashIcon,
  XIcon,
  LoaderIcon,
} from 'lucide-react'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore'
import { db } from '../firebase/config'
// Define types for categories and tags
interface Category {
  id: number | string
  name: string
  slug: string
  createdAt?: any
  updatedAt?: any
}
interface Tag {
  id: number | string
  name: string
  slug: string
  createdAt?: any
  updatedAt?: any
}
// Form data type for category and tag forms
interface FormData {
  id?: number | string
  name: string
  slug: string
}
export const CategoriesPage = () => {
  // State for categories and tags
  const [categories, setCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  // Loading and error states
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [tagsLoading, setTagsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // Search states
  const [categorySearch, setCategorySearch] = useState('')
  const [tagSearch, setTagSearch] = useState('')
  // Modal states
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [tagModalOpen, setTagModalOpen] = useState(false)
  // Delete confirmation states
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(
    null,
  )
  const [tagToDelete, setTagToDelete] = useState<Tag | null>(null)
  // Form data states
  const [categoryFormData, setCategoryFormData] = useState<FormData>({
    name: '',
    slug: '',
  })
  const [tagFormData, setTagFormData] = useState<FormData>({
    name: '',
    slug: '',
  })
  // Fetch categories and tags from Firestore
  useEffect(() => {
    const fetchCategories = async () => {
      setCategoriesLoading(true)
      try {
        const categoriesCollection = collection(db, 'categories')
        const categoryQuery = query(
          categoriesCollection,
          orderBy('name', 'asc'),
        )
        const snapshot = await getDocs(categoryQuery)
        const fetchedCategories = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Category,
        )
        setCategories(fetchedCategories)
      } catch (err) {
        console.error('Error fetching categories:', err)
        setError('Failed to load categories. Please try again later.')
      } finally {
        setCategoriesLoading(false)
      }
    }
    const fetchTags = async () => {
      setTagsLoading(true)
      try {
        const tagsCollection = collection(db, 'tags')
        const tagQuery = query(tagsCollection, orderBy('name', 'asc'))
        const snapshot = await getDocs(tagQuery)
        const fetchedTags = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Tag,
        )
        setTags(fetchedTags)
      } catch (err) {
        console.error('Error fetching tags:', err)
        setError('Failed to load tags. Please try again later.')
      } finally {
        setTagsLoading(false)
      }
    }
    fetchCategories()
    fetchTags()
  }, [])
  // Filter categories and tags based on search
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(categorySearch.toLowerCase()),
  )
  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(tagSearch.toLowerCase()),
  )
  // Function to generate slug from name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
  }
  // Reset form data when modals close
  useEffect(() => {
    if (!categoryModalOpen) {
      setCategoryFormData({
        name: '',
        slug: '',
      })
    }
  }, [categoryModalOpen])
  useEffect(() => {
    if (!tagModalOpen) {
      setTagFormData({
        name: '',
        slug: '',
      })
    }
  }, [tagModalOpen])
  // Handle category form input changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCategoryFormData((prev) => {
      // If name field is changed, also update the slug
      if (name === 'name') {
        return {
          ...prev,
          [name]: value,
          slug: generateSlug(value),
        }
      }
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  // Handle tag form input changes
  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTagFormData((prev) => {
      // If name field is changed, also update the slug
      if (name === 'name') {
        return {
          ...prev,
          [name]: value,
          slug: generateSlug(value),
        }
      }
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  // Open category edit modal
  const handleEditCategory = (category: Category) => {
    setCategoryFormData({
      id: category.id,
      name: category.name,
      slug: category.slug,
    })
    setCategoryModalOpen(true)
  }
  // Open tag edit modal
  const handleEditTag = (tag: Tag) => {
    setTagFormData({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
    })
    setTagModalOpen(true)
  }
  // Handle category save
  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault()
    if (categoryFormData.name.trim() === '') return
    try {
      if (categoryFormData.id) {
        // Update existing category in Firestore
        const categoryRef = doc(db, 'categories', categoryFormData.id as string)
        await updateDoc(categoryRef, {
          name: categoryFormData.name,
          slug: categoryFormData.slug,
          updatedAt: serverTimestamp(),
        })
        // Update state
        setCategories(
          categories.map((cat) =>
            cat.id === categoryFormData.id
              ? {
                ...cat,
                name: categoryFormData.name,
                slug: categoryFormData.slug,
              }
              : cat,
          ),
        )
      } else {
        // Create new category in Firestore
        const newCategoryData = {
          name: categoryFormData.name,
          slug: categoryFormData.slug,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }
        const docRef = await addDoc(
          collection(db, 'categories'),
          newCategoryData,
        )
        const newCategory = {
          id: docRef.id,
          ...newCategoryData,
        }
        setCategories([...categories, newCategory])
      }
      setCategoryModalOpen(false)
    } catch (err) {
      console.error('Error saving category:', err)
      setError('Failed to save category. Please try again.')
    }
  }
  // Handle tag save
  const handleSaveTag = async (e: React.FormEvent) => {
    e.preventDefault()
    if (tagFormData.name.trim() === '') return
    try {
      if (tagFormData.id) {
        // Update existing tag in Firestore
        const tagRef = doc(db, 'tags', tagFormData.id as string)
        await updateDoc(tagRef, {
          name: tagFormData.name,
          slug: tagFormData.slug,
          updatedAt: serverTimestamp(),
        })
        // Update state
        setTags(
          tags.map((tag) =>
            tag.id === tagFormData.id
              ? {
                ...tag,
                name: tagFormData.name,
                slug: tagFormData.slug,
              }
              : tag,
          ),
        )
      } else {
        // Create new tag in Firestore
        const newTagData = {
          name: tagFormData.name,
          slug: tagFormData.slug,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }
        const docRef = await addDoc(collection(db, 'tags'), newTagData)
        const newTag = {
          id: docRef.id,
          ...newTagData,
        }
        setTags([...tags, newTag])
      }
      setTagModalOpen(false)
    } catch (err) {
      console.error('Error saving tag:', err)
      setError('Failed to save tag. Please try again.')
    }
  }
  // Handle category delete
  const handleDeleteCategory = (category: Category) => {
    setCategoryToDelete(category)
  }
  // Handle tag delete
  const handleDeleteTag = (tag: Tag) => {
    setTagToDelete(tag)
  }
  // Confirm category delete
  const confirmDeleteCategory = async () => {
    if (categoryToDelete) {
      try {
        // Delete from Firestore
        await deleteDoc(doc(db, 'categories', categoryToDelete.id as string))
        // Update state
        setCategories(
          categories.filter((cat) => cat.id !== categoryToDelete.id),
        )
        setCategoryToDelete(null)
      } catch (err) {
        console.error('Error deleting category:', err)
        setError('Failed to delete category. Please try again.')
      }
    }
  }
  // Confirm tag delete
  const confirmDeleteTag = async () => {
    if (tagToDelete) {
      try {
        // Delete from Firestore
        await deleteDoc(doc(db, 'tags', tagToDelete.id as string))
        // Update state
        setTags(tags.filter((tag) => tag.id !== tagToDelete.id))
        setTagToDelete(null)
      } catch (err) {
        console.error('Error deleting tag:', err)
        setError('Failed to delete tag. Please try again.')
      }
    }
  }
  // Display error message if there's an error
  if (error) {
    return (
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
          <button
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setError(null)}
          >
            <XIcon size={20} />
          </button>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Categories & Tags</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Categories Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <button
              onClick={() => setCategoryModalOpen(true)}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              <PlusIcon size={20} className="mr-2" />
              Add New
            </button>
          </div>
          <div className="mb-4 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search categories"
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="bg-white rounded-lg border border-gray-200 overflow-auto h-[calc(100vh_-_16rem)]">
            {categoriesLoading ? (
              <div className="p-8 flex justify-center">
                <LoaderIcon size={24} className="animate-spin text-blue-600" />
              </div>
            ) : filteredCategories.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No categories found
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="p-4 border-b border-gray-100 flex items-center justify-between  hover:bg-slate-200"
                >
                  <div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.slug}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditCategory(category)}
                      className="p-1 text-gray-600 hover:text-blue-600"
                    >
                      <EditIcon size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category)}
                      className="p-1 text-gray-600 hover:text-red-600"
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* Tags Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Tags</h2>
            <button
              onClick={() => setTagModalOpen(true)}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              <PlusIcon size={20} className="mr-2" />
              Add New
            </button>
          </div>
          <div className="mb-4 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search tags"
              value={tagSearch}
              onChange={(e) => setTagSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="bg-white rounded-lg border border-gray-200 overflow-auto h-[calc(100vh_-_16rem)]">
            {tagsLoading ? (
              <div className="p-8 flex justify-center">
                <LoaderIcon size={24} className="animate-spin text-blue-600" />
              </div>
            ) : filteredTags.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No tags found</div>
            ) : (
              filteredTags.map((tag) => (
                <div
                  key={tag.id}
                  className="p-4 border-b border-gray-100 flex items-center justify-between hover:bg-slate-200"
                >
                  <div>
                    <h3 className="font-medium">{tag.name}</h3>
                    <p className="text-sm text-gray-500">{tag.slug}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditTag(tag)}
                      className="p-1 text-gray-600 hover:text-blue-600"
                    >
                      <EditIcon size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteTag(tag)}
                      className="p-1 text-gray-600 hover:text-red-600"
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* Category Modal */}
      {categoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {categoryFormData.id ? 'Edit Category' : 'Add New Category'}
              </h2>
              <button
                onClick={() => setCategoryModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon size={24} />
              </button>
            </div>
            <form onSubmit={handleSaveCategory}>
              <div className="mb-4">
                <label
                  htmlFor="categoryName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  name="name"
                  value={categoryFormData.name}
                  onChange={handleCategoryChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Category name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="categorySlug"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Slug
                </label>
                <input
                  type="text"
                  id="categorySlug"
                  name="slug"
                  value={categoryFormData.slug}
                  onChange={handleCategoryChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="category-slug"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  The "slug" is the URL-friendly version of the name. It is
                  usually all lowercase and contains only letters, numbers, and
                  hyphens.
                </p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setCategoryModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {categoryFormData.id ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Tag Modal */}
      {tagModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {tagFormData.id ? 'Edit Tag' : 'Add New Tag'}
              </h2>
              <button
                onClick={() => setTagModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon size={24} />
              </button>
            </div>
            <form onSubmit={handleSaveTag}>
              <div className="mb-4">
                <label
                  htmlFor="tagName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="tagName"
                  name="name"
                  value={tagFormData.name}
                  onChange={handleTagChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tag name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="tagSlug"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Slug
                </label>
                <input
                  type="text"
                  id="tagSlug"
                  name="slug"
                  value={tagFormData.slug}
                  onChange={handleTagChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tag-slug"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  The "slug" is the URL-friendly version of the name. It is
                  usually all lowercase and contains only letters, numbers, and
                  hyphens.
                </p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setTagModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {tagFormData.id ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Delete Category Confirmation */}
      {categoryToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <TrashIcon className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="text-xl font-bold mb-4">Delete Category</h2>
              <p className="text-gray-600 mb-1">
                Are you sure you want to delete "{categoryToDelete.name}"?
              </p>
              <p className="text-gray-500 text-sm mb-6">
                This action cannot be undone.
              </p>
              <div className="flex space-x-4 w-full">
                <button
                  onClick={confirmDeleteCategory}
                  className="w-1/2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => setCategoryToDelete(null)}
                  className="w-1/2 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Delete Tag Confirmation */}
      {tagToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <TrashIcon className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="text-xl font-bold mb-4">Delete Tag</h2>
              <p className="text-gray-600 mb-1">
                Are you sure you want to delete "{tagToDelete.name}"?
              </p>
              <p className="text-gray-500 text-sm mb-6">
                This action cannot be undone.
              </p>
              <div className="flex space-x-4 w-full">
                <button
                  onClick={confirmDeleteTag}
                  className="w-1/2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => setTagToDelete(null)}
                  className="w-1/2 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
