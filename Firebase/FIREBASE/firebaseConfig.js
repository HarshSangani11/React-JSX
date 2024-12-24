// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnZqAjbiftDfRHmeTIccSJ_CGL2S3wCKg",
  authDomain: "fire1-adbf9.firebaseapp.com",
  projectId: "fire1-adbf9",
  storageBucket: "fire1-adbf9.firebasestorage.app",
  messagingSenderId: "147906395173",
  appId: "1:147906395173:web:27e3ed971b2de20af093cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const provider=new GoogleAuthProvider;

export{auth,db,provider}