import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB8OjiII9RybfCipHaiz7obHHKoHtrcdf4",
  authDomain: "chat2-b179b.firebaseapp.com",
  databaseURL: "https://chat2-b179b.firebaseio.com",
  projectId: "chat2-b179b",
  storageBucket: "chat2-b179b.appspot.com",
  messagingSenderId: "862284530238",
  appId: "1:862284530238:web:6368fa3373021ba509476f"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()
