import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA_4A-68ZOBiHCuxLG4GHbHdTIxxu70Ln0",
    authDomain: "ninja-smoothies-193f1.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-193f1.firebaseio.com",
    projectId: "ninja-smoothies-193f1",
    storageBucket: "ninja-smoothies-193f1.appspot.com",
    messagingSenderId: "692247773921",
    appId: "1:692247773921:web:dba069d2253a41038eada0",
    measurementId: "G-ZTQPFL8L1F"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({ timestampsInSnapshots: true})
//   firebase.analytics();

//export firestore
export default firebaseApp.firestore()