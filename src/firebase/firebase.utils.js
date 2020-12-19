import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyADuTH6PiakZ73cSSuNszTwInzrsSAQV-o",
  authDomain: "crwn-db-ee72c.firebaseapp.com",
  databaseURL: "https://crwn-db-ee72c-default-rtdb.firebaseio.com",
  projectId: "crwn-db-ee72c",
  storageBucket: "crwn-db-ee72c.appspot.com",
  messagingSenderId: "959712781031",
  appId: "1:959712781031:web:63e8f26c7f4d7644d5f842",
  measurementId: "G-KQNNJ5S3NF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set(
        {
          displayName ,
          email, 
          createdAt,
          ...additionalData
        }
      )
    } 
    catch (error) 
    {
      console.lot(error);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

