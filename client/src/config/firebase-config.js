import firebase from "firebase/compat/app";    
import "firebase/compat/firestore";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyACcaM3rXl9f7QKcuS0RjKjYStZND1WPDY",
    authDomain: "idyll-29e66.firebaseapp.com",
    projectId: "idyll-29e66",
    storageBucket: "idyll-29e66.appspot.com",
    messagingSenderId: "234972897619",
    appId: "1:234972897619:web:1590b3558db4cfaa4f41a6",
    measurementId: "G-F47RPBZJBV"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;