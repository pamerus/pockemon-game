import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBB6V6914ATPB-mDcjGdGrxmpDJSsXIB2c",
  authDomain: "pokemon-game-8a8c0.firebaseapp.com",
  databaseURL: "https://pokemon-game-8a8c0-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-8a8c0",
  storageBucket: "pokemon-game-8a8c0.appspot.com",
  messagingSenderId: "927123012587",
  appId: "1:927123012587:web:b01a5324017b797b0cb7ae"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
