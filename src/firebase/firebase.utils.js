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

   measurementId: "G-BCMF7WLXMD"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;