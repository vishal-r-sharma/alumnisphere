import React, { useState } from "react";
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";
import { FaBuilding, FaBriefcase, FaMapMarkerAlt, FaGlobe, FaLink } from "react-icons/fa";

// Location Data (State-wise)
const locationOptions = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur"],
  "Delhi": ["New Delhi"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
  "West Bengal": ["Kolkata", "Durgapur", "Siliguri"],
};

function Addjobs() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [applyLink, setApplyLink] = useState("");

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobTitle || !company || !selectedState || !selectedCity || !jobType || !category || !logoUrl || !applyLink) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Job Posted Successfully!");
    // API call integration here
  };

  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Add Jobs Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">🚀 Post a Job</h1>

        {/* Job Posting Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-xl border border-gray-200">
          {/* Job Title & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Job Title</label>
              <div className="flex items-center border border-gray-300 rounded-md p-3">
                <FaBriefcase className="text-gray-500 mr-2" />
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Software Engineer"
                  className="w-full outline-none text-gray-700"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Company Name</label>
              <div className="flex items-center border border-gray-300 rounded-md p-3">
                <FaBuilding className="text-gray-500 mr-2" />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Google"
                  className="w-full outline-none text-gray-700"
                  required
                />
              </div>
            </div>
          </div>

          {/* Location Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">State</label>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity(""); // Reset city when state changes
                }}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select State</option>
                {Object.keys(locationOptions).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
                disabled={!selectedState}
              >
                <option value="">Select City</option>
                {selectedState &&
                  locationOptions[selectedState].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Job Type & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Job Type</label>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Software Development">Software Development</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>

          {/* Logo URL & Job Link */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Company Logo URL</label>
            <input
              type="url"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              placeholder="https://company.com/logo.png"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-1">Job Apply Link</label>
            <input
              type="url"
              value={applyLink}
              onChange={(e) => setApplyLink(e.target.value)}
              placeholder="https://company.com/careers"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#243642] text-white font-semibold rounded-md hover:bg-[#15803d] hover:opacity-90 transition"
          >
            🚀 Post Job
          </button>

          {/* Warning Message */}
          <p className="text-sm text-red-600 font-semibold text-center mt-3">
            ⚠️ Posting fake or incorrect job listings may result in account suspension.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Addjobs;
