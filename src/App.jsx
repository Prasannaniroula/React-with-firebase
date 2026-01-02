import { Route, Routes } from "react-router-dom";
import React from "react";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Homepage from "./pages/Homepage";
import Navbar from "./pages/navbar";

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<><Navbar/><Homepage/></>} />
        <Route path="/signin" element={<><Navbar/><Signin /></>} />
        <Route path="/signup" element={<><Navbar/><Signup /></>} />
      </Routes>
  );
};

export default App;
