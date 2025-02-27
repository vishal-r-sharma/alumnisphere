import React, { useState } from "react";
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";

function Stories() {
  // Dummy Data (Inside Component)
  const storiesData = [
    {
      id: 1,
      title: "Journey from Student to CEO",
      image:
        "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg",
      description:
        "A student's incredible journey to becoming a successful CEO.",
    },
    {
      id: 2,
      title: "From Engineer to Entrepreneur",
      image:
        "https://t3.ftcdn.net/jpg/07/61/66/26/360_F_761662688_PtKytZfox6XNk7bslR5ahhGswCJN5QBZ.jpg",
      description:
        "How a passionate engineer turned his ideas into a thriving business.",
    },
    {
      id: 3,
      title: "Breaking Barriers in Tech",
      image:
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      description:
        "A young innovator making a difference in the technology industry.",
    },
    {
      id: 4,
      title: "Innovating the Future",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg",
      description:
        "A young innovator making a difference in the technology industry.",
    },
    {
      id: 5,
      title: "Turning Passion into Reality",
      image:
        "https://wallpapers.com/images/featured/image-pictures-79gc4p3mqu7an848.jpg",
      description:
        "A developer who turned his passion for coding into a business.",
    },
    {
      id: 6,
      title: "Scaling New Heights",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/046/319/287/small/little-dog-announcing-using-megaphone-notifying-warning-announcement-free-photo.JPG",
      description: "A techie who went from startup to industry leader.",
    },
    {
      id: 7,
      title: "AI & The Future",
      image:
        "https://img.freepik.com/premium-photo/dog-wearing-purple-blue-outfit-with-purple-blue-scarf_971034-28957.jpg",
      description: "How AI is transforming lives in the tech world.",
    },
    {
      id: 8,
      title: "The Journey of a Designer",
      image:
        "https://media.istockphoto.com/id/1385221090/photo/boxer-dog-using-vr-glasses-while-standing-over-an-isolated-yellow-background.jpg?s=612x612&w=0&k=20&c=AsLeVXp5KArGocjO2dWjDRJ6wvRK2lDp24lZ1sB2HCw=",
      description: "An artist turned UI/UX designer shaping modern interfaces.",
    },
  ];

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6; // Show 6 stories per page

  // Calculate total pages
  const totalPages = Math.ceil(storiesData.length / storiesPerPage);

  // Get the stories for the current page
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = storiesData.slice(indexOfFirstStory, indexOfLastStory);

  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Page Heading */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-gray-800">Success Stories</h1>
      </div>

      {/* Stories Section */}
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
              {story.description}
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition">
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
    </div>
  );
}

export default Stories;
