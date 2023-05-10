
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAM6HwI_oef4ivLQekuZ7mzcK1a08peIEE",
  authDomain: "portfolio-4b840.firebaseapp.com",
  projectId: "portfolio-4b840",
  storageBucket: "portfolio-4b840.appspot.com",
  messagingSenderId: "359659690143",
  appId: "1:359659690143:web:f1229abdebc673d7116aaa",
  measurementId: "G-PHXHBWEB46"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);