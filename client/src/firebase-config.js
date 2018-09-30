// Firebase config file
// Contains all the configs necessary to connect app with Firebase.
// import Firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const config = {
  apiKey: 'AIzaSyCflQfveMclJR7MGQdTUg1QDn0UjKvKfx4',
  authDomain: 'learner-47455.firebaseapp.com',
  databaseURL: 'https://learner-47455.firebaseio.com',
  projectId: 'learner-47455',
  storageBucket: '',
  messagingSenderId: '1006094214832',
};

firebase.initializeApp(config);
// This exports the auth module of Firebase,
// as well as the Google Auth Provider so that we'll be able to use
// Google Authentication for sign in anywhere inside of our application
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
