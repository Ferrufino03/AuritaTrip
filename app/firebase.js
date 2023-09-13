// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk3x1Vu2ZBo2jHa8wk4bDwAtnPGzK80Uw",
  authDomain: "nextjs-auth-p.firebaseapp.com",
  projectId: "nextjs-auth-p",
  storageBucket: "nextjs-auth-p",
  messagingSenderId: "81357715804",
  appId: "1:81357715804:web:cf172174113584d4286999",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
