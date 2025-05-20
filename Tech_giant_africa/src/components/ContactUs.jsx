import React, { useContext } from 'react'
import Title from './Title'
import { TechGiantContext } from '../context/TechGiantContext'

const ContactUs = () => {
  const { phone, email, address, contactUsRef } = useContext(TechGiantContext)

  return (
    <div ref={contactUsRef} className='container mt-20 mb-20'>
      <div className='text-center md:text-4xl text-3xl'>
        <Title text1={"Get In"} text2={"Touch"} />
      </div>
      <div className='flex md:flex-row flex-col items-center justify-between gap-10 pt-10 pb-10'>
        <div className='space-y-5 text-white'>
          <h1 className='md:text-2xl text-xl font-semibold pb-7'>Have a project in mind or questions? We'd love to hear from you!</h1>
          <div  className='space-y-4'>
            <p className='font-bold text-lg'>Contact Details</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
          </div>
        </div>
        <form className='bg-gray-100 p-5 rounded w-full md:w-1/2'>
          <div className='space-y-5'>
            <div className='flex flex-col md:flex-row gap-5 w-full'>
              <input 
                type="text" 
                placeholder='Name'
                className='p-2 rounded border border-gray-300 flex-1'
                required
              />
              <input 
                type="email" 
                placeholder='Email'
                className='p-2 rounded border border-gray-300 flex-1'
                required
              />
            </div>
            <textarea 
              placeholder='Message'
              className='p-2 rounded border border-gray-300 w-full h-32'
              required
            />
          </div>
          <button 
            type="submit"
            className='mt-5 bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600 transition-colors'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs