import React, { useContext } from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { TechGiantContext } from '../context/TechGiantContext'



const ResponsiveDisplay = ({img}) => {

    const {scrollToAboutUs} = useContext(TechGiantContext)


  return <AnimatePresence>
        { img && (
            <motion.div
            initial={{ opacity:0, y: -100 }}
            animate={{ opacity:1, y: 0 }}
            exit={{ opacity:0, y: -100 }}
            transition={{duration: 0.3}}
            >
                <div className='bg-gray-200  text-gray-600 hover:text-gray-700 cursor-pointer text-md font-semibold uppercase  mt-5 rounded md:hidden'>
                    <ul className='flex flex-col items-start p-9 justify-center  gap-7'>
                        <div className='flex flex-col gap-10'>
                           <p onClick={scrollToAboutUs}>About Us</p>
                           <p>Services Offered</p>
                           <p>Contact Us</p>
                        </div>
                    </ul>
                </div>
            </motion.div>
            )
        }
</AnimatePresence>
}

export default ResponsiveDisplay
