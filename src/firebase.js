import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCs54Q8EWOizb5ORQWx-7ydE-A-1wWQGxU",
    authDomain: "disney-plus-clone-b00a3.firebaseapp.com",
    projectId: "disney-plus-clone-b00a3",
    storageBucket: "disney-plus-clone-b00a3.appspot.com",
    messagingSenderId: "592175404745",
    appId: "1:592175404745:web:dd3fd9e4b3774950295f18",
    measurementId: "G-QBKMD5W7L6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.firestore();

export { auth, provider, storage };
export default db;