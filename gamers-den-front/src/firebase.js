// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyASWL-FNN1B6z-uvpRuKR_B6t2iuXtSmLg",
  authDomain: "web-app-final.firebaseapp.com",
  projectId: "web-app-final",
  storageBucket: "web-app-final.appspot.com",
  messagingSenderId: "347020928201",
  appId: "1:347020928201:web:37318d57d8fb85be775918",
  measurementId: "G-1PRH45PW0K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
