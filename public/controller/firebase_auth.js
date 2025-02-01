import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"

import {app} from './firebase_core.js';

const auth = getAuth(app);

export let currentUser = null;

export async function loginFirebase(email, password) {
        await signInWithEmailAndPassword(auth, email, password);
}

export async function logoutFirebase() {
        await signOut(auth);
}

onAuthStateChanged(auth, user => {
    currentUser = user;
    if (user) {
        console.log('AuthStateChanges: user logged in', user.email);
    } else {
        console.log('AuthStateChanges: user logged out');
    }
}
);