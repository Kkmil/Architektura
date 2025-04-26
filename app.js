// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, getDocs  } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCkNAk7fUC-GcaMp2vwA6HImRhQRDLC1LQ",

  authDomain: "dataktm-1155.firebaseapp.com",

  projectId: "dataktm-1155",

  storageBucket: "dataktm-1155.firebasestorage.app",

  messagingSenderId: "476784067662",

  appId: "1:476784067662:web:30bbac43d8324bfc312f1f",

  measurementId: "G-Q31F3X59G0"


};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Read data
const daneSprzetuDiv = document.getElementById('daneSprzetu');

    const querySnapshot = await getDocs(collection(db, "Sprzet"));

    querySnapshot.forEach((doc) => {
      const ilosc = doc.data()['Nazwa'];
      const nazwa = doc.data()['Ilosc'];
      console.log(ilosc, nazwa);

      const paragraf = document.createElement('p');
      paragraf.textContent = `${ilosc}  ~~~~~~~~~~~~    ${nazwa}`;
      daneSprzetuDiv.appendChild(paragraf);
    });



