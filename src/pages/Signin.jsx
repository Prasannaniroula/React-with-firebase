import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase"

function Signin() {
    const[email,setEmail]= useState("");
    const[password, setPassword]= useState("");
    const auth = getAuth(app);

    const loginUser = ()=>{
        signInWithEmailAndPassword(auth, email, password).then((value)=> alert("login successfully"))
    }

  return (
    <div className="signin-page flex justify-center lg:p-10 sm:mt-5 sm:p-0">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl p-10 text-center">Login Page</h1>
        <label className="font-semibold text-xl pt-10 pb-2 ">E-mail:</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          value={email}
          placeholder="Enter you email here"
          className="border-b w-xl border-black-1 text-xl text-center"
        />
        <label className="font-semibold text-xl pt-10 pb-2">Password:</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="Enter your password"
          required
          className="border-b w-xl text-xl border-black-1 text-center"
        />
        <button
          className="bg-blue-400 rounded-2xl text-white w-1/2 text-xl m-4 h-11"
          onClick= {loginUser}  >
          Login
        </button>
      </div>
    </div>
  );
}

export default Signin
