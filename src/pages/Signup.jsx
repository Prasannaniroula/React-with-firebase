import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import{app} from "../firebase";
import { useFirebase } from '../Context/ContextApi';


function Signup() {
    const[email, setEmail]=useState("");
    const[password, setPassword]= useState("");
    const firebase = useFirebase();
    console.log(firebase);

    const auth = getAuth(app)

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth, email , password).then((value)=> console.log("success"));
    }

  return (
    <div className="signup-page flex justify-center lg:p-10 sm:mt-5 sm:p-0">
        <div className='flex flex-col justify-center items-center lg:w-1/2'>
        <h1 className='font-bold text-5xl p-10 text-center md:'>Signup Page</h1>
        <label className='font-semibold text-xl pt-10 pb-2 '>E-mail:</label>
        <input type='email'
        onChange={(e)=>{setEmail(e.target.value)}}
         required
         value={email}
         placeholder='Enter you email here'
          className='border-b w-xl border-black-1 text-xl text-center'
          />
        <label className='font-semibold text-xl pt-10 pb-2'>Password:</label>
        <input type='password'
         onChange={(e)=>{setPassword(e.target.value)}}
         value={password}
         placeholder='Enter your password' 
         required
        className='border-b w-xl text-xl border-black-1 text-center' />
        <button 
        className='bg-blue-400 rounded-2xl text-white w-1/2 text-xl m-4 h-11'
        onClick={createUser}>Signup</button>
        </div>
    </div>
  )
}

export default Signup;
