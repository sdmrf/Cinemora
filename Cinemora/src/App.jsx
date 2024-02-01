import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Navbar from "./Components/Home/Navbar/Navbar"
import Footer from "./Components/Home/Footer/Footer"

const App = () => {

  return (
    <BrowserRouter>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
