import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyADuTH6PiakZ73cSSuNszTwInzrsSAQV-o',
  authDomain: 'crwn-db-ee72c.firebaseapp.com',
  projectId: 'crwn-db-ee72c',
  storageBucket: 'crwn-db-ee72c.appspot.com',
  messagingSenderId: '959712781031',
  appId: '1:959712781031:web:63e8f26c7f4d7644d5f842',
  measurementId: 'G-KQNNJ5S3NF',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;