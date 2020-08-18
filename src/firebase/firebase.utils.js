import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXpiIWrYsQd28ysfCxWkEHK3Rk4yPAjvA",
    authDomain: "crwn-db-4d14b.firebaseapp.com",
    databaseURL: "https://crwn-db-4d14b.firebaseio.com",
    projectId: "crwn-db-4d14b",
    storageBucket: "crwn-db-4d14b.appspot.com",
    messagingSenderId: "318587799620",
    appId: "1:318587799620:web:54c9322a0056960ae89411"
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
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;