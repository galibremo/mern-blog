// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5181d.firebaseapp.com",
  projectId: "mern-blog-5181d",
  storageBucket: "mern-blog-5181d.appspot.com",
  messagingSenderId: "257391148537",
  appId: "1:257391148537:web:bea15a38d42b91642a5128",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
