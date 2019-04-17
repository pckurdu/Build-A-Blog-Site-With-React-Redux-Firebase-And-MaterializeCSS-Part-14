//firebase application to use
import firebase from 'firebase/app';
//firebase firestore to use
import 'firebase/firestore';
//firebase auth to use
import 'firebase/auth'

//firebase setting information
var config = {
    apiKey: "AIzaSyAn2EZY3FMtSsGiP3TuIFd9m_U-XYB1Xow",
    authDomain: "react-redux-firebase-49b2f.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-49b2f.firebaseio.com",
    projectId: "react-redux-firebase-49b2f",
    storageBucket: "react-redux-firebase-49b2f.appspot.com",
    messagingSenderId: "196455244965"
  };
  //We are adding settings to the firebase object.
  firebase.initializeApp(config);

  //we are setting firestore
  //firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;
