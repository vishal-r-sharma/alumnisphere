import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoAddCircleSharp } from "react-icons/io5";

function DashboardHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#243642] text-white w-full h-20 flex justify-between items-center px-6 md:px-10 shadow-md">
      {/* Logo Section */}
      <Link to="/" className="flex items-center">
        <img className="w-[150px] md:w-[180px] h-auto" src="/alumnispherelogo.png" alt="Alumni Sphere Logo" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-lg">
        {/* Add Jobs Link with Icon */}
        <Link to="/dashboard/add-jobs" className="flex items-center gap-2 hover:underline hover:text-gray-300">
          <IoAddCircleSharp className="text-xl" />
          <span>Add Jobs</span>
        </Link>

        {/* Account Link with Profile Image */}
        <Link to="/dashboard/account" className="flex items-center gap-3 hover:text-gray-300">
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300"
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="User Profile"
          />
          <div className="flex flex-col">
            <span>Account</span>
            <span className="text-sm text-gray-300">Welcome, Vishal!</span>
          </div>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-[#243642] p-5 flex flex-col items-center gap-4 text-lg md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link to="/dashboard/add-jobs" className="flex items-center gap-2 hover:underline hover:text-gray-300">
          <IoAddCircleSharp className="text-xl" />
          <span>Add Jobs</span>
        </Link>
        <Link to="/dashboard/account" className="flex items-center gap-3 hover:text-gray-300">
          <img
            className="w-10 h-10 rounded-full border-2 border-gray-300"
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="User Profile"
          />
          <div className="flex flex-col text-center">
            <span>Account</span>
            <span className="text-sm text-gray-300">Welcome, Vishal!</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default DashboardHeader;
