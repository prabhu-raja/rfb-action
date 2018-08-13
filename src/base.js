import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOV8PDSNovsahFoplnmnREXwdYdszW_W8",
    authDomain: "catch-of-the-day-pr-1bf80.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-pr-1bf80.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;