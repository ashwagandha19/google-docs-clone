import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGmQEHyAFGIB_syaQ49esIIqLQH9Q_pV8",
    authDomain: "docs-8a1f7.firebaseapp.com",
    projectId: "docs-8a1f7",
    storageBucket: "docs-8a1f7.appspot.com",
    messagingSenderId: "218004597543",
    appId: "1:218004597543:web:d6703d16fab25f25245702"
  };

//* check if the firebase app is initialized, otherwise initialize it
const app = !firebase.apps.length
 ? firebase.initializeApp(firebaseConfig) 
 : firebase.app();

const db = app.firestore();

export { db };