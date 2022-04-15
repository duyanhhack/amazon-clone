import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAA9lA_uIMo-hFtV54wUT3D1ugoweRiVcM",
    authDomain: "clone-c6d04.firebaseapp.com",
    projectId: "clone-c6d04",
    storageBucket: "clone-c6d04.appspot.com",
    messagingSenderId: "782250298276",
    appId: "1:782250298276:web:d3ed8a7321c17aa6b34f31",
    measurementId: "G-EQ3NJV3S8M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth }