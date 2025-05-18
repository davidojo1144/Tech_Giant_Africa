import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesOffered from '../components/ServicesOffered'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <ServicesOffered/>
    </div>
  )
}

export default Home
