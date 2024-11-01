// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qww5OOLILVIXOPSvYorA8gweHjI0sN0",
  authDomain: "news-portal-c6f02.firebaseapp.com",
  projectId: "news-portal-c6f02",
  storageBucket: "news-portal-c6f02.firebasestorage.app",
  messagingSenderId: "697152721487",
  appId: "1:697152721487:web:f4f62bf94a98b52ecf903a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app.