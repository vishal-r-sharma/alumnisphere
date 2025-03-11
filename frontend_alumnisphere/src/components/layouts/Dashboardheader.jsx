import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaInfoCircle } from "react-icons/fa";
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

        <Link
          to="/dashboard/add-jobs"
          className="flex items-center gap-2 hover:underline hover:text-gray-300"
        >
          <IoAddCircleSharp className="text-xl" />
          <span>Add Jobs</span>
        </Link>

        {/* Account Dropdown */}
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
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 sm:w-1/2 bg-[#1e293b] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <FaTimes />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center border-b border-gray-600 pb-4">
          <img
            className="w-16 h-16 rounded-full border-2 border-gray-400"
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="User Profile"
          />
          <h3 className="mt-2 text-lg font-semibold">Vishal Sharma</h3>
          <p className="text-sm text-gray-300">Welcome back!</p>
        </div>

        {/* Mobile Menu Links */}
        <nav className="flex flex-col mt-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-6 py-4 text-lg hover:bg-[#334155] rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            <GoHomeFill className="text-xl" />
            <span>Home</span>
          </Link>

          <Link
            to="/dashboard/add-jobs"
            className="flex items-center gap-3 px-6 py-4 text-lg hover:bg-[#334155] rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            <IoAddCircleSharp className="text-xl" />
            <span>Add Jobs</span>
          </Link>

          <Link
            to="/dashboard/about"
            className="flex items-center gap-3 px-6 py-4 text-lg hover:bg-[#334155] rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaInfoCircle className="text-xl" />
            <span>About</span>
          </Link>

          {/* Account Section */}
          <div className="border-t border-gray-600 mt-4 pt-4">
            <h3 className="px-6 text-sm text-gray-400">ACCOUNT</h3>
            <Link
              to="/dashboard/account"
              className="flex items-center gap-3 px-6 py-4 text-lg hover:bg-[#334155] rounded-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              <FaUser className="text-xl" />
              <span>Profile</span>
            </Link>
          </div>

          {/* Logout Button */}
          <button
            className="flex items-center gap-3 px-6 py-4 text-lg hover:bg-red-600 rounded-lg transition mt-4"
            onClick={() => {
              setMenuOpen(false);
              navigate(`/`);
            }}
          >
            <FaSignOutAlt className="text-xl" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default DashboardHeader;
