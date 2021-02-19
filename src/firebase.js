import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCG7T1TTorXMGR4NxIFLNEh4ePJMf17MU",
  authDomain: "clone-b1a25.firebaseapp.com",
  projectId: "clone-b1a25",
  storageBucket: "clone-b1a25.appspot.com",
  messagingSenderId: "292758486810",
  appId: "1:292758486810:web:3db876d0f23d4a199136a3",
  measurementId: "G-3EXQWJXKSH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };