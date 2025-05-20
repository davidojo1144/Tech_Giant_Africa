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
      <div className='flex md:flex-row  flex-col items-center justify-between gap-10'>
        <div className='space-y-5 text-white'>
          <h1>Have a project in mind or questions? We'd love to hear from you!</h1>
          <div>
            <p>Contact Details</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
          </div>
        </div>
        <form action="">

        </form>
      </div>
    </div>
  )
}

export default ContactUs
