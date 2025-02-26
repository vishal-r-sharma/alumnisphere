import React from 'react'
import Header from './components/layouts/Header'
import Login from './components/pages/Login'

function App() {
  return (
    <div>
      <Header />
      <div className='flex justify-center py-8 '><Login /></div>
    </div>
  )
}

export default App
