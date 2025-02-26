import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/pages/Login'
import Signup from '../components/pages/Signup'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  )
}

export default Routing
