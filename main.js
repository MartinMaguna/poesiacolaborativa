import { db } from './firebase.js';
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const versoInput = document.getElementById('verso');
const enviarBtn = document.getElementById('enviar');
const poesiaDisplay = document.getElementById('poesia');

const versosRef = collection(db, 'versos');
const versosOrdenados = query(versosRef, orderBy('timestamp', 'asc'));

enviarBtn.addEventListener('click', async () => {
  const texto = versoInput.value.trim();
  if (texto) {
    await addDoc(versosRef, {
      texto,
      timestamp: serverTimestamp()
    });
    versoInput.value = '';
  }
});

onSnapshot(versosOrdenados, (snapshot) => {
  poesiaDisplay.textContent = '';
  snapshot.forEach(doc => {
    const data = doc.data();
    poesiaDisplay.textContent += `${data.texto}\n`;
  });
});
