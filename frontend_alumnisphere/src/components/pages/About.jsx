import React from "react";
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";
import { FaLinkedin, FaGlobe } from "react-icons/fa";

const developers = [
  {
    name: "Vishal Sharma",
    role: "Full-Stack Developer | MERN Stack",
    image: "https://vishalsharmadev.in/normalphotos/vishal.jpg",
    linkedin: "https://www.linkedin.com/in/vishal-r-sharma",
    portfolio: "https://vishalsharmadev.in",
    email: "contact@vishalsharmadev.in",
  },
  {
    name: "Hitesh Prajapati",
    role: "Backend Developer | Node.js | MongoDB",
    image: "https://vishalsharmadev.in/normalphotos/hitesh.jpeg",
    linkedin: "https://www.linkedin.com/in/hitesh-prajapati-6b337524b/",
    portfolio: "#",
    email: "hitesh06p@gmail.com",
  },
  {
    name: "Vrushabh Prajapati",
    role: "Frontend Developer | React.js | UI/UX",
    image: "https://vishalsharmadev.in/normalphotos/vrushabh.jpg",
    linkedin: "https://www.linkedin.com/in/vrushabh-prajapati-095701277/",
    portfolio: "#",
    email: "ioteprajapativrushabh@gmail.com",
  },
  {
    name: "Amol Sahu",
    role: "Database Architect | SQL | Firebase",
    image: "https://vishalsharmadev.in/normalphotos/amol.jpeg",
    linkedin: "https://www.linkedin.com/in/amol-sahu-0bbb912a4/",
    portfolio: "#",
    email: "amolsahu2025@gmail.com",
  },
];

function About() {
  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 p-6">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src="https://alumnisphere.vishalsharmadev.in/alumnisphere_icon.png"
              alt="AlumniSphere Logo"
              className="w-36 h-36 md:w-44 md:h-44"
            />
          </div>

          {/* Content Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">AlumniSphere</span>
            </h1>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>AlumniSphere</strong> is a platform that connects alumni
              and students, fostering networking, mentorship, and career
              opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3 text-lg">
              Whether you are a recent graduate or an experienced professional,
              AlumniSphere offers a community-driven space for collaboration,
              knowledge sharing, and career advancement.
            </p>
          </div>
        </div>

        {/* Developer Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Meet the Developers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200 transition-transform duration-300 hover:scale-105"
              >
                {/* Developer Image */}
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
                />

                {/* Developer Info */}
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {dev.name}
                </h3>
                <p className="text-gray-600 text-sm px-3 mt-1">{dev.role}</p>
                <p className="text-gray-600 text-sm px-3 mt-1">{dev.email}</p>

                {/* Developer Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={dev.portfolio}
                    target={dev.portfolio === "#" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-200 text-2xl"
                  >
                    <FaGlobe />
                  </a>
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-200 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
