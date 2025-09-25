import React, { useEffect, useState } from 'react'
import { BellIcon, UserIcon, PencilIcon, XIcon } from 'lucide-react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { doc, updateDoc } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import { useAuth } from '../../context/AuthContext'
import { db } from '../../firebase/config'
import { Sidebar } from '../../components/Sidebar'
export const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const [profileFormData, setProfileFormData] = useState({
    displayName: '',
    photoURL: '',
  })
  const [updating, setUpdating] = useState(false)
  const [updateError, setUpdateError] = useState<string | null>(null)
  const { currentUser } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  // Initialize form data when user data is available
  useEffect(() => {
    if (currentUser) {
      setProfileFormData({
        displayName: currentUser.displayName || '',
        photoURL: currentUser.photoURL || '',
      })
    }
  }, [currentUser])
  // Check for access denied state passed from ProtectedRoute
  useEffect(() => {
    if (location.state?.accessDenied) {
      navigate('/admin/access-denied', {
        state: {
          requiredArea: location.state.requiredArea,
        },
        replace: true,
      })
    }
  }, [location.state, navigate])
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentUser) return
    setUpdating(true)
    setUpdateError(null)
    try {
      // Update Firebase Auth profile
      await updateProfile(currentUser, {
        displayName: profileFormData.displayName,
        photoURL: profileFormData.photoURL || null,
      })
      // Update user document in Firestore (maintain role and permissions)
      await updateDoc(doc(db, 'users', currentUser.uid), {
        displayName: profileFormData.displayName,
        photoURL: profileFormData.photoURL || null,
      })
      setProfileModalOpen(false)
    } catch (error) {
      console.error('Error updating profile:', error)
      setUpdateError('Failed to update profile. Please try again.')
    } finally {
      setUpdating(false)
    }
  }
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`md:block ${sidebarOpen ? 'block' : 'hidden'} fixed md:relative z-40 md:z-auto`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top header with user info */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <BellIcon size={20} />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
            <div className="flex items-center space-x-2 group relative">
              {currentUser?.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt="User avatar"
                  className="h-8 w-8 rounded-full border border-gray-200 cursor-pointer"
                  onClick={() => setProfileModalOpen(true)}
                />
              ) : (
                <div
                  className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => setProfileModalOpen(true)}
                >
                  <UserIcon size={16} />
                </div>
              )}
              <div>
                <p className="text-sm font-medium">
                  {currentUser?.displayName ||
                    currentUser?.email ||
                    'Admin User'}
                </p>
                <p className="text-xs text-gray-500">
                  <button
                    className="flex items-center hover:text-blue-600"
                    onClick={() => setProfileModalOpen(true)}
                  >
                    <span>Edit Profile</span>
                    <PencilIcon size={12} className="ml-1" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-auto p-6 md:p-8">
          <Outlet />
        </div>
      </div>
      {/* Profile Edit Modal */}
      {profileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-lg font-semibold">Edit Your Profile</h3>
              <button
                onClick={() => setProfileModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XIcon size={20} />
              </button>
            </div>
            <form onSubmit={handleProfileUpdate} className="p-6">
              {updateError && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
                  {updateError}
                </div>
              )}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  value={profileFormData.displayName}
                  onChange={(e) =>
                    setProfileFormData({
                      ...profileFormData,
                      displayName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Photo URL
                </label>
                <input
                  type="url"
                  value={profileFormData.photoURL}
                  onChange={(e) =>
                    setProfileFormData({
                      ...profileFormData,
                      photoURL: e.target.value,
                    })
                  }
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {profileFormData.photoURL && (
                  <div className="mt-2 flex items-center">
                    <img
                      src={profileFormData.photoURL}
                      alt="Profile preview"
                      className="h-10 w-10 rounded-full object-cover mr-2"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src =
                          'https://via.placeholder.com/40?text=Error'
                      }}
                    />
                    <span className="text-xs text-gray-500">Preview</span>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setProfileModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700"
                  disabled={updating}
                >
                  {updating ? 'Updating...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
