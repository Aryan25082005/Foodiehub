import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

// Register User
export const registerUser = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await setDoc(doc(db, "users", userCredential.user.uid), {
    email: userCredential.user.email,
    role: "customer",
    createdAt: new Date(),
  });

  return userCredential;
};

// Login User
export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Logout User
export const logoutUser = async () => {
  return await signOut(auth);
};