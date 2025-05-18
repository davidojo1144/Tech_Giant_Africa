import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <>
    <div className='container'>
        <div className='flex md:flex-row flex-col items-center justify-between gap-10  mt-10 border-2 border-gray-400 shadow-2xl md:p-10 p-3'>
            <div className='text-white md:space-y-8 space-y-3'>
                <h1 className='prata-regular md:text-4xl text-2xl '>Affordable Websites & Apps for Your Business & Personal Needs.</h1>
                <p className='md:text-xl text-md'>Building innovative digital solutions at prices that suit your budget.</p>
                <div className='flex md:gap-5 gap-3'>
                    <button className='py-2 px-5 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 rounded md:text-xl text-xs'>Get a Free Quote</button>
                    <button className='py-2 px-5 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 rounded md:text-xl text-xs'>View Our Portfolio</button>
                </div>
            </div>
            <img className='md:w-[50%]  rounded' src={assets.hero} alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero
