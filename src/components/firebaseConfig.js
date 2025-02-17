// Importation des SDK nécessaires depuis Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlEYj-t4_LqzIEmtjCgcOH7htgKrgx7ic",
  authDomain: "portfoliobilal-fc757.firebaseapp.com",
  projectId: "portfoliobilal-fc757",
  storageBucket: "portfoliobilal-fc757.appspot.com", // 🔥 Correction de "firebasestorage.app" en "appspot.com"
  messagingSenderId: "334438629757",
  appId: "1:334438629757:web:786bc30cc2f5d9c19d8c14",
  measurementId: "G-5V3LJE95KV",
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de Firestore
const db = getFirestore(app);

// Export des fonctions nécessaires pour Firestore
export { db, collection, addDoc };
