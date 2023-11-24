
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDUq5lkEa0WQv6ctvB4Q6RNHaLoMpiqz4o",
  authDomain: "parcial3-cd8b2.firebaseapp.com",
  projectId: "parcial3-cd8b2",
  storageBucket: "parcial3-cd8b2.appspot.com",
  messagingSenderId: "995616573257",
  appId: "1:995616573257:web:bba183bcceecb1fa6c7c98",
  measurementId: "G-S7WHRNKL94"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 