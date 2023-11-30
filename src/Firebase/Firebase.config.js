// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6XuzvQ8vJfeQN9rlxIrz-oaU2KIccZR4",
  authDomain: "petco-9327a.firebaseapp.com",
  projectId: "petco-9327a",
  storageBucket: "petco-9327a.appspot.com",
  messagingSenderId: "532597325564",
  appId: "1:532597325564:web:b6388407b50f27a1b26179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;