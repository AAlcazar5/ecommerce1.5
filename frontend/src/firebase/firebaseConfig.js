import firebase from 'firebase/app';
import 'firebase/firestore'; // for the db
import 'firebase/auth';
import 'firebase/database';
import Config from '../config';

// Initialize Firebase
const config = {
    apiKey: Config.apiKey,
    authDomain: Config.authDomain,
    projectId: Config.projectId,
    storageBucket: Config.storageBucket,
    messagingSenderId: Config.messagingSenderId,
    appId: Config.appId 
  };
  

// Initialize Firebase
firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.uid}`) //users/uniq26535
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


const createProductProfileDocument = async (productAuth, additionalData) => {
  if (!productAuth) { return };

  const productRef = firestore.doc(`products/${productAuth.uid}`) //products/uniq26535
  const snapShot = await productRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = productAuth;
    const createdAt = new Date();
    // const { description, imageUrl, price, title } = product;

    try {
      await productRef.set({
        displayName,
        email,
        createdAt,
        // description, 
        // imageUrl,
        // price,
        // title,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating product', error.message);
    }
  }

  return productRef;
}

export {
  firestore,
  createUserProfileDocument,
  createProductProfileDocument,
  auth,
}
