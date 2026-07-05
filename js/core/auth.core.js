import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { auth } from "../config/firebase.primary.js";
import { DB } from "./db.core.js";

export async function registerUser(email, password, profile = {}) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;

  await DB.set(`users/${uid}`, {
    uid,
    email,
    role: "user",
    ...profile,
    createdAt: Date.now()
  });

  return cred.user;
}

export async function loginUser(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export function logoutUser() {
  return signOut(auth);
}

export function listenAuth(cb) {
  return onAuthStateChanged(auth, cb);
}
