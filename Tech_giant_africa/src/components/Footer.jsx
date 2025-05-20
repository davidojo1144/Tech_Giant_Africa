import React, { useContext } from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { TechGiantContext } from '../context/TechGiantContext'

const Footer = () => {

    const {scrollToAboutUs, scrollToServices, scrollToContactUs} = useContext(TechGiantContext)


  return (
    <div className='bg-gray-200 text-gray-800 py-10 mt-44'>
      <div className='container mx-auto '>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          {/* Company Info */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl font-bold mb-4'>Techgiant Africa</h3>
            <p className='mb-4'>Innovative technology solutions for Africa's digital future.</p>
            
            {/* Social Media Links */}
            <div className='flex space-x-4'>
              <a href="https://instagram.com/techgiantafrica" target="_blank" rel="noopener noreferrer" className='hover:text-gray-500 transition-colors'>
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com/techgiantafrica" target="_blank" rel="noopener noreferrer" className='hover:text-gray-500 transition-colors'>
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/techgiantafrica" target="_blank" rel="noopener noreferrer" className='hover:text-gray-500 transition-colors'>
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com/company/techgiant-africa" target="_blank" rel="noopener noreferrer" className='hover:text-gray-500 transition-colors'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><p onClick={scrollToAboutUs} className='hover:text-gray-500 transition-colors cursor-pointer'>About Us</p></li>
              <li><p onClick={scrollToServices} className='hover:text-gray-500 transition-colors cursor-pointer'>Services</p></li>
              <li><p  className='hover:text-gray-500 transition-colors cursor-pointer'>Portfolio</p></li>
              <li><p onClick={scrollToContactUs} className='hover:text-gray-500 transition-colors cursor-pointer'>Contact Us</p></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl font-bold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li><p className='hover:text-gray-500 transition-colors cursor-pointer'>Privacy Policy</p></li>
              <li><p className='hover:text-gray-500 transition-colors cursor-pointer'>Terms of Service</p></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-700 mt-8 pt-6 text-center'>
          <p>© {new Date().getFullYear()} Techgiant Africa. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer