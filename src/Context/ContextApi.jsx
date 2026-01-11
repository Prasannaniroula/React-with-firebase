import { createContext, useContext } from "react";
import {initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,  } from "firebase/auth";
import { getDatabase, set, ref} from "firebase/database";
import { data } from "react-router-dom";

const firebaseConfig = {
    apiKey:import.meta.env.VITE_API_KEY ,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN ,
    projectId:import.meta.env.VITE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_STORAGE_BUCKET ,
    messagingSenderId:import.meta.env.VITE_MESSAGE_SENDER_ID ,
    appId:import.meta.env.VITE_APP_ID ,
    databaseURL:import.meta.env.VITE_DATABASE_URL ,
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);


const FirebaseContext = createContext(null);

export const useFirebase = ()=> useContext(FirebaseContext);

export const FirebaseProvider = (props)=>{
     
    const signupUserWithEmailAndPassword = (email,password)=>{
      return createUserWithEmailAndPassword(firebaseAuth, email,password);
    }
    const loginUserWithEmailAndPassword = (email, password)=>{
      return loginUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    const putData = (key,data)=> set(ref(Database, key),data);

   return(

    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData , loginUserWithEmailAndPassword}}>
        {props.children}
    </FirebaseContext.Provider>
   )
}
