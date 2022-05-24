import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'



// Pages
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App