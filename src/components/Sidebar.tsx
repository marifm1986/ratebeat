import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboardIcon,
  FileTextIcon,
  MessageSquareIcon,
  TagIcon,
  SettingsIcon,
  XIcon,
  BookmarkIcon,
  LogOutIcon,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
interface SidebarProps {
  onClose: () => void
}
export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout, currentUser } = useAuth()
  const currentPath = location.pathname
  // Check if we're on the dashboard page (either /admin or /admin/)
  const isDashboardActive =
    currentPath === '/admin' || currentPath === '/admin/'
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }
  return (
    <div className="bg-white h-screen w-64 border-r border-gray-200 flex flex-col">
      {/* Close button for mobile */}
      <button
        onClick={onClose}
        className="md:hidden absolute top-4 right-4 p-1 rounded-md hover:bg-gray-100"
      >
        <XIcon size={20} />
      </button>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <NavItem
          icon={<LayoutDashboardIcon size={20} />}
          label="Dashboard"
          to="/admin/"
          active={isDashboardActive}
        />
        {currentUser && (
          <AccessControlledNavItem
            icon={<FileTextIcon size={20} />}
            label="Posts"
            to="/admin/posts"
            active={currentPath === '/admin/posts'}
            requiredArea="posts"
          />
        )}
        {currentUser && (
          <AccessControlledNavItem
            icon={<MessageSquareIcon size={20} />}
            label="Comments"
            to="/admin/comments"
            active={currentPath === '/admin/comments'}
            requiredArea="comments"
          />
        )}
        {currentUser && (
          <AccessControlledNavItem
            icon={<BookmarkIcon size={20} />}
            label="Categories & Tags"
            to="/admin/categories"
            active={currentPath === '/admin/categories'}
            requiredArea="categories"
          />
        )}
        {currentUser && (
          <AccessControlledNavItem
            icon={<SettingsIcon size={20} />}
            label="Settings"
            to="/admin/settings"
            active={currentPath === '/admin/settings'}
            requiredArea="settings"
            adminOnly={true}
          />
        )}
      </nav>
      {/* Logout button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 rounded-md cursor-pointer w-full text-gray-700 hover:bg-gray-100"
        >
          <LogOutIcon size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
interface NavItemProps {
  icon: React.ReactNode
  label: string
  to: string
  active?: boolean
}
const NavItem = ({ icon, label, to, active }: NavItemProps) => {
  return (
    <Link to={to} className="block">
      <div
        className={`flex items-center space-x-3 px-4 py-3 rounded-md cursor-pointer ${active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
      >
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  )
}
interface AccessControlledNavItemProps {
  icon: React.ReactNode
  label: string
  to: string
  active?: boolean
  requiredArea: string
  adminOnly?: boolean
}
const AccessControlledNavItem = ({
  icon,
  label,
  to,
  active,
  requiredArea,
  adminOnly,
}: AccessControlledNavItemProps) => {
  const { currentUser } = useAuth()
  const [userRole, setUserRole] = useState<string | null>(null)
  const [userAccessAreas, setUserAccessAreas] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchUserRole = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
          if (userDoc.exists()) {
            const userData = userDoc.data()
            setUserRole(userData.role)
            setUserAccessAreas(userData.accessAreas || [])
          }
        } catch (error) {
          console.error('Error fetching user role:', error)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }
    fetchUserRole()
  }, [currentUser])
  if (loading) return null
  // Check if user has access based on role and access areas
  const hasAccess = () => {
    // If admin only and user is not admin, deny access
    if (adminOnly && userRole !== 'admin') {
      return false
    }
    // Admin role has access to everything
    if (userRole === 'admin') {
      return true
    }
    // Check if user has access to the specific area
    return userAccessAreas.includes(requiredArea)
  }
  if (!hasAccess()) return null
  return (
    <Link to={to} className="block">
      <div
        className={`flex items-center space-x-3 px-4 py-3 rounded-md cursor-pointer ${active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
      >
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  )
}
