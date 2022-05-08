import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC5unNbWwc0znIYUO2dfRkaYpkYgTFKXs",
  authDomain: "rock-paper-scissors-8f93e.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-8f93e-default-rtdb.firebaseio.com",
  projectId: "rock-paper-scissors-8f93e",
  storageBucket: "rock-paper-scissors-8f93e.appspot.com",
  messagingSenderId: "504480675839",
  appId: "1:504480675839:web:44d5d7a56e1ffe996099ca",
  measurementId: "G-TF63K6LNGC",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const db = app.firestore();
