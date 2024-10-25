import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYvS4JuAYMqeDW6A5wbQxn1dpHHAho3Z0",
    authDomain: "mt-project-10ba5.firebaseapp.com",
    projectId: "mt-project-10ba5",
    storageBucket: "mt-project-10ba5.appspot.com",
    messagingSenderId: "974108136605",
    appId: "1:974108136605:web:38af4a099ceb6f24fb7074",
    measurementId: "G-7VZ897D0YJ"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
