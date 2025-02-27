import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Alumnidirectory from "../components/pages/Alumnidirectory";
import Dashboard from "../components/pages/Dashboard";
import Account from "../components/pages/Account";
import About from "../components/pages/About";
import Donation from "../components/pages/Donation";
import Jobs from "../components/pages/Jobs";
import Stories from "../components/pages/Stories";
import Addjobs from "../components/pages/Addjobs";
import Savedjobs from "../components/pages/Savedjobs";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/account" element={<Account />} />
      <Route path="/dashboard/about" element={<About />} />
      <Route path="/dashboard/donation" element={<Donation />} />
      <Route path="/dashboard/add-jobs" element={<Addjobs />} />
      <Route path="/dashboard/saved-jobs" element={<Savedjobs />} />
      <Route path="/dashboard/jobs" element={<Jobs />} />
      <Route path="/dashboard/stories" element={<Stories />} />
      <Route path="/dashboard/alumnidirectory" element={<Alumnidirectory />} />
    </Routes>
  );
}

export default Routing;
