
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {

  apiKey: "AIzaSyCYa84pxeWYn48vsUDK3NZAi7u0acWVK58",
  authDomain: "marvinchat-537fe.firebaseapp.com",
  databaseURL: "https://marvinchat-537fe-default-rtdb.firebaseio.com",
  projectId: "marvinchat-537fe",
  storageBucket: "marvinchat-537fe.appspot.com",
  messagingSenderId: "740543180964",
  appId: "1:740543180964:web:c57d1a25bd5e72e1c37631",
  measurementId: "G-YEW53LHBKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
