import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyDzWcbG-fQCwDmdLmJTRpgK29D35qc4__g",
    authDomain: "idcamp-challenge.firebaseapp.com",
    databaseURL: "https://idcamp-challenge.firebaseio.com",
    projectId: "idcamp-challenge",
    storageBucket: "idcamp-challenge.appspot.com",
    messagingSenderId: "819156888222",
    appId: "1:819156888222:web:f69c369dcaaf5594b6e98f",
    measurementId: "G-KSCT2WRC4V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
 
  export const database = firebase.database();
  export default firebase;