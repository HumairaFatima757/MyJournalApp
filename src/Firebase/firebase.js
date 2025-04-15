import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDA_F24bmsTLXhMPK3itFNF6QoNPfM5q3k",
  authDomain: "myjournalapp-289db.firebaseapp.com",
  projectId: "myjournalapp-289db",
  storageBucket: "myjournalapp-289db.firebasestorage.app",
  messagingSenderId: "88023529496",
  appId: "1:88023529496:web:baad0b55e4a8d7d19bab6d",
  measurementId: "G-MKEL22THZP"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);

export {db , auth }