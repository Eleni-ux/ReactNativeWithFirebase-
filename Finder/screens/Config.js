import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB2dH8blo8Q97qT6scodvaJUyb_FiepO_Q',
  authDomain: 'pythontutorial-4cfe7.firebaseapp.com',
  databaseURL: 'https://pythontutorial-4cfe7.firebaseio.com',
  projectId: 'pythontutorial-4cfe7',
  storageBucket: 'pythontutorial-4cfe7.appspot.com',
  messagingSenderId: '347402259969',
  appId: '1:347402259969:web:f2f9756982eb39fe2aba00',
  measurementId: 'G-4XK7HGDHXP',
};
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
