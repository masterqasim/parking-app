import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAzPQgmCVRkhd7rTap2H1tbpX1janHwwcM",
    authDomain: "parking-system-3668a.firebaseapp.com",
    databaseURL: "https://parking-system-3668a.firebaseio.com",
    projectId: "parking-system-3668a",
    storageBucket: "parking-system-3668a.appspot.com",
    messagingSenderId: "1046525189738",
    appId: "1:1046525189738:web:558998d034175f6fa6b413",
    measurementId: "G-W7P4MJX93G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();