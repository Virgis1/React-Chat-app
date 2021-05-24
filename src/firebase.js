import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPswYyJAIUCkXq2Y4dqjeukxQZaigD2qs",
  authDomain: "chat-app-1a22c.firebaseapp.com",
  projectId: "chat-app-1a22c",
  storageBucket: "chat-app-1a22c.appspot.com",
  messagingSenderId: "844083630910",
  appId: "1:844083630910:web:d92d4a0910d38cbab4d26f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db }