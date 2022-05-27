// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0oLbmb7yIL_GmfjjDv0JWSui1Howci0Y",
    authDomain: "fir-auth-f8e09.firebaseapp.com",
    projectId: "fir-auth-f8e09",
    storageBucket: "fir-auth-f8e09.appspot.com",
    messagingSenderId: "669054317289",
    appId: "1:669054317289:web:0a9f99594736129bb23678"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };