import React, { useEffect, useState, createContext, useContext } from 'react'
import {
  User,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase/config'
interface AuthContextType {
  currentUser: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<User>
  logout: () => Promise<void>
}
const AuthContext = createContext<AuthContextType | null>(null)
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
export const AuthProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => userCredential.user,
    )
  }
  const logout = () => {
    return signOut(auth)
  }
  const value = {
    currentUser,
    loading,
    login,
    logout,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
