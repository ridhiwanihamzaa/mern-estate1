// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate1-71b2c.firebaseapp.com",
  projectId: "mern-estate1-71b2c",
  storageBucket: "mern-estate1-71b2c.appspot.com",
  messagingSenderId: "925961455183",
  appId: "1:925961455183:web:37f2b9c2312e1944710c3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);