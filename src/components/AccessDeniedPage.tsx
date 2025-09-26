import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { ShieldAlertIcon } from 'lucide-react'
export const AccessDeniedPage = () => {
  const location = useLocation()
  const { requiredArea } = location.state || {}
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-red-100 text-red-600 p-3 rounded-full mb-6">
          <ShieldAlertIcon size={48} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Access Denied
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
          You don't have permission to access{' '}
          {requiredArea ? `the ${requiredArea} area` : 'this page'}.
        </p>
        <p className="text-gray-500 mb-8 text-center max-w-lg">
          If you believe you should have access to this area, please contact
          your administrator.
        </p>
        <Link
          to="/admin"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  )
}
