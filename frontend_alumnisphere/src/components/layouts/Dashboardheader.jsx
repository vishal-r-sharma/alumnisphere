import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAccountMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#243642] text-white w-full h-20 flex justify-between items-center px-6 md:px-10 shadow-md relative">
      {/* Logo Section */}
      <Link to="/dashboard" className="flex items-center">
        <img
          className="w-[150px] md:w-[180px] h-auto"
          src="/alumnispherelogo.png"
          alt="Alumni Sphere Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-lg">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 hover:underline hover:text-gray-300"
        >
          <GoHomeFill className="text-xl" />
          <span>Home</span>
        </Link>

        {/* Add Jobs Link with Icon */}
        <Link
          to="/dashboard/add-jobs"
          className="flex items-center gap-2 hover:underline hover:text-gray-300"
        >
          <IoAddCircleSharp className="text-xl" />
          <span>Add Jobs</span>
        </Link>

        {/* Account Dropdown (Click to Open) */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            className="flex items-center gap-3 hover:text-gray-300 focus:outline-none"
          >
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300"
              src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
              alt="User Profile"
            />
            <div className="flex flex-col">
              <span>Account</span>
              <span className="text-sm text-gray-300">Welcome, Vishal!</span>
            </div>
          </button>

          {/* Dropdown Menu (Visible when clicked) */}
          {accountMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
              <Link
                to="/dashboard/account"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => navigate(`/`)}
              >
                Logout
              </button>
            </div>
          )}
        </div>
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
        <Link
          to="/dashboard"
          className="flex items-center gap-2 hover:underline hover:text-gray-300"
        >
          <GoHomeFill className="text-xl" />
          <span>Home</span>
        </Link>

        <Link
          to="/dashboard/add-jobs"
          className="flex items-center gap-2 hover:underline hover:text-gray-300"
        >
          <IoAddCircleSharp className="text-xl" />
          <span>Add Jobs</span>
        </Link>

        {/* Account for Mobile View */}
        <div className="flex flex-col items-center gap-3">
          <Link to="/dashboard/account" className="flex items-center gap-3">
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
          <button
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            onClick={() => navigate(`/`)}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
