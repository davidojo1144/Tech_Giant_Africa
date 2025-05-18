import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <>
      <div className='container pt-20 pb-20'>
        <div className='text-center md:text-4xl text-3xl'>
            <Title text1={"About"} text2={"Us"}/>
        </div>
        <div className='flex md:flex-row flex-col md:gap-5 gap-10 pt-5'>
            <div className='md:space-y-10 space-y-5'>
                <h1 className='text-xl text-white'>At Techgiant Africa, we are passionate about transforming ideas into impactful digital experiences. Founded with the vision to make quality web and app development accessible to businesses and individuals across Africa, we specialize in creating customized websites and mobile applications that help our clients grow and succeed.</h1>
                <h1 className='text-xl text-white'>Our team of talented Software Engineers, designers, and strategists work closely with you to understand your unique needs, ensuring that every project is delivered on time, within budget, and to your satisfaction.</h1>
            </div>
            <img className='md:w-[40%] rounded' src={assets.about} alt="" />
        </div>
      </div>
    </>
  )
}

export default About
