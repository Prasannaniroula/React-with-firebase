import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white h-16 p-4">
      <div className="flex justify-around">
        <div className="flex justify-center items-center text-4xl">
          <NavLink to="/">Logo</NavLink>
        </div>
        <div className="flex jusitfy-center items-center gap-x-2 text-md sm:gap-x-0 md:gap-x-5 ">
          <NavLink className="min-w-18 text-center hover:border-b-2" to="/">Home</NavLink>
          <NavLink className="min-w-18 text-center hover:border-b-2" to="">Contact</NavLink>
          <NavLink className="min-w-18 text-center hover:border-b-2" to="">About</NavLink>
        </div>
        <div className="flex justify-center items-center text-md gap-5">
          <NavLink className="bg-blue-600 px-6 rounded-xl py-2" to="/signin">Login</NavLink>
          <NavLink className="bg-blue-600 px-6 rounded-xl py-2" to="/signup">Signup</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
