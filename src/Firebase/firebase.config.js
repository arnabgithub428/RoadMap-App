// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF4EUb4Hs6k6AFfOW33yxyceUKLtzKG98",
  authDomain: "roadmap-app-8c23f.firebaseapp.com",
  projectId: "roadmap-app-8c23f",
  storageBucket: "roadmap-app-8c23f.firebasestorage.app",
  messagingSenderId: "503809995275",
  appId: "1:503809995275:web:7975bb55d05af8bb368d0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);