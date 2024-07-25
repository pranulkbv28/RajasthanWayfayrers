// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAvlYkASrsG1UJgj2hiOUzN-oxjpPhh4I",
  authDomain: "rajasthan-wayfarers.firebaseapp.com",
  projectId: "rajasthan-wayfarers",
  storageBucket: "rajasthan-wayfarers.appspot.com",
  messagingSenderId: "486764269177",
  appId: "1:486764269177:web:d3e2b68178e71cd06b8ea8",
  measurementId: "G-MHYBRTE4QR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
