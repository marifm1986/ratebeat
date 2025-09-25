import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { LoaderIcon } from 'lucide-react'
interface ProtectedRouteProps {
  children: React.ReactNode
  requiredArea?: string
  adminOnly?: boolean
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredArea,
  adminOnly = false,
}) => {
  const { currentUser, loading } = useAuth()
  const location = useLocation()
  const [userRole, setUserRole] = useState<string | null>(null)
  const [userAccessAreas, setUserAccessAreas] = useState<string[]>([])
  const [permissionsLoading, setPermissionsLoading] = useState(true)
  const [accessDenied, setAccessDenied] = useState(false)
  useEffect(() => {
    const fetchUserPermissions = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
          if (userDoc.exists()) {
            const userData = userDoc.data()
            setUserRole(userData.role)
            setUserAccessAreas(userData.accessAreas || [])
          }
        } catch (err) {
          console.error('Error fetching user permissions:', err)
          setAccessDenied(true)
        } finally {
          setPermissionsLoading(false)
        }
      } else {
        setPermissionsLoading(false)
      }
    }
    if (!loading && currentUser) {
      fetchUserPermissions()
    } else if (!loading) {
      setPermissionsLoading(false)
    }
  }, [currentUser, loading])
  // Check if user has access to the required area
  const hasAccess = () => {
    // If no specific area is required, just check if user is logged in
    if (!requiredArea && !adminOnly) return true
    // If admin only and user is not admin, deny access
    if (adminOnly && userRole !== 'admin') return false
    // Admin role has access to everything
    if (userRole === 'admin') return true
    // Check if user has access to the specific area
    return userAccessAreas.includes(requiredArea || '')
  }
  // Show loading spinner while checking auth or permissions
  if (loading || permissionsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <LoaderIcon
            size={32}
            className="animate-spin text-blue-600 mb-4 mx-auto"
          />
          <p className="text-gray-600">Checking permissions...</p>
        </div>
      </div>
    )
  }
  // Redirect to login if not authenticated
  if (!currentUser) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    )
  }
  // Redirect to dashboard if authenticated but doesn't have required permissions
  if (!hasAccess()) {
    return (
      <Navigate
        to="/admin"
        state={{
          accessDenied: true,
          requiredArea: requiredArea,
        }}
        replace
      />
    )
  }
  return <>{children}</>
}
