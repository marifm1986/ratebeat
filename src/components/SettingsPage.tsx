import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, setDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db, auth } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { PlusIcon, PencilIcon, TrashIcon, UserIcon, ShieldIcon, XIcon } from 'lucide-react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// Define user interface
interface User {
  id: string;
  email: string;
  displayName: string;
  role: 'admin' | 'editor' | 'viewer';
  accessAreas: string[];
  photoURL?: string;
  createdAt: number;
  lastLogin?: number;
}
// Define available roles and access areas
const ROLES = [{
  id: 'admin',
  name: 'Administrator',
  description: 'Full access to all features'
}, {
  id: 'editor',
  name: 'Editor',
  description: 'Can create and edit content'
}, {
  id: 'viewer',
  name: 'Viewer',
  description: 'Read-only access'
}];
const ACCESS_AREAS = [{
  id: 'dashboard',
  name: 'Dashboard'
}, {
  id: 'posts',
  name: 'Posts'
}, {
  id: 'comments',
  name: 'Comments'
}, {
  id: 'categories',
  name: 'Categories & Tags'
}, {
  id: 'settings',
  name: 'Settings'
}];
export const SettingsPage = () => {
  const {
    currentUser
  } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [userExistsInAuth, setUserExistsInAuth] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    displayName: '',
    role: 'viewer' as 'admin' | 'editor' | 'viewer',
    accessAreas: [] as string[],
    photoURL: '',
    password: '',
    uid: '' // Added field for manually entering UID for existing auth users
  });
  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as User[];
        setUsers(usersList);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  const openAddUserModal = () => {
    setEditingUser(null);
    setUserExistsInAuth(false);
    setFormData({
      email: '',
      displayName: '',
      role: 'viewer',
      accessAreas: [],
      photoURL: '',
      password: '',
      uid: ''
    });
    setIsModalOpen(true);
  };
  const openEditUserModal = (user: User) => {
    setEditingUser(user);
    setFormData({
      email: user.email,
      displayName: user.displayName,
      role: user.role,
      accessAreas: user.accessAreas,
      photoURL: user.photoURL || '',
      password: '', // Don't populate password when editing
    } as any)
    setIsModalOpen(true);
  };
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value as 'admin' | 'editor' | 'viewer';
    // Set default access areas based on role
    let defaultAccessAreas: string[] = [];
    if (role === 'admin') {
      // Admins get access to everything
      defaultAccessAreas = ACCESS_AREAS.map(area => area.id);
    } else if (role === 'editor') {
      // Editors get access to dashboard, posts, comments, categories
      defaultAccessAreas = ['dashboard', 'posts', 'comments', 'categories'];
    } else if (role === 'viewer') {
      // Viewers get access to dashboard only
      defaultAccessAreas = ['dashboard'];
    }
    setFormData(prev => ({
      ...prev,
      role,
      accessAreas: defaultAccessAreas
    }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any) => {
    const {
      name,
      value
    } = e.target;
    if (name === 'role') {
      handleRoleChange(e);
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleAccessAreaChange = (areaId: string) => {
    setFormData(prev => {
      if (prev.accessAreas.includes(areaId)) {
        return {
          ...prev,
          accessAreas: prev.accessAreas.filter(id => id !== areaId)
        };
      } else {
        return {
          ...prev,
          accessAreas: [...prev.accessAreas, areaId]
        };
      }
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userData: Omit<User, 'id'> = {
        email: formData.email,
        displayName: formData.displayName,
        role: formData.role,
        accessAreas: formData.accessAreas,
        createdAt: editingUser ? editingUser.createdAt : Date.now(),
        photoURL: formData.photoURL || ''
      };
      if (editingUser) {
        // Update existing user
        await setDoc(doc(db, 'users', editingUser.id), userData, {
          merge: true
        });
        setUsers(prev => prev.map(user => user.id === editingUser.id ? {
          ...userData,
          id: editingUser.id
        } : user));
      } else {
        // Check if user already exists in Firestore
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', formData.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setError('User with this email already exists in the database');
          setLoading(false);
          return;
        }
        if (userExistsInAuth) {
          // User exists in Authentication but not in Firestore
          // Use the provided UID or a generated one
          const userId = formData.uid || `auth-user-${Date.now()}`;
          try {
            // Create user in Firestore with the provided UID
            await setDoc(doc(db, 'users', userId), userData);
            setUsers(prev => [...prev, {
              ...userData,
              id: userId
            }]);
            setIsModalOpen(false);
          } catch (err) {
            console.error('Error creating user in Firestore:', err);
            setError('Failed to create user in database. Please try again.');
            setLoading(false);
            return;
          }
        } else {
          // Create new user in both Authentication and Firestore
          if (!formData.password) {
            setError('Password is required when creating a new user');
            setLoading(false);
            return;
          }
          try {
            // Create new user in Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            // Update profile with displayName and photoURL
            if (userCredential.user) {
              await updateProfile(userCredential.user, {
                displayName: formData.displayName,
                photoURL: formData.photoURL || null
              });
              // Create user in Firestore with the same UID from Authentication
              await setDoc(doc(db, 'users', userCredential.user.uid), userData);
              setUsers(prev => [...prev, {
                ...userData,
                id: userCredential.user.uid
              }]);
            }
          } catch (authError: any) {
            console.error('Error creating user in Authentication:', authError);
            if (authError.code === 'auth/email-already-in-use') {
              setError('This email already exists in Authentication. Use the "User already exists in Authentication" option.');
            } else {
              setError(authError.message || 'Failed to create user');
            }
            setLoading(false);
            return;
          }
        }
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error saving user:', err);
      setError('Failed to save user. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteUser = async (userId: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      setLoading(true);
      await deleteDoc(doc(db, 'users', userId));
      setUsers(prev => prev.filter(user => user.id !== userId));
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('Failed to delete user. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Settings</h1>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">User Management</h2>
          <button onClick={openAddUserModal} className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            <PlusIcon size={16} className="mr-2" />
            Add User
          </button>
        </div>
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
            {error}
          </div>}
        {loading && users.length === 0 ? <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">Loading users...</p>
          </div> : <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Access Areas
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map(user => <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {user.photoURL ? <img className="h-10 w-10 rounded-full" src={user.photoURL} alt={user.displayName} /> : <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <UserIcon size={20} className="text-gray-500" />
                            </div>}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.displayName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : user.role === 'editor' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        <ShieldIcon size={12} className="mr-1" />
                        {ROLES.find(r => r.id === user.role)?.name || user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {user.accessAreas.map(area => <span key={area} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            {ACCESS_AREAS.find(a => a.id === area)?.name || area}
                          </span>)}
                        {user.accessAreas.length === 0 && <span className="text-gray-400 text-sm italic">
                            None
                          </span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => openEditUserModal(user)} className="text-blue-600 hover:text-blue-900 mr-3">
                        <PencilIcon size={16} />
                      </button>
                      {/* Don't allow deleting yourself */}
                      {user.id !== currentUser?.uid && <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">
                          <TrashIcon size={16} />
                        </button>}
                    </td>
                  </tr>)}
                {users.length === 0 && <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      No users found. Click "Add User" to create one.
                    </td>
                  </tr>}
              </tbody>
            </table>
          </div>}
      </div>
      
      {/* User Modal */}
      {isModalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-lg font-semibold">
                {editingUser ? 'Edit User' : 'Add New User'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <XIcon size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required disabled={!!editingUser} />
              </div>
              {!editingUser && <div className="mb-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="userExistsInAuth" checked={userExistsInAuth} onChange={() => setUserExistsInAuth(!userExistsInAuth)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="userExistsInAuth" className="ml-2 text-sm text-gray-700">
                      User already exists in Authentication
                    </label>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Check this if the user already has an account but needs to
                    be added to the admin system
                  </p>
                </div>}
              {!editingUser && userExistsInAuth && <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User ID (Optional)
                  </label>
                  <input type="text" name="uid" value={formData.uid} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Leave blank to auto-generate" />
                  <p className="mt-1 text-xs text-gray-500">
                    If you know the user's Firebase UID, enter it here.
                    Otherwise, a temporary ID will be generated.
                  </p>
                </div>}
              {/* Only show password field for new users that don't exist in auth */}
              {!editingUser && !userExistsInAuth && <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required={!editingUser && !userExistsInAuth} minLength={6} />
                  <p className="mt-1 text-xs text-gray-500">
                    Minimum 6 characters required
                  </p>
                </div>}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <input type="text" name="displayName" value={formData.displayName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Photo URL
                </label>
                <input type="url" name="photoURL" value={formData.photoURL} onChange={handleInputChange} placeholder="https://example.com/photo.jpg" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                {formData.photoURL && <div className="mt-2 flex items-center">
                    <img src={formData.photoURL} alt="Profile preview" className="h-10 w-10 rounded-full object-cover mr-2" onError={e => {
                ;
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=Error';
              }} />
                    <span className="text-xs text-gray-500">Preview</span>
                  </div>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select name="role" value={formData.role} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  {ROLES.map(role => <option key={role.id} value={role.id}>
                      {role.name} - {role.description}
                    </option>)}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Changing role will update default access permissions
                </p>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Access Areas
                </label>
                <div className="space-y-2">
                  {ACCESS_AREAS.map(area => <div key={area.id} className="flex items-center">
                      <input type="checkbox" id={`area-${area.id}`} checked={formData.accessAreas.includes(area.id)} onChange={() => handleAccessAreaChange(area.id)} disabled={formData.role === 'admin' && area.id === 'dashboard'} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor={`area-${area.id}`} className={`ml-2 text-sm ${formData.role === 'admin' && area.id === 'dashboard' ? 'text-gray-500' : 'text-gray-700'}`}>
                        {area.name}
                        {area.id === 'dashboard' && formData.role === 'admin' && ' (Always enabled for admins)'}
                        {area.id === 'settings' && ' (Recommended for admins only)'}
                      </label>
                    </div>)}
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700" disabled={loading}>
                  {loading ? 'Saving...' : 'Save User'}
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
};