import React, { useState } from "react";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Function to validate email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.endsWith("@ltce.in")) {
      setEmailError("Email must be from @ltce.in domain");
    } else {
      setEmailError("");
    }
  };

  return (
    <>
      <Header />
      <Link
        to="/dashboard"
        className="text-[#117554] font-semibold hover:underline"
      >
        Dashboard
      </Link>
      <div className="flex justify-center py-8">
        <div className="w-[90%] md:w-[73%] h-auto bg-[#EBEAFF] flex flex-wrap md:flex-nowrap justify-evenly items-center p-6 rounded-lg shadow-lg gap-6">
          {/* Image Section */}
          <img
            className="w-[300px] md:w-[440px] rounded-md"
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="Login Illustration"
          />

          {/* Form Section */}
          <form
            className="flex flex-col gap-4 w-full max-w-xs md:max-w-md"
            action="/signup"
          >
            <div className="flex flex-col gap-4 w-full max-w-xs md:max-w-md">
              <h1 className="text-3xl font-bold text-gray-800 text-center">
                LOGIN
              </h1>
              <h2 className="text-2xl font-semibold text-gray-600 text-center">
                Welcome back!
              </h2>

              <label className="font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                  emailError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#1DBF73]"
                }`}
                type="email"
                placeholder="Enter your email (must be @ltce.in)"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {/* Email Error Message */}
              {emailError && (
                <span className="text-red-500 text-sm">{emailError}</span>
              )}

              <label className="font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
                type="password"
                placeholder="Enter your password"
                required
              />

              <button
                className="w-full h-[45px] bg-[#117554] text-white font-bold rounded-md hover:bg-[#0D5A40] transition duration-300"
                disabled={emailError !== ""}
              >
                Login
              </button>
            </div>

            {/* Sign Up Section */}
            <p className="text-center text-gray-700 text-lg">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#117554] font-semibold hover:underline"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
