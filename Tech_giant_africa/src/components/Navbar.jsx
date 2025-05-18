import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
      <div>
        <div className='container md:flex items-center justify-between hidden text-white'>
          <img className='w-32' src={assets.logo} alt="" />
          <div>
            <p>About Us</p>
            <p>Services Offered</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
