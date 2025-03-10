import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa"; // Icons for saving jobs
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";
import { useEffect } from "react";

const jobsData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Bangalore, India",
    type: "Full-time",
    category: "Software Development",
    remote: true,
    postedBy: "John Doe(email@gmail.com)",
    postedDate: "March 5, 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Amazon",
    location: "Hyderabad, India",
    type: "Remote",
    category: "Web Development",
    remote: true,
    postedBy: "Jane Smith",
    postedDate: "March 3, 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Microsoft",
    location: "Pune, India",
    type: "Full-time",
    category: "Data Science",
    remote: false,
    postedBy: "Michael Johnson",
    postedDate: "January 10, 2025", // This will be filtered out (Older than 2 months)
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 4,
    title: "Cybersecurity Specialist",
    company: "IBM",
    location: "Mumbai, India",
    type: "Hybrid",
    category: "Cybersecurity",
    remote: false,
    postedBy: "Emily Davis",
    postedDate: "March 1, 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 5,
    title: "Backend Developer",
    company: "Netflix",
    location: "Remote",
    type: "Full-time",
    category: "Software Development",
    remote: true,
    postedBy: "Alex Turner",
    postedDate: "February 28, 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "Apple",
    location: "Remote",
    type: "Full-time",
    category: "Software Development",
    remote: true,
    postedBy: "Alex Turner",
    postedDate: "February 28, 2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  },
];

const ITEMS_PER_PAGE = 4;

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Load saved jobs from local storage
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(storedJobs);
  }, []);

  // Save jobs to local storage
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  // Convert date string to a Date object
  const parseDate = (dateString) => new Date(dateString);

  // Get today's date and the date 1.5 years ago
  const today = new Date();
  const oneAndHalfYearsAgo = new Date();
  oneAndHalfYearsAgo.setMonth(today.getMonth() - 18); // 1.5 years = 18 months

  // Filter & Sort Jobs (Recent First + Last 1.5 years)
  const filteredJobs = jobsData
    .map((job) => ({
      ...job,
      dateObj: parseDate(job.postedDate),
    }))
    .filter((job) => job.dateObj >= oneAndHalfYearsAgo) // Only keep jobs from last 1.5 years
    .sort((a, b) => b.dateObj - a.dateObj) // Sort jobs by most recent first
    .filter(
      (job) =>
        (search === "" ||
          job.title.toLowerCase().includes(search.toLowerCase())) &&
        (location === "" ||
          job.location.toLowerCase().includes(location.toLowerCase())) &&
        (category === "" || job.category === category) &&
        (!remoteOnly || job.remote)
    );

  // Reset pagination when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, location, category, remoteOnly]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  // Save/Unsave Job Function
  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
        {/* Left Sidebar (Filters) */}
        <div className="w-full md:w-1/4 bg-[#f3f4f6] p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Filter Jobs</h2>

          {/* Search Bar */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Search Job Title
            </label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location Filter */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. Mumbai, Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Category Filter */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="Software Development">Software Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </div>

          {/* Remote Jobs Checkbox */}
          <div className="mb-4 flex items-center gap-3 border-t border-gray-200 pt-4">
            <input
              type="checkbox"
              checked={remoteOnly}
              onChange={() => setRemoteOnly(!remoteOnly)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
            />
            <label className="text-gray-800 font-medium">
              Remote Jobs Only
            </label>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={() => {
              setSearch("");
              setLocation("");
              setCategory("");
              setRemoteOnly(false);
            }}
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
          >
            Clear Filters
          </button>
        </div>

        {/* Right Side (Job Listings) */}
        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Available Jobs
          </h2>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <div
                  key={job.id}
                  className="relative bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
                >
                  {/* Save Job Icon */}
                  <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => toggleSaveJob(job.id)}
                  >
                    {savedJobs.includes(job.id) ? (
                      <FaBookmark className="text-blue-600 text-xl" />
                    ) : (
                      <FaRegBookmark className="text-gray-400 text-xl hover:text-blue-600" />
                    )}
                  </div>

                  {/* Company Logo & Title */}
                  <div className="flex items-center gap-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-14 h-14 object-contain rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">{job.company}</p>
                      <p className="text-gray-500 text-sm">{job.location}</p>
                    </div>
                  </div>
                  {/* Job Details */}
                  <div className="mt-3 text-gray-700 text-sm">
                    <p>
                      <span className="font-medium">Posted by:</span>{" "}
                      {job.postedBy}
                    </p>
                    <p>
                      <span className="font-medium">Posted on:</span>{" "}
                      {job.postedDate}
                    </p>
                  </div>

                  {/* Job Type & Apply Button */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-md">
                      {job.type}
                    </span>
                    <button className="px-4 py-2 bg-[#243642] text-white font-semibold rounded-md hover:bg-green-700 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-2">
                No jobs found.
              </p>
            )}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6 mb-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Previous
              </button>

              <span className="text-lg font-semibold text-gray-700">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
