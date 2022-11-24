import React from 'react'
import { Route, Routes, BrowserRoutes as Router } from 'react-router-dom'

import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
