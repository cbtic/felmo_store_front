import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr8-iaeXaW3Lia84zWxmy2bM4P4R7dCi0",
    authDomain: "ecommerce-e7270.firebaseapp.com",
    projectId: "ecommerce-e7270",
    storageBucket: "ecommerce-e7270.appspot.com",
    messagingSenderId: "1017093562012",
    appId: "1:1017093562012:web:1b2d038b27739e6aae5759"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();