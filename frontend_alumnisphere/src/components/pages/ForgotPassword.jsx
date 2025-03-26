import React, { useState } from "react";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Function to validate email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email format
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
    if (emailError || !email) {
      return;
    }
    setLoading(true);
    // Simulate API call for password reset
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("A password reset link has been sent to your email.");
      setEmail(""); // Clear the email input
    }, 2000);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center py-8">
        <div className="w-[90%] md:w-[50%] h-auto bg-[#ffffff] flex flex-col justify-center items-center p-6 rounded-lg shadow-lg gap-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Forgot Password
          </h1>
          <h2 className="text-lg font-semibold text-gray-600 text-center">
            Enter your email to receive a password reset link.
          </h2>

          <form
            className="flex flex-col gap-4 w-full max-w-xs"
            onSubmit={handleSubmit}
          >
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
              <span
                id="email-error"
                className="text-red-500 text-sm"
                role="alert"
              >
                {emailError}
              </span>
            )}

            <button
              type="submit"
              className={`w-full h-[45px] bg-[#117554] text-white font-bold rounded-md hover:bg-[#0D5A40] transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!!emailError || !email || loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <p className="text-center text-gray-700 text-lg">
            Remembered your password?{" "}
            <Link
              to="/"
              className="text-[#117554] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
