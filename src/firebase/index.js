import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyAWAKBgbDh4JoGPFU5JXFfs9hiI-qTTFMc",
    authDomain: "unoo-307018.firebaseapp.com",
    projectId: "unoo-307018",
    storageBucket: "unoo-307018.appspot.com",
    messagingSenderId: "782781320153",
    appId: "1:782781320153:web:ddbcfa702642396c3827c8",
    measurementId: "G-W1BLNWMFN6"
})

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()
