import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import ResponsiveNavbar from './ResponsiveNavbar'
import { TechGiantContext } from '../context/TechGiantContext'

const Navbar = () => {

  const {scrollToAboutUs, scrollToServices, scrollToContactUs} = useContext(TechGiantContext)

  return (
    <>
      <div>
        <div className='container md:flex items-center justify-between hidden text-white'>
          <img className='w-32 cursor-pointer' src={assets.logo} alt="" />
          <div className='flex items-center justify-evenly gap-10'>
            <p onClick={scrollToAboutUs} className='text-xl hover:text-gray-200 cursor-pointer'>About Us</p>
            <p onClick={scrollToServices} className='text-xl hover:text-gray-200 cursor-pointer'>Services Offered</p>
            <p onClick={scrollToContactUs} className='text-xl hover:text-gray-200 cursor-pointer'>Contact Us</p>
          </div>
        </div>
        <ResponsiveNavbar/>
      </div>
    </>
  )
}

export default Navbar
