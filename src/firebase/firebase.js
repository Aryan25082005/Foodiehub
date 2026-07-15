import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3TxpeX7vSPku_DtF3QE9ZKQtOpqyDvdY",
  authDomain: "foodiehub-49362.firebaseapp.com",
  projectId: "foodiehub-49362",
  storageBucket: "foodiehub-49362.firebasestorage.app",
  messagingSenderId: "1021025002918",
  appId: "1:1021025002918:web:c3c5f06cc9835f5dd59b67",
  measurementId: "G-JL7PPCXD85",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;