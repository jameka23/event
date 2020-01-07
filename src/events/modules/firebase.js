import firebase from 'firebase'

// initialize database
const config = {
    apiKey: "AIzaSyDIdsosPzzkK7Yfs5bEd5m-S1awAh-ZL5U",
    authDomain: "events-63b06.firebaseapp.com",
    databaseURL: "https://events-63b06.firebaseio.com",
    projectId: "events-63b06",
    storageBucket: "events-63b06.appspot.com",
    messagingSenderId: "977893467059",
    appId: "1:977893467059:web:9436f78e225fc8838ee1c6",
    measurementId: "G-8RXHEMC7EG"
}

const app = firebase.initializeApp(config);
const facebookProvider = new firebase.auth.FacebookAuthProvider();
export { app } 