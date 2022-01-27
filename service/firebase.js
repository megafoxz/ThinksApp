import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCP3lZJiCWNkbuNU3SjAy3P2_fMDAXfsfw",
  authDomain: "his-app-f3b39.firebaseapp.com",
  projectId: "his-app-f3b39",
  storageBucket: "his-app-f3b39.appspot.com",
  messagingSenderId: "230573212790",
  appId: "1:230573212790:web:2fd3b128bf2edc9b48cb57",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
