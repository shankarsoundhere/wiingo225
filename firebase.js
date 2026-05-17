import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9M-zCii8rBU_0nARa2ETAYY4zkxW56ic",
  authDomain: "wiiin-gooo.firebaseapp.com",
  projectId: "wiiin-gooo",
  storageBucket: "wiiin-gooo.firebasestorage.app",
  messagingSenderId: "487191607246",
  appId: "1:487191607246:web:60cb3f3f33c5341fa7dd9f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy
};