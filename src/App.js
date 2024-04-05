import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'

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
    </>
  )
}
