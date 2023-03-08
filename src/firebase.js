// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBZI6rjJcNGZ411YFt93HBHGUDI6w7rKEU",
  authDomain: "snapchat-f4739.firebaseapp.com",
  projectId: "snapchat-f4739",
  storageBucket: "snapchat-f4739.appspot.com",
  messagingSenderId: "501626891344",
  appId: "1:501626891344:web:af48686a1f69401c727555",
  measurementId: "G-L6NTZD6NBL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
