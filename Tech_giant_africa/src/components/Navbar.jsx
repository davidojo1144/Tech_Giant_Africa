import React from 'react'
import { assets } from '../assets/assets'
import ResponsiveNavbar from './ResponsiveNavbar'

const Navbar = () => {
  return (
    <>
      <div>
        <div className='container md:flex items-center justify-between hidden text-white'>
          <img className='w-32 cursor-pointer' src={assets.logo} alt="" />
          <div className='flex items-center justify-evenly gap-10'>
            <p className='text-xl hover:text-gray-200 cursor-pointer'>About Us</p>
            <p className='text-xl hover:text-gray-200 cursor-pointer'>Services Offered</p>
            <p className='text-xl hover:text-gray-200 cursor-pointer'>Contact Us</p>
          </div>
        </div>
        <ResponsiveNavbar/>
      </div>
    </>
  )
}

export default Navbar
