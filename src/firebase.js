import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCeeiVuh0ghOBNmM6AgfQQ2562RzAdtr6Q",
    authDomain: "app-615eb.firebaseapp.com",
    projectId: "app-615eb",
    storageBucket: "app-615eb.firebasestorage.app",
    messagingSenderId: "63838232752",
    appId: "1:63838232752:web:53dd95b39af5e002b39b75",
    databaseURL: "https://app-615eb-default-rtdb.firebaseio.com/",
  };

export const app = initializeApp(firebaseConfig);