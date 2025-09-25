import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
export const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
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
      <div className="flex-1 overflow-auto p-6 md:p-8">
        <Outlet />
      </div>
    </div>
  )
}
