/* For Firebase JS SDK v7.20.0 and later, measurementId is optional */
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyA_qnT0v-F52kgcszf0kqx-ioYhBs-qeCM",
    authDomain: "clone-9029c.firebaseapp.com",
    databaseURL: "https://clone-9029c.firebaseio.com",
    projectId: "clone-9029c",
    storageBucket: "clone-9029c.appspot.com",
    messagingSenderId: "915778712318",
    appId: "1:915778712318:web:e61795ac1a7303d1a26baf",
    measurementId: "G-QJ54C5SQB6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };