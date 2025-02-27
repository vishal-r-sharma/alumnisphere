import React, { useState } from "react";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";

function Signup() {
  const [role, setRole] = useState("student");
  const [jobInfo, setJobInfo] = useState("yes");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Function to validate password match
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center py-8">
        <div className="w-[90%] md:w-[73%] h-auto bg-[#EBEAFF] flex flex-wrap md:flex-nowrap justify-evenly items-center p-6 rounded-lg shadow-lg gap-6">
          {/* Form Section */}
          <form className="flex flex-col gap-4 w-full max-w-xs md:max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              SIGNUP
            </h1>
            <h2 className="text-2xl font-semibold text-gray-600 text-center">
              Fill in the information below to sign up
            </h2>

            <label className="font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              type="text"
              placeholder="Enter your name here.."
              required
            />

            <label className="font-medium text-gray-700" htmlFor="role">
              Select your role
            </label>
            <select
              name="role"
              id="role"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>

            {/* Show only if role is Alumni */}
            {role === "alumni" && (
              <>
                <label className="font-medium text-gray-700" htmlFor="jobinfo">
                  Are you working in an organization?
                </label>
                <select
                  name="jobinfo"
                  id="jobinfo"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
                  value={jobInfo}
                  onChange={(e) => setJobInfo(e.target.value)}
                  required
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                {/* Show Organization Name Input if Alumni selects "Yes" */}
                {jobInfo === "yes" && (
                  <>
                    <label
                      className="font-medium text-gray-700"
                      htmlFor="organization"
                    >
                      Organization Name
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
                      type="text"
                      placeholder="Enter your organization name"
                      required
                    />
                  </>
                )}
              </>
            )}

            <label className="font-medium text-gray-700" htmlFor="department">
              Select your Department
            </label>
            <select
              name="department"
              id="department"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              required
            >
              <option value="CSE(IOT&CSBT)">CSE (IoT & CSBT)</option>
              <option value="COMPUTER">Computer Engineering</option>
              <option value="CSE(AI&ML)">CSE (AI & ML)</option>
              <option value="CSE(DS)">CSE (Data Science)</option>
              <option value="EXTC">
                Electronics & Telecom. Engg.
              </option>
              <option value="ELECTICAL">Electrical Engineering</option>
              <option value="MECHANICAL">Mechanical Engineering</option>
            </select>

            {/* Graduation Year (For Both Students and Alumni) */}
            <label className="font-medium text-gray-700" htmlFor="graduation">
              Graduation Year
            </label>
            <input
              id="graduation"
              name="graduation"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              type="number"
              placeholder="Enter your graduation year"
              min="1900"
              max="2100"
              required
            />

            <label className="font-medium text-gray-700" htmlFor="profileimage">
              Upload your Profile image
            </label>
            <input
              type="file"
              id="profileimage"
              name="profileImage"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              required
            />

<label className="font-medium text-gray-700" htmlFor="linkedinprofile">
              Enter your Linkedin Profile URL
            </label>
            <input
              id="linkedinprofile"
              name="linkedinprofile"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              type="url"
              placeholder="Enter your profile URL (eg. https://)"
              required
            />

            <label className="font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              type="email"
              placeholder="Enter your email"
              required
            />

            {/* Password Field */}
            <label className="font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Confirm Password Field */}
            <label className="font-medium text-gray-700" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              name="confirmPassword"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                passwordError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#1DBF73]"
              }`}
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {/* Password Error Message */}
            {passwordError && (
              <span className="text-red-500 text-sm">{passwordError}</span>
            )}

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full h-[45px] bg-[#117554] text-white font-bold rounded-md hover:bg-[#0D5A40] transition duration-300"
              disabled={passwordError !== ""}
            >
              Signup
            </button>

            {/* Login Redirect */}
            <p className="text-center text-gray-700 text-lg">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-[#117554] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
