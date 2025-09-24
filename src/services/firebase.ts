import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBkziZexJEENcx-V7C67UbWZZH8wbY8NtM',
    authDomain: 'ratebeatdb.firebaseapp.com',
    projectId: 'ratebeatdb',
    storageBucket: 'ratebeatdb.appspot.com',
    messagingSenderId: '682764125817',
    appId: '1:682764125817:web:00f49a3dfef73c97c036a8',
    measurementId: 'G-SXFLVVTREC'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Error handling for Firebase initialization
const handleFirebaseError = (error: any) => {
    console.error('Firebase initialization error:', error);
    // You can add custom error reporting or fallback behavior here
};

try {
    // Additional initialization if needed
} catch (error) {
    handleFirebaseError(error);
}

export default app;