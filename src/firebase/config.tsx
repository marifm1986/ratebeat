
import React from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: 'AIzaSyBkziZexJEENcx-V7C67UbWZZH8wbY8NtM',
    authDomain: 'ratebeatdb.firebaseapp.com',
    projectId: 'ratebeatdb',
    storageBucket: 'ratebeatdb.appspot.com',
    messagingSenderId: '682764125817',
    appId: '1:682764125817:web:00f49a3dfef73c97c036a8',
    measurementId: 'G-SXFLVVTREC'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firestore
export const db = getFirestore(app)

