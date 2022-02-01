// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCovu6x-qyDyOTcl6Z84CcnZ2ieFSLX_DE",
    authDomain: "myownprojects-b98ae.firebaseapp.com",
    projectId: "myownprojects-b98ae",
    storageBucket: "myownprojects-b98ae.appspot.com",
    messagingSenderId: "975607536418",
    appId: "1:975607536418:web:a654087c357dc4ce8de37b",
    measurementId: "G-52PYE3SMS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = getDatabase(app);

var name = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');




function writeUserData(name, email, subject, message) {

    const docRef = await addDoc(collection(db, "any"), {
        cname: name,
        cemail: email,
        csubject: subject,
        cmessage: message,
    });
}