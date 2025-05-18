import React, { useContext } from 'react'
import Title from './Title'
import { services } from '../assets/assets'
import { TechGiantContext } from '../context/TechGiantContext'

const ServicesOffered = () => {


    const {servicesRef} = useContext(TechGiantContext)

  return (
    <div className='container pt-20 pb-20'>
      <div ref={servicesRef}  className='text-center md:text-4xl text-3xl md:mb-7 mb-4'>
        <Title text1={"Services"} text2={"Offered"}/>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesOffered