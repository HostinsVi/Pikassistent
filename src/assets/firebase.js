// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoAszHtDNMyLKM6ccSFLrdQSY2tEFkYYg",
  authDomain: "pikassistent.firebaseapp.com",
  projectId: "pikassistent",
  storageBucket: "pikassistent.firebasestorage.app",
  messagingSenderId: "126651432215",
  appId: "1:126651432215:web:4a161828cfae6533df8b52",
  measurementId: "G-8B3JXM47J4"
};

// literal mágica, n sei dizer oq ta rolando aqui

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
