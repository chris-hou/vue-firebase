import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB_PirQtEM2smMyCPyK0FhUfqVd9-hij0g",
  authDomain: "geo-ninja-5c8d5.firebaseapp.com",
  databaseURL: "https://geo-ninja-5c8d5.firebaseio.com",
  projectId: "geo-ninja-5c8d5",
  storageBucket: "geo-ninja-5c8d5.appspot.com",
  messagingSenderId: "710013952151",
  appId: "1:710013952151:web:167bffc051033a27a849d2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()
