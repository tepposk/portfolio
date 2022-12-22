import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-xB34WEG8MhEUnPvrhhdtA4sdNkqDkjw",
    authDomain: "digitekniikat-lopputyo-fc4e7.firebaseapp.com",
    projectId: "digitekniikat-lopputyo-fc4e7",
    storageBucket: "digitekniikat-lopputyo-fc4e7.appspot.com",
    messagingSenderId: "587220300927",
    appId: "1:587220300927:web:9956de7b948bc57d933b4a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default getFirestore(app);