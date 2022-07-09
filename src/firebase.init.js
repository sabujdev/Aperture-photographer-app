// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId

  apiKey: "AIzaSyAF2DfD9KbtPMRYdMgV8Tz1B2NcQ7uhENs",
  authDomain: "aperture-photography-app.firebaseapp.com",
  projectId: "aperture-photography-app",
  storageBucket: "aperture-photography-app.appspot.com",
  messagingSenderId: "809177819773",
  appId: "1:809177819773:web:85a0170c7b6665b4b3df14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;