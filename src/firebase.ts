import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn7hdO8E7FSGjCmijgGkeOB0NAYlW3lms",
  authDomain: "github-job-695f6.firebaseapp.com",
  projectId: "github-job-695f6",
  storageBucket: "github-job-695f6.firebasestorage.app",
  messagingSenderId: "939594273707",
  appId: "1:939594273707:web:7d6010c52b2b7d031c38ee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
