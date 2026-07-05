import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const primaryConfig = {
  apiKey: "AIzaSyAsL8P2wAs6W8SEg0LCwhqcAV9NkEhtHxY",
  authDomain: "car-booking-f3460.firebaseapp.com",
  databaseURL: "https://car-booking-f3460-default-rtdb.firebaseio.com",
  projectId: "car-booking-f3460",
  storageBucket: "car-booking-f3460.firebasestorage.app",
  messagingSenderId: "884155509531",
  appId: "1:884155509531:web:b037ae4790b065f1a341be",
  measurementId: "G-2CTNQ648H7"
};

export const primaryApp = initializeApp(primaryConfig, "PRIMARY_APP");

export const auth = getAuth(primaryApp);
export const db = getDatabase(primaryApp);
