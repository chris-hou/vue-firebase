import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAt5pE62hbm5PFBSOiQYctYpYIikUGQlJ8",
  authDomain: "ninja2-1c3b6.firebaseapp.com",
  databaseURL: "https://ninja2-1c3b6.firebaseio.com",
  projectId: "ninja2-1c3b6",
  storageBucket: "ninja2-1c3b6.appspot.com",
  messagingSenderId: "475458600200",
  appId: "1:475458600200:web:48b439974128f1ff2ec0bd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });
//export firestore database
export default firebaseApp.firestore();
