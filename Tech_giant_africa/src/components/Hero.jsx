import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState('')
  const [showQuote, setShowQuote] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)

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

  const portfolioItems = [
    {
      title: "E-commerce Website",
      url: "https://my-e-commerce-project-phi.vercel.app/",
      description: "Full-featured online store with payment integration"
    },
    {
      title: "DClutter Website",
      url: "https://d-clutter-project.vercel.app/",
      description: "A Web application for buying and selling of house hold items"
    },
    {
      title: "RealEstate Website",
      url: "https://my-real-estate-website-project.vercel.app/",
      description: "A RealEstate Platform"
    }
  ]

  const handleGetQuote = () => {
    const randomQuote = techQuotes[Math.floor(Math.random() * techQuotes.length)]
    setCurrentQuote(randomQuote)
    setShowQuote(true)
    setShowPortfolio(false) // Close portfolio if open
    setTimeout(() => {
      setShowQuote(false)
    }, 10000)
  }

  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio)
    setShowQuote(false) // Close quote if open
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
                className='py-2 px-3 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 rounded md:text-xl text-xs transition-colors'
              >
                Get a Free Quote
              </button>
              <button 
                onClick={togglePortfolio}
                className='py-2 px-3 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 rounded md:text-xl text-xs transition-colors'
              >
                View Our Portfolio
              </button>
            </div>
            {showQuote && (
              <div className='mt-4 p-3 bg-gray-700 rounded-lg transition-all duration-300'>
                <p className='italic'>"{currentQuote}"</p>
              </div>
            )}
          </div>
          <img className='md:w-[40%] md:h-[100%] rounded' src={assets.hero} alt="Digital Solutions" />
        </div>
      </div>

      {/* Portfolio Modal */}
      {showPortfolio && (
        <div 
          className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={togglePortfolio}
        >
          <div 
            className="bg-gray-800 shadow-2xl  p-6 rounded-lg max-w-4xl w-full max-h-[100vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-200">Our Portfolio</h2>
              <button 
                onClick={togglePortfolio}
                className="text-gray-200 hover:text-gray-300 text-2xl"
                aria-label="Close portfolio"
              >
                &times;
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioItems.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded transition-colors"
                  >
                    View Live Project
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={togglePortfolio}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              >
                Close Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero