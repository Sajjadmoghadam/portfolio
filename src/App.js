import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Work from './Pages/Work'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import About from './Pages/About'
import Footer from './Components/Footer'

export default function App() {
  
  return (
    <>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/work' element={<Work />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </>
  )
}
