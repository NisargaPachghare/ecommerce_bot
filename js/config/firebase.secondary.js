import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const secondaryConfig = {
  apiKey: "AIzaSyDelD3gLQePAdZsiNRtMZzVJwFPVx85dQA",
  authDomain: "wa2lead-20fa4.firebaseapp.com",
  databaseURL: "https://wa2lead-20fa4-default-rtdb.firebaseio.com",
  projectId: "wa2lead-20fa4",
  storageBucket: "wa2lead-20fa4.firebasestorage.app",
  messagingSenderId: "816859049450",
  appId: "1:816859049450:web:9230e5829beabd36751693",
  measurementId: "G-N0LW9D4CKP"
};

export const secondaryApp = initializeApp(secondaryConfig, "SECONDARY_APP");

export const storage = getStorage(secondaryApp);
