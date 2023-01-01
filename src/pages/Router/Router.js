import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router