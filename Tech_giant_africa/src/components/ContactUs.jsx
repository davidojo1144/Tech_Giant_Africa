import React from 'react'
import Title from './Title'

const ContactUs = () => {
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
            <p>Phone</p>
            <p>Email</p>
            <p>Address</p>
          </div>
        </div>
        <form action="">

        </form>
      </div>
    </div>
  )
}

export default ContactUs
