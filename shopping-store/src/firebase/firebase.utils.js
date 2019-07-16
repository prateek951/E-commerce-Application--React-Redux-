import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1. Setup the firebase config

const config = {
  apiKey: 'AIzaSyCSikhulgLfwDGU7eNOy1BdG7AYbGy8pME',
  authDomain: 'ecommerce-db-543ac.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-543ac.firebaseio.com',
  projectId: 'ecommerce-db-543ac',
  storageBucket: '',
  messagingSenderId: '419672280451',
  appId: '1:419672280451:web:a2a710d34b1152eb'
};

firebase.initializeApp(config);

// 2. Export the auth and the firestore functionalities
// so we can use them in our application

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// 3. Set up the Google OAuth Provider

const provider = new firebase.auth.GoogleAuthProvider();

// 4. Enable Google popup to always appear whenever we use
// the Google OAuth Provider for our application's
// authentication and login

provider.setCustomParameters({ prompt: 'select_account' });

// 5. Set the sign in with Google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
