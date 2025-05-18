import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesOffered from '../components/ServicesOffered'
import ChooseUs from '../components/ChooseUs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <ServicesOffered/>
        <ChooseUs/>
    </div>
  )
}

export default Home
