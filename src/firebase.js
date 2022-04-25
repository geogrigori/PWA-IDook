import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCCUSASu7s8Fo3LAv-kaZBknf2oArqBYAc",
    authDomain: "pwa-app-eb589.firebaseapp.com",
    projectId: "pwa-app-eb589",
    storageBucket: "pwa-app-eb589.appspot.com",
    messagingSenderId: "204871928320",
    appId: "1:204871928320:web:6f4b8294452735ac42e6e5",
    measurementId: "G-PKJR7QQ089"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);