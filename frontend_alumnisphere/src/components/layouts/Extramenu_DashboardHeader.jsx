import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserFriends,
  FaBriefcase,
  FaBookOpen,
  FaHandHoldingHeart,
  FaInfoCircle,
} from "react-icons/fa";

function Extramenu_DashboardHeader() {
  return (
    <>
      {/* Navigation Menu */}
<div className="bg-[#f3f4f6] text-black p-1 shadow-md">
  <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-5xl mx-auto">
    <Link
      to="/dashboard/alumnidirectory"
      className="flex items-center gap-2 md:gap-3 text-base md:text-lg px-3 md:px-4 py-2 md:py-3 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition"
    >
      <FaUserFriends className="text-lg md:text-xl" />
      <span>Alumni Directory</span>
    </Link>

    <Link
      to="/dashboard/jobs"
      className="flex items-center gap-2 md:gap-3 text-base md:text-lg px-3 md:px-4 py-2 md:py-3 hover:bg-green-100 hover:text-green-700 rounded-lg transition"
    >
      <FaBriefcase className="text-lg md:text-xl" />
      <span>Jobs</span>
    </Link>

    <Link
      to="/dashboard/stories"
      className="flex items-center gap-2 md:gap-3 text-base md:text-lg px-3 md:px-4 py-2 md:py-3 hover:bg-yellow-100 hover:text-yellow-700 rounded-lg transition"
    >
      <FaBookOpen className="text-lg md:text-xl" />
      <span>Stories</span>
    </Link>

    <Link
      to="/dashboard/donation"
      className="flex items-center gap-2 md:gap-3 text-base md:text-lg px-3 md:px-4 py-2 md:py-3 hover:bg-red-100 hover:text-red-700 rounded-lg transition"
    >
      <FaHandHoldingHeart className="text-lg md:text-xl" />
      <span>Donation</span>
    </Link>

    <Link
      to="/dashboard/about"
      className="flex items-center gap-2 md:gap-3 text-base md:text-lg px-3 md:px-4 py-2 md:py-3 hover:bg-purple-100 hover:text-purple-700 rounded-lg transition"
    >
      <FaInfoCircle className="text-lg md:text-xl" />
      <span>About</span>
    </Link>
  </div>
</div>

      </>
  );
}

export default Extramenu_DashboardHeader;
