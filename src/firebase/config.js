// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd95SqEedu8M-YCLuY_0SCzKdp0QZlNRg",
  authDomain: "opablog-c9513.firebaseapp.com",
  projectId: "opablog-c9513",
  storageBucket: "opablog-c9513.appspot.com",
  messagingSenderId: "428574210677",
  appId: "1:428574210677:web:c64e1b4b69e3e00fef963c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };