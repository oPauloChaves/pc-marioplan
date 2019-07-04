import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9riJPKkP5BdTyG6VVqspERiJZaEE6SI8",
  authDomain: "pc-marioplan.firebaseapp.com",
  databaseURL: "https://pc-marioplan.firebaseio.com",
  projectId: "pc-marioplan",
  storageBucket: "",
  messagingSenderId: "424636267256",
  appId: "1:424636267256:web:76edf6cee8ead4cb"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
