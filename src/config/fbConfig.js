import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyD8zq3C2XMBqSwkMbOYJ4An5nnsfLbLzg8",
    authDomain: "blog-19326.firebaseapp.com",
    projectId: "blog-19326",
    storageBucket: "blog-19326.appspot.com",
    messagingSenderId: "78014941936",
    appId: "1:78014941936:web:ce30144fcce2af05f39035",
    measurementId: "G-DJBTKSXWB5"
    
};


firebase.initializeApp(config);


export default firebase;