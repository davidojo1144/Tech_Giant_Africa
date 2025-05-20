import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-200 text-gray-800 py-10 mt-20'>
      <div className='container mx-auto '>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          {/* Company Info */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl font-bold mb-4'>Techgiant Africa</h3>
            <p className='mb-4'>Innovative technology solutions for Africa's digital future.</p>
            
            {/* Social Media Links */}
            <div className='flex space-x-4'>
              <a href="https://instagram.com/techgiantafrica" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-colors'>
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com/techgiantafrica" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-colors'>
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/techgiantafrica" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-colors'>
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com/company/techgiant-africa" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-colors'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a href="/about" className='hover:text-blue-400 transition-colors'>About Us</a></li>
              <li><a href="/services" className='hover:text-blue-400 transition-colors'>Services</a></li>
              <li><a href="/portfolio" className='hover:text-blue-400 transition-colors'>Portfolio</a></li>
              <li><a href="/contact" className='hover:text-blue-400 transition-colors'>Contact Us</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl font-bold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li><a href="/privacy" className='hover:text-blue-400 transition-colors'>Privacy Policy</a></li>
              <li><a href="/terms" className='hover:text-blue-400 transition-colors'>Terms of Service</a></li>
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