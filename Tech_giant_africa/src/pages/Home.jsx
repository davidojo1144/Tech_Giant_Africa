import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesOffered from '../components/ServicesOffered'
import ChooseUs from '../components/ChooseUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <ServicesOffered/>
        <ChooseUs/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home
