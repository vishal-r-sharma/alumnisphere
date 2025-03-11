import React, { useState } from "react";
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";
import { IoClose } from "react-icons/io5"; // Close Icon for Popup

function Stories() {
  // Dummy Data
  const storiesData = [
    {
      id: 1,
      title: "Journey from Student to CEO",
      image:
        "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg",
      content:
        "A student's incredible journey to becoming a successful CEO. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 2,
      title: "From Engineer to Entrepreneur",
      image:
        "https://t3.ftcdn.net/jpg/07/61/66/26/360_F_761662688_PtKytZfox6XNk7bslR5ahhGswCJN5QBZ.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima eaque odio ratione fugiat aliquam facere dignissimos amet magnam, architecto doloremque deserunt. ".repeat(
          10
        ), // Long text to test scroll
    },
    {
      id: 3,
      title: "Breaking Barriers in Tech",
      image:
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      content:
        "A young innovator making a difference in the technology industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;
  const totalPages = Math.ceil(storiesData.length / storiesPerPage);

  // Get Stories for Current Page
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = storiesData.slice(indexOfFirstStory, indexOfLastStory);

  // State for Modal
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Page Heading */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-gray-800">thbrtvhrth</h1>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
        {currentStories.map((story) => (
          <div
            key={story.id}
            className="bg-[#EBEAFF] max-w-[400px] w-full mx-auto rounded-lg shadow-lg flex flex-col items-center p-6"
          >
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={story.image}
              alt={story.title}
            />
            <h2 className="text-xl mt-4 font-bold text-gray-800 text-center">
              {story.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2 text-center">
              {story.content.substring(0, 70)}... {/* Short preview */}
            </p>
            <button
              onClick={() => setSelectedStory(story)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition"
            >
              Read
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white rounded-lg transition ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        <span className="text-lg font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white rounded-lg transition ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>

      {/* POPUP MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white w-full max-w-[600px] max-h-[90vh] p-6 rounded-lg shadow-lg relative overflow-hidden">
            {/* Close Button (Fixed at Top) */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              <IoClose className="text-3xl" />
            </button>

            {/* Scrollable Content */}
            <div className="max-h-[75vh] overflow-y-auto p-2">
              {/* Story Image */}
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              {/* Story Title */}
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                {selectedStory.title}
              </h2>

              {/* Story Content */}
              <p className="text-gray-700 text-md mt-4">
                {selectedStory.content}
              </p>
            </div>

            {/* Close Button at Bottom */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setSelectedStory(null)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories;
