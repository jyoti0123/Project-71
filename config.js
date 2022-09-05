import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAxpHmpZ3nuNi7oRVuz4q3r6_Sh4inoMhM",
    authDomain: "project-71-80ac3.firebaseapp.com",
    projectId: "project-71-80ac3",
    storageBucket: "project-71-80ac3.appspot.com",
    messagingSenderId: "549168151628",
    appId: "1:549168151628:web:cba3d2b98270b9044b88e9"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
