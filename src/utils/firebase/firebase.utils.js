import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBaGs7kmcMR2CLB29SQ6A87AZdOnKlmGjc",
  authDomain: "crwn-clothing-db-c8329.firebaseapp.com",
  projectId: "crwn-clothing-db-c8329",
  storageBucket: "crwn-clothing-db-c8329.appspot.com",
  messagingSenderId: "647715384",
  appId: "1:647715384:web:60644473bdc3d3088064cd",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log("error n creating user", e);
    }
  }
  return userDocRef;
};
