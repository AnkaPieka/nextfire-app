import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCkomXrdDzzWJjeCR5hLJiZXInfyxEo_kc",
    authDomain: "next-firebase-61297.firebaseapp.com",
    projectId: "next-firebase-61297",
    storageBucket: "next-firebase-61297.appspot.com",
    messagingSenderId: "489031498153",
    appId: "1:489031498153:web:6127d980b5f2417f0d6cb8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();