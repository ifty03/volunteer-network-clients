// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbzWkCpN09xwUWHMlxmk8mVgxaoDA7yLg",
  authDomain: "volunteer-network-96c78.firebaseapp.com",
  projectId: "volunteer-network-96c78",
  storageBucket: "volunteer-network-96c78.appspot.com",
  messagingSenderId: "934100555472",
  appId: "1:934100555472:web:6f41bbd2f80436794730d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
