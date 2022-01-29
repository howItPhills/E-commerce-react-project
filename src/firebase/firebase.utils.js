import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
   apiKey: "AIzaSyCwdjX76CaGlk2DrM00dPbAl-h75ehirPQ",
   authDomain: "crwn-comm.firebaseapp.com",
   projectId: "crwn-comm",
   storageBucket: "crwn-comm.appspot.com",
   messagingSenderId: "35062089885",
   appId: "1:35062089885:web:dabe3d1ef83f818a7dac74",
   measurementId: "G-BCMF7WLXMD",
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   //reference object can be changed by CRUD, snapshot objects - dont (only for checking existance of ref object in data-base and getting data (snapshot.data()))
   const userRef = firestore.doc(`users/${userAuth.uid}`) //documentRef - object, used for CRUD - operations (get, set, delete, update)

   const snapShot = await userRef.get() // documentSnapshot - object, used only to display information about ref object (mostly for checking existance in data-base) 

   if (!snapShot.exists) { //checking existance of our documentRef object. If it doesnt - set information inside our ref object in data-base
      const { email } = userAuth;
      const createdAt = new Date();
      try {
         await userRef.set({
            email,
            createdAt,
            ...additionalData
         })
      } catch (error) {
         console.error('cant add user', error.message);
      }
   }

   return userRef;
}


export const addNewCollectionAndDocument = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey)
   const batch = firestore.batch()

   objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
   })
   await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
   const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data()
      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
      }
   })
   return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator
   }, {})
}


export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         unsubscribe();
         resolve(userAuth)
      }, reject)
   })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;