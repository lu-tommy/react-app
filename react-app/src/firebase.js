import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYa84pxeWYn48vsUDK3NZAi7u0acWVK58",
    authDomain: "marvinchat-537fe.firebaseapp.com",
    databaseURL: "https://marvinchat-537fe-default-rtdb.firebaseio.com",
    projectId: "marvinchat-537fe",
    storageBucket: "marvinchat-537fe.appspot.com",
    messagingSenderId: "740543180964",
    appId: "1:740543180964:web:41cedf68d4adfef8c37631",
    measurementId: "G-T2YP5468P0"
  };

const app = initializeApp(firebaseConfig);