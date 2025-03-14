import React, { useState } from "react";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to validate email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email domain
    const emailPattern = /^[a-zA-Z0-9._%+-]+@ltce\.in$/;
    if (!emailPattern.test(value)) {
      setEmailError("Email must be from @ltce.in domain");
    } else {
      setEmailError("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError || !email || !password) {
      return;
    }
    setLoading(true);
    // Handle login logic here (e.g., API call)
    console.log("Logging in with:", { email, password });
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Handle success or error response
    }, 2000);
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
            onSubmit={handleSubmit}
          >
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
              aria-invalid={!!emailError}
              aria-describedby="email-error"
            />
            {emailError && (
              <span id="email-error" className="text-red-500 text-sm" role="alert">
                {emailError}
              </span>
            )}

            <label className="font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className={`w-full h-[45px] bg-[#117554] text-white font-bold rounded-md hover:bg-[#0D5A40] transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={!!emailError || !email || !password || loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-gray-700 text-lg">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#117554] font-semibold hover:underline"
              >
                Signup
              </Link>
            </p>
            <p className="text-center text-gray-700 text-lg">
              <Link
                to="/forgot-password"
                className="text-[#117554] font-semibold hover:underline"
              >
                Forgot Password?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;