import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC6QkXK5sWLEwGxZw9N5FzBvHs87HeelUg",
  authDomain: "netflixclone-896fb.firebaseapp.com",
  projectId: "netflixclone-896fb",
  storageBucket: "netflixclone-896fb.appspot.com",
  messagingSenderId: "836180554788",
  appId: "1:836180554788:web:a160d91e8d12bd69b3d4b1"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
