// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your_value_here",
  authDomain: "your_value_here",
  projectId: "your_value_here",
  storageBucket: "your_value_here",
  messagingSenderId: "your_value_here",
  appId: "your_value_here",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
