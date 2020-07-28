import firebase from "firebase";
import firestore from "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAaxlVCjhE4Js0sp3mCH8GjwvC9UpzVxF0",
  authDomain: "chat-6fc0f.firebaseapp.com",
  databaseURL: "https://chat-6fc0f.firebaseio.com",
  projectId: "chat-6fc0f",
  storageBucket: "chat-6fc0f.appspot.com",
  messagingSenderId: "739846883887",
  appId: "1:739846883887:web:e2bac61f47c0176c0f94da"
};
// Initialize Firebase
firebaseApp = firebase.initializeApp(firebaseConfig);
export firebaseApp.firestore()
