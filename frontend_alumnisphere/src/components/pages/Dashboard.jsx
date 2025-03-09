import React from "react";
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";
import {
  PieChart,
  Pie,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const stats = [
  { title: "Total Students", value: 1500 },
  { title: "Total Alumni", value: 2500 },
  { title: "Total Jobs", value: 320 },
];

const pieData = [
  { name: "Software Development", value: 40 },
  { name: "Web Development", value: 25 },
  { name: "Data Science", value: 20 },
  { name: "Cybersecurity", value: 15 },
];

const areaData = [
  { month: "Jan", jobs: 20 },
  { month: "Feb", jobs: 35 },
  { month: "Mar", jobs: 50 },
  { month: "Apr", jobs: 70 },
  { month: "May", jobs: 90 },
  { month: "Jun", jobs: 110 },
];

function Dashboard() {
  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">Dashboard</h1> */}

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {stat.title}
              </h2>
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-white shadow-md p-6 rounded-lg mb-6">
            {" "}
            {/* Added mb-6 for spacing */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
              Job Categories Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
              Jobs Market Trends
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="jobs"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
