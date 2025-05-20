import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState('')
  const [showQuote, setShowQuote] = useState(false)

  const techQuotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
    "First, solve the problem. Then, write the code. - John Johnson",
    "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
    "Discipline is choosing between what you want now and what you want most. - Abraham Lincoln",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "The function of good software is to make the complex appear simple. - Grady Booch",
    "Simplicity is the soul of efficiency. - Austin Freeman",
    "Make it work, make it right, make it fast. - Kent Beck",
    "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
    "The only way to do great work is to love what you do. - Steve Jobs"
  ]

  const handleGetQuote = () => {
    const randomQuote = techQuotes[Math.floor(Math.random() * techQuotes.length)]
    setCurrentQuote(randomQuote)
    setShowQuote(true)
    
    setTimeout(() => {
      setShowQuote(false)
    }, 10000)
  }

  return (
    <>
      <div className='container mb-10'>
        <div className='flex md:flex-row flex-col items-center gap-10 mt-10 border-2 border-gray-400 shadow-2xl md:p-10 p-3'>
          <div className='text-white md:space-y-8 space-y-3'>
            <h1 className='prata-regular md:text-4xl text-3xl '>Affordable Websites & Apps for Your Business & Personal Needs.</h1>
            <p className='md:text-xl text-md'>Building innovative digital solutions at prices that suit your budget.</p>
            <div className='flex gap-3'>
              <button 
                onClick={handleGetQuote}
                className='py-2 px-3 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 rounded md:text-xl text-xs'
              >
                Get a Free Quote
              </button>
              <button className='py-2 px-3 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 rounded md:text-xl text-xs'>
                View Our Portfolio
              </button>
            </div>
            {showQuote && (
              <div className='mt-4 p-3 bg-gray-700 rounded-lg transition-all duration-300'>
                <p className='italic'>"{currentQuote}"</p>
              </div>
            )}
          </div>
          <img className='md:w-[40%] md:h-[100%] rounded' src={assets.hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero