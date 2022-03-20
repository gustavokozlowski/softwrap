import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnprJe_rjXai0Q_kOdTrzkZ5V-L1rRx58",
  authDomain: "soft-wrap-e491c.firebaseapp.com",
  projectId: "soft-wrap-e491c",
  storageBucket: "soft-wrap-e491c.appspot.com",
  messagingSenderId: "885489430915",
  appId: "1:885489430915:web:afa35ce0ae9b96cf67c6b6",
  measurementId: "G-EQZL43JL0B",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
