import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    LayoutDashboardIcon,
    FileTextIcon,
    MessageSquareIcon,
    TagIcon,
    SettingsIcon,
    XIcon,
    BookmarkIcon,
} from 'lucide-react'
interface SidebarProps {
    onClose: () => void
}
export const Sidebar = ({ onClose }: SidebarProps) => {
    const location = useLocation()
    const currentPath = location.pathname
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
                    active={currentPath === '/admin/'}
                />
                <NavItem
                    icon={<FileTextIcon size={20} />}
                    label="Posts"
                    to="/admin/posts"
                    active={currentPath === '/admin/posts'}
                />
                <NavItem
                    icon={<MessageSquareIcon size={20} />}
                    label="Comments"
                    to="/admin/comments"
                    active={currentPath === '/admin/comments'}
                />
                <NavItem
                    icon={<BookmarkIcon size={20} />}
                    label="Categories & Tags"
                    to="/admin/categories"
                    active={currentPath === '/admin/categories'}
                />
                
                <NavItem
                    icon={<SettingsIcon size={20} />}
                    label="Settings"
                    to="/admin/settings"
                    active={currentPath === '/admin/settings'}
                />
            </nav>
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
