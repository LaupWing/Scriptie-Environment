import firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDxsFyE61kyHsNIJGL6_U0ZgECZuKZcLNM",
   authDomain: "drone-consultancy-development.firebaseapp.com",
   projectId: "drone-consultancy-development",
   storageBucket: "drone-consultancy-development.appspot.com",
   messagingSenderId: "930400046623",
   appId: "1:930400046623:web:16f891da1f281f506d0f2a",
   measurementId: "${config.measurementId}"
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()