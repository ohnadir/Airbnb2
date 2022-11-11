const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAxMb7WbqiwOYltC5jSwzoAed9kImVosiI",
  authDomain: "eminent-booking-367518.firebaseapp.com",
  projectId: "eminent-booking-367518",
  storageBucket: "eminent-booking-367518.appspot.com",
  messagingSenderId: "660636084968",
  appId: "1:660636084968:web:35b47744a1516a7370b75d",
  measurementId: "G-HT3FEHTB6S"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Products = db.collection("Places");
module.exports = Products;