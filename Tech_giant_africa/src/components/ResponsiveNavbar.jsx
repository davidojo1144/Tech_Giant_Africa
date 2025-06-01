import React, { useState } from 'react'
import UseAnimations from "react-useanimations"
import menuV2 from 'react-useanimations/lib/menu2'
import { assets } from '../assets/assets'
import ResponsiveDisplay from './ResponsiveDisplay'

const ResponsiveNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='container'>
            <div className='flex items-center justify-between md:hidden pt-5'>
                <UseAnimations 
                    animation={menuV2}
                    size={32}
                    reverse={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    strokeColor="#FFFFFF" 
                    speed={1.5}
                    className="cursor-pointer" 
                />
                <img className='w-16' src={assets.logo} alt="Logo" />
            </div>
            <ResponsiveDisplay img={menuOpen}/>
        </div>
    )
}

export default ResponsiveNavbar