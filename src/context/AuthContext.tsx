import React, { useEffect, useState, createContext, useContext } from 'react'
import {
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from '../services/firebase'
// Define user roles
export type UserRole = 'admin' | 'author' | 'user'
// Extended user type with role
export interface UserWithRole extends User {
    role: UserRole
    displayName: string
}
interface AuthContextType {
    currentUser: UserWithRole | null
    register: (email: string, password: string, name: string) => Promise<void>
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    loading: boolean
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)
export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<UserWithRole | null>(null)
    const [loading, setLoading] = useState(true)
    async function register(email: string, password: string, name: string) {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )
            // Update profile with display name
            await updateProfile(userCredential.user, {
                displayName: name,
            })
            // Set default role as "user"
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                email,
                name,
                role: 'user',
                createdAt: new Date().toISOString(),
            })
        } catch (error: any) {
            console.error('Error registering user:', error)
            // Add more detailed error information for debugging
            if (error.code) {
                console.error('Error code:', error.code)
            }
            if (error.message) {
                console.error('Error message:', error.message)
            }
            throw error
        }
    }
    async function login(email: string, password: string) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error: any) {
            console.error('Error logging in:', error)
            // Add more specific error handling
            if (error.code === 'auth/invalid-credential') {
                throw new Error('Invalid email or password. Please try again.')
            } else if (error.code === 'auth/too-many-requests') {
                throw new Error(
                    'Too many failed login attempts. Please try again later.',
                )
            } else if (error.code === 'auth/network-request-failed') {
                throw new Error('Network error. Please check your internet connection.')
            } else {
                throw error
            }
        }
    }
    async function logout() {
        try {
            await signOut(auth)
        } catch (error) {
            console.error('Error logging out:', error)
            throw error
        }
    }
    useEffect(() => {
        return onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    // Fetch user role from Firestore
                    const userDoc = await getDoc(doc(db, 'users', user.uid))
                    const userData = userDoc.data()
                    // Create extended user with role
                    const userWithRole = {
                        ...user,
                        role: userData?.role || 'user',
                        displayName: userData?.name || user.displayName || 'User',
                    } as UserWithRole
                    setCurrentUser(userWithRole)
                } else {
                    setCurrentUser(null)
                }
            } catch (error) {
                console.error('Error in auth state change:', error)
                // Handle auth state change errors gracefully
                setCurrentUser(null)
            } finally {
                setLoading(false)
            }
        })
    }, [])
    const value = {
        currentUser,
        register,
        login,
        logout,
        loading,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
