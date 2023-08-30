import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import ContactUs from './components/ContactUs'
import Home from './components/Home'
import Price from './components/Price'


const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Home/>
        <Hero/>
        <Cards/>
        <Price/>
        <ContactUs/>
      </Router>
    </>
  )
}

export default App
