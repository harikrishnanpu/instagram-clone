import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtzm-z__RBPi7iTTRBLn-vWlniMyZ_IHE",
    authDomain: "instagram-clone-666f9.firebaseapp.com",
    projectId: "instagram-clone-666f9",
    storageBucket: "instagram-clone-666f9.appspot.com",
    messagingSenderId: "932482741634",
    appId: "1:932482741634:web:3ae9d71063849a492e8b9b"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };