import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGKRPoglPfGfy2hBJbUpI5LA6fH34KCIc",
  authDomain: "eshop-db-bada7.firebaseapp.com",
  databaseURL: "https://eshop-db-bada7.firebaseio.com",
  projectId: "eshop-db-bada7",
  storageBucket: "eshop-db-bada7.appspot.com",
  messagingSenderId: "630752773734",
  appId: "1:630752773734:web:f03a249c99ae7c8bef0fa7",
  measurementId: "G-72EZLWWWSL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
