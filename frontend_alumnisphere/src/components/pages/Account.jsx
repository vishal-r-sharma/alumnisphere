import React, { useState } from "react";
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";

function Account() {
  const initialFormData = {
    name: "Vishal Sharma",
    email: "vishalsharma_iot_2022@ltce.in",
    password: "",
    confirmPassword: "",
    role: "student",
    jobInfo: "yes",
    organization: "TECH",
    department: "CSE(IOT&CSBT)",
    graduationYear: "2025",
    linkedin: "https://linkedin.com/in/vishalsharma",
    profilePicture: "https://vishalsharmadev.in/normalphotos/vishal.jpg",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [previewImage, setPreviewImage] = useState(initialFormData.profilePicture);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Email validation
    if (name === "email" && !value.endsWith("@ltce.in")) {
      setEmailError("Email must be from @ltce.in domain");
    } else {
      setEmailError("");
    }

    // Password confirmation validation
    if (name === "confirmPassword" && value !== formData.password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  // Handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setFormData({ ...formData, profilePicture: file });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError) return;
    alert("Account Updated Successfully!");
  };

  // Reset Form
  const handleReset = () => {
    setFormData(initialFormData);
    setPreviewImage(initialFormData.profilePicture);
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Edit Account Form */}
      <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Edit Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            <img
              src={previewImage}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full border border-gray-300 mb-2"
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                passwordError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>

          {/* LinkedIn Profile */}
          <div>
            <label className="block text-gray-700 font-medium">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your LinkedIn profile URL"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
          </div>

          {/* Job Information (For Alumni) */}
          {formData.role === "alumni" && (
            <>
              <div>
                <label className="block text-gray-700 font-medium">
                  Are you working?
                </label>
                <select
                  name="jobInfo"
                  value={formData.jobInfo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {formData.jobInfo === "yes" && (
                <div>
                  <label className="block text-gray-700 font-medium">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
            </>
          )}

          {/* Department */}
          <div>
            <label className="block text-gray-700 font-medium">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="CSE(IOT&CSBT)">CSE (IoT & CSBT)</option>
              <option value="COMPUTER">Computer Engineering</option>
              <option value="CSE(AI&ML)">CSE (AI & ML)</option>
              <option value="CSE(DS)">CSE (Data Science)</option>
              <option value="EXTC">Electronics & Telecom. Engg.</option>
              <option value="ELECTICAL">Electrical Engineering</option>
              <option value="MECHANICAL">Mechanical Engineering</option>
            </select>
          </div>

          {/* Graduation Year */}
          <div>
            <label className="block text-gray-700 font-medium">
              Graduation Year
            </label>
            <input
              type="number"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 bg-[#117554] text-white rounded-md">
              Save Changes
            </button>
            <button type="button" onClick={handleReset} className="px-4 py-2 bg-gray-400 text-white rounded-md">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
