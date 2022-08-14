// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeYEbeOlYrbGgqZ2r9txWIlJ0BycLVqOY",
  authDomain: "tech-japan-client.firebaseapp.com",
  projectId: "tech-japan-client",
  storageBucket: "tech-japan-client.appspot.com",
  messagingSenderId: "1022753409477",
  appId: "1:1022753409477:web:444824ac261fbb83db63ac",
  measurementId: "G-Q8TDJFKSXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;