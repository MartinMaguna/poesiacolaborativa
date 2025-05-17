// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPlqiHmyiHmbfjFiAa3h_EWwPa1sXz0yM",
  authDomain: "poesiacolaborativa.firebaseapp.com",
  projectId: "poesiacolaborativa",
  storageBucket: "poesiacolaborativa.firebasestorage.app",
  messagingSenderId: "18493261160",
  appId: "1:18493261160:web:533845926413fa2f7702dd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

