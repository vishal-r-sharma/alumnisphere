import React from 'react'
import DashboardHeader from "../layouts/Dashboardheader";
import Extramenu_DashboardHeader from "../layouts/Extramenu_DashboardHeader";

function Donation() {
  return (
    <div>
      {/* Header */}
      <DashboardHeader />
      <Extramenu_DashboardHeader />

      {/* Dashboard Content */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-gray-800">Donation</h1>
      </div>
    </div>
  )
}

export default Donation
