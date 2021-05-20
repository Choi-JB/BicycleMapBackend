const firebase = require('firebase')

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCVFLf6YKR1hQhruee6-34awbkmt4AE8NU",
    authDomain: "bicyclemap-12f8a.firebaseapp.com",
    databaseURL: "https://bicyclemap-12f8a-default-rtdb.firebaseio.com",
    projectId: "bicyclemap-12f8a",
    storageBucket: "bicyclemap-12f8a.appspot.com",
    messagingSenderId: "714642382180",
    appId: "1:714642382180:web:7669787fd4e613cfa46e71",
    measurementId: "G-KJB9MMRBC1"
};
firebase.initializeApp(firebaseConfig);

//let storage = firebase.storage();
let database = firebase.firestore();


module.exports = {  database };
