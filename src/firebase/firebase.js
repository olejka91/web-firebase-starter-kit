import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// TODO: set your own API KEYS
const prodConfig = {
  apiKey: "AIzaSyAeq3wakwyn4K7tdTnskVzVZmI4rIolHMA",
  authDomain: "learnfirebaseprod.firebaseapp.com",
  databaseURL: "https://learnfirebaseprod.firebaseio.com",
  projectId: "learnfirebaseprod",
  storageBucket: "learnfirebaseprod.appspot.com",
  messagingSenderId: "422547179470"
};

// TODO: set your own API KEYS
const devConfig = {
  apiKey: "AIzaSyBrmia60frwUxj3dQ8EbFjpkx8BYZzYug8",
  authDomain: "learn-firebase-essential.firebaseapp.com",
  databaseURL: "https://learn-firebase-essential.firebaseio.com",
  projectId: "learn-firebase-essential",
  storageBucket: "learn-firebase-essential.appspot.com",
  messagingSenderId: "520265405593"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
