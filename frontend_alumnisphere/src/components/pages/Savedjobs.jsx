import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa"; 
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";

function Savedjobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  // Load saved jobs from local storage
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(storedJobs);
  }, []);

  // Remove saved job
  const toggleSaveJob = (jobId) => {
    const updatedJobs = savedJobs.filter((job) => job.id !== jobId);
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  };

  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Saved Jobs Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">💾 Saved Jobs</h1>

        {/* If no jobs are saved */}
        {savedJobs.length === 0 ? (
          <p className="text-gray-500 text-center">No saved jobs yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedJobs.map((job) => (
              <div key={job.id} className="relative bg-white p-5 rounded-lg shadow-md border border-gray-200">
                {/* Save/Unsave Job */}
                <div
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => toggleSaveJob(job.id)}
                >
                  <FaBookmark className="text-blue-600 text-xl" />
                </div>

                {/* Company Logo & Job Info */}
                <div className="flex items-center gap-4">
                  {job.logo && (
                    <img src={job.logo} alt={job.company} className="w-14 h-14 object-contain rounded-md" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                </div>

                {/* Job Details */}
                <div className="mt-3 text-gray-700 text-sm">
                  <p>
                    <span className="font-medium">Posted by:</span> {job.postedBy || "Unknown"}
                  </p>
                  <p>
                    <span className="font-medium">Posted on:</span> {job.postedDate || "N/A"}
                  </p>
                </div>

                {/* Job Type & Apply Button */}
                <div className="flex justify-between items-center mt-4">
                  <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-md">
                    {job.type}
                  </span>
                  {job.applyLink && (
                    <a
                      href={job.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#243642] text-white font-semibold rounded-md hover:bg-green-700 transition"
                    >
                      Apply Now
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Savedjobs;
