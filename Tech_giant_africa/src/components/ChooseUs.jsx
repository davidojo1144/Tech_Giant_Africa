import React from 'react'
import Title from './Title'

const ChooseUs = () => {
  const reasons = [
    {
      title: "Affordable Pricing",
      description: "Quality solutions that fit your budget.",
      icon: "💰"
    },
    {
      title: "Experienced Team",
      description: "Skilled developers with a passion for innovation.",
      icon: "👨‍💻"
    },
    {
      title: "Fast Delivery",
      description: "Projects completed within agreed timelines.",
      icon: "⚡"
    },
    {
      title: "Customer Satisfaction",
      description: "We prioritize your needs and feedback.",
      icon: "❤️"
    },
    {
      title: "Local Expertise",
      description: "Understanding the African market dynamics.",
      icon: "🌍"
    }
  ]

  return (
    <div className='bg-gray-900 py-20'>
      <div className='container'>
        <div className='text-center mb-16'>
          <Title 
            text1={"Why Choose"} 
            text2={"Techgiant Africa?"} 
            className="md:text-4xl text-3xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{reason.icon}</span>
                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
              </div>
              <p className="text-gray-300 pl-12">{reason.description}</p>
            </div>
          ))}
          
          {/* Additional visual element */}
          <div className="lg:col-span-3 flex justify-center mt-12">
            <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6 text-center max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Our Commitment</h3>
              <p className="text-gray-300">
                At Techgiant Africa, we combine technical excellence with deep local knowledge 
                to deliver solutions that truly work for your business in the African context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs