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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(object => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, object);
  });
  // Fire off the batch request
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  // console.log(transformedCollection);
  // Convert the array of collections into an object of collections
  // for which reduce method is the best to do so.
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

// 3. Set up the Google OAuth Provider

export const googleProvider = new firebase.auth.GoogleAuthProvider();

// 4. Enable Google popup to always appear whenever we use
// the Google OAuth Provider for our application's
// authentication and login

googleProvider.setCustomParameters({ prompt: 'select_account' });

// 5. Set the sign in with Google
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// 6. Create user profile document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // 1. If there is no user auth then return
  if (!userAuth) {
    return;
  }
  //  1. Query the firestore to see the userAuth exists
  // already or not, if it exists already
  // 2. Check whether the user corresponding to uid
  // already exists in firestore, if it exists, no
  // no need to create user profile again
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // 3. Get the reference to the users collection
  // const collectionRef = firestore.collection('users');

  const snapshot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();

  // Users Collection
  // console.log({ collection: collectionSnapshot.docs.map(doc => console.log(doc.data()));});

  // console.log('here is my snapshot for collection', collectionSnapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      //Create user profile using userRef
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating the user', error.message);
    }
  }
  // console.log(snapshotRef);
  return userRef;
};

export default firebase;
