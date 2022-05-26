
//  Improt Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAW-T_ifDHzrCBq-BC9UZIFW5BV9FcmEts",
    authDomain: "sji-react.firebaseapp.com",
    projectId: "sji-react",
    storageBucket: "sji-react.appspot.com",
    messagingSenderId: "733408862952",
    appId: "1:733408862952:web:b35cb24a7375bbfdcd5f5d",
    measurementId: "G-N10JVZBFG4"
};



const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };