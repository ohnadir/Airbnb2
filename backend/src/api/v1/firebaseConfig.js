const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyD_6nkC6-WVaQDtAo24a_6jcARH104-k3c",
    authDomain: "airbnb-453c6.firebaseapp.com",
    databaseURL: "https://airbnb-453c6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "airbnb-453c6",
    storageBucket: "airbnb-453c6.appspot.com",
    messagingSenderId: "1062546089286",
    appId: "1:1062546089286:web:983b38a3e89cd7cb877147",
    measurementId: "G-DEJEP2PNLF"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Products = db.collection("Products");
module.exports = Products;