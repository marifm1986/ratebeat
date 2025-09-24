import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { MenuIcon, XIcon } from 'lucide-react';
export default function Header() {
  const {
    currentUser,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };
  return <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            RateBeat Blog
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            {currentUser ? <>
                {(currentUser.role === 'admin' || currentUser.role === 'author') && <Link to="/admin/dashboard" className="text-gray-700 hover:text-indigo-600">
                    Dashboard
                  </Link>}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Hi, {currentUser.displayName}
                  </span>
                  <button onClick={handleLogout} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                    Logout
                  </button>
                </div>
              </> : <div className="flex space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                  Login
                </Link>
                <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                  Register
                </Link>
              </div>}
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="h-6 w-6 text-gray-700" /> : <MenuIcon className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            {currentUser ? <>
                {(currentUser.role === 'admin' || currentUser.role === 'author') && <Link to="/admin/dashboard" className="block text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>}
                <div className="pt-2 border-t border-gray-200">
                  <span className="block text-gray-600 mb-2">
                    Hi, {currentUser.displayName}
                  </span>
                  <button onClick={() => {
              handleLogout();
              setIsMenuOpen(false);
            }} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full text-left">
                    Logout
                  </button>
                </div>
              </> : <div className="pt-2 border-t border-gray-200 space-y-2">
                <Link to="/login" className="block text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition" onClick={() => setIsMenuOpen(false)}>
                  Register
                </Link>
              </div>}
          </nav>}
      </div>
    </header>;
}