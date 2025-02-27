import React, { useState } from 'react';
import Dashboardheader from '../layouts/Dashboardheader';

const alumniData = [
  { id: 1, name: "Vishal Sharma", email: "contact@vishalsharmadev.in", department: "CSE(IOT&CSBT)", year: "2026", image: "https://avatars.githubusercontent.com/u/150991981?v=4", workingAt: "TECH", linkedin: "https://www.linkedin.com/in/vishalsharma" },
  { id: 2, name: "Hitesh Prajapati", email: "janeW@@gsdg.com", department: "Electronics", year: "2019", image: "https://vishalsharmadev.in/hitesh.jpeg", workingAt: "Google", linkedin: "https://www.linkedin.com/in/vishal-r-sharma/" },
  { id: 3, name: "Amol Sahu", email: "michael.johnson@email.com", department: "Mechanical", year: "2021", image: "https://lh3.googleusercontent.com/a-/ALV-UjUxeXv9eh7kHJKhyj2LtyuFLFPlgQoDRKoog-FTAh00mzXvYTs=s800-c", workingAt: "Tesla", linkedin: "https://www.linkedin.com/in/michaeljohnson" },
  { id: 4, name: "Vrushabh Prajapati", email: "emma@gmail.com", department: "Civil", year: "2020", image: "https://lh3.googleusercontent.com/a-/ALV-UjWzzAFzKm2ASWks6Ms8AbGioaewH5qOdhMwlwjSOHgNaolt3eI=s800-c", workingAt: "Amazon", linkedin: "https://www.linkedin.com/in/emmawatson" },
  { id: 5, name: "Chris Evans", email: "evans@marvel.com", department: "CSE(AI&ML)", year: "2023", image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", workingAt: "Microsoft", linkedin: "https://www.linkedin.com/in/chrisevans" },
  { id: 6, name: "Natalie Portman", email: "natalie@hollywood.com", department: "CSE(DS)", year: "2022", image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", workingAt: "", linkedin: "https://www.linkedin.com/in/vishalsharma" },
  { id: 7, name: "Tom Holland", email: "spidey@marvel.com", department: "Electrical", year: "2025", image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", workingAt: "Apple", linkedin: "https://www.linkedin.com/in/tomholland" },
  { id: 8, name: "Scarlett Johansson", email: "scarlett@gmail.com", department: "Mechanical", year: "2018", image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", workingAt: "", linkedin: "https://www.linkedin.com/in/vishalsharma" },
  { id: 9, name: "Robert Downey Jr.", email: "tony@stark.com", department: "CSE(IOT&CSBT)", year: "2017", image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", workingAt: "Stark Industries", linkedin: "https://www.linkedin.com/in/rdj" }
];

const ITEMS_PER_PAGE = 8;

function Alumnidirectory() {
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering Alumni based on selection
  const filteredAlumni = alumniData.filter(alumni => {
    return (
      (department === "" || alumni.department === department) &&
      (year === "" || alumni.year === year)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredAlumni.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentAlumni = filteredAlumni.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Dashboardheader />

      {/* Filter Section */}
      <div className="bg-gray-100 p-4 flex flex-wrap gap-4 justify-center items-center shadow-md">
        {/* Department Filter */}
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Departments</option>
          <option value="CSE(IOT&CSBT)">CSE (IoT & CSBT)</option>
          <option value="Computer Science">Computer Science</option>
          <option value="CSE(AI&ML)">CSE (AI & ML)</option>
          <option value="CSE(DS)">CSE (Data Science)</option>
          <option value="Electronics">Electronics</option>
          <option value="Electrical">Electrical Engineering</option>
          <option value="Mechanical">Mechanical Engineering</option>
          <option value="Civil">Civil Engineering</option>
        </select>

        {/* Graduation Year Filter */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Years</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>

        {/* Clear Filters Button */}
        <button
          onClick={() => {
            setDepartment("");
            setYear("");
          }}
          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Clear Filters
        </button>
      </div>

       {/* Alumni Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {currentAlumni.map(alumni => (
          <div key={alumni.id} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 border border-gray-200 text-center">
            <img src={alumni.image} alt={alumni.name} className="w-20 h-20 rounded-full mx-auto border border-gray-300 mb-2" />
            <h2 className="text-lg font-semibold text-gray-800">{alumni.name}</h2>
            <p className="text-gray-500 text-xs mt-1">{alumni.department}</p>
            <p className="text-gray-500 text-xs">Class of {alumni.year}</p>
            {alumni.workingAt ? (
              <p className="text-gray-700 text-sm mt-1">Working at <span className="font-semibold">{alumni.workingAt}</span></p>
            ) : (
              <p className="text-gray-400 text-xs mt-1">Maybe currently not working</p>
            )}
            <div className="mt-2">
              {alumni.email.includes("@") && (
                <p className="text-blue-600 text-sm font-medium hover:underline">
                  <a href={`mailto:${alumni.email}`}>{alumni.email}</a>
                </p>
              )}
              {alumni.linkedin && (
                <p className="text-blue-600 text-sm font-medium hover:underline mt-1">
                  <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 mx-1 border rounded-md ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Alumnidirectory;
