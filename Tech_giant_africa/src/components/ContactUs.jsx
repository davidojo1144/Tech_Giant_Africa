import React, { useContext } from 'react'
import Title from './Title'
import { TechGiantContext } from '../context/TechGiantContext'

const ContactUs = () => {

  const {phone, email, address} = useContext(TechGiantContext)


  return (
    <div className='container mt-10'>
      <div className='text-center md:text-4xl text-2xl'>
        <Title text1={"Get In"}  text2={"Touch"}/>
      </div>
      <div className='flex md:flex-row  flex-col items-center justify-between gap-10 pt-10 pb-10'>
        <div className='space-y-5 text-white'>
          <h1>Have a project in mind or questions? We'd love to hear from you!</h1>
          <div>
            <p>Contact Details</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
          </div>
        </div>
        <form className='bg-gray-100 p-5 rounded' action="">
          <div className='space-y-5'>
              <div className='space-x-10 w-full'>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
              </div>
            <textarea type="text" placeholder='message'/>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
