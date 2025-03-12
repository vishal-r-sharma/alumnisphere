import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-[#117554]">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#117554] text-white font-semibold rounded-lg shadow-md hover:bg-[#0D5A40] transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default Error404;
