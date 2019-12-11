import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDD535EvcdgTf4BGsht6_3UoJCabibmBDk",
    authDomain: "crwun-db.firebaseapp.com",
    databaseURL: "https://crwun-db.firebaseio.com",
    projectId: "crwun-db",
    storageBucket: "crwun-db.appspot.com",
    messagingSenderId: "271456458471",
    appId: "1:271456458471:web:20d59547de3163679eb442",
    measurementId: "G-BZB87B50Y5"
  };

export const createUserProfileDocument = async (userAuth, additionalData)  => {
  if(!userAuth)  return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
        console.log('error creating user',error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
