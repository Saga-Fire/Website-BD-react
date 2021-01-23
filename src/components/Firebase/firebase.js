import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: `${process.env.REACT_APP_WEATHER_API_KEY}`,
  authDomain: 'website-bd-lhdw.firebaseapp.com',
  databaseURL:
    'https://website-bd-lhdw-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'website-bd-lhdw',
  storageBucket: 'website-bd-lhdw.appspot.com',
  messagingSenderId: '396535160431',
  appId: '1:396535160431:web:6c0230c175bf04c83db79a',
  measurementId: 'G-DN7J14G4DW',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  //? inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //? Connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //? Déconnection
  signoutUser = () => this.auth.signOut();

  //? Récupérer le mot de passe
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  //? Base de données user
  user = (uid) => this.db.doc(`user/${uid}`);

  //? Base de données BD
  album = () => this.db.collection('albums');

  auteur = () => this.db.collection('auteurs');

  serie = () => this.db.collection('series');

  //? Image
  storageRef = () => this.storage.ref();
}

export default Firebase;
