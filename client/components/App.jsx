import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <>
      <Header />
      <div className="p-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
