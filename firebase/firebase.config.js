import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDM0LHaK1PeCDfyamS2dUtTXLkMVpz0NHo",
  authDomain: "gamers-tech.firebaseapp.com",
  projectId: "gamers-tech",
  storageBucket: "gamers-tech.appspot.com",
  messagingSenderId: "1093171510857",
  appId: "1:1093171510857:web:3f6c157a8e1b63bff14998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);