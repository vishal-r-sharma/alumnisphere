import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Alumnidirectory from "../components/pages/Alumnidirectory";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard/alumnidirectory" element={<Alumnidirectory />} />
    </Routes>
  );
}

export default Routing;
