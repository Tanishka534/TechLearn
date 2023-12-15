// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Nt6GegUhfYoiOXrl6UWpnEm7JkMFmrQ",
  authDomain: "techlearn-33f95.firebaseapp.com",
  projectId: "techlearn-33f95",
  storageBucket: "techlearn-33f95.appspot.com",
  messagingSenderId: "722483776036",
  appId: "1:722483776036:web:c52796065c221c503066b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


//Login Function using email and password
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//Sign Up function for app
const registerWithEmailAndPassword = async (firstname, lastname, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstname,
        lastname,
        authProvider: "local",
        email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//Function to Logout from the app.
const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    // sendPasswordReset,
    logout,
};