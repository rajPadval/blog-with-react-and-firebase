// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP8oBjwE1SBGyDzyELHiEsDDKH05-3wE8",
  authDomain: "blog-with-react-and-fire-39f28.firebaseapp.com",
  projectId: "blog-with-react-and-fire-39f28",
  storageBucket: "blog-with-react-and-fire-39f28.appspot.com",
  messagingSenderId: "425842563719",
  appId: "1:425842563719:web:807e76c60a5b8bb3f77622",
  measurementId: "G-C29H3DSH2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
