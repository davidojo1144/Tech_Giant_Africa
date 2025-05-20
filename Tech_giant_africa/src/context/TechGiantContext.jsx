import { createContext, useRef } from "react"


export const TechGiantContext = createContext()

const TechGiantContextProvider = (props)=> {



    const aboutUsRef = useRef(null)
    const scrollToAboutUs = ()=> {
        aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }



    const servicesRef = useRef(null)
    const scrollToServices = ()=> {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
    }



    const contactUsRef = useRef(null)
    const scrollToContactUs = ()=> {
        contactUsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const phone = "07014223337"
    const email = "techgiantafrica@gmail.com"
    const address = "3 Ajibola Str, Ogundana, Opposite DHL, Allen Avenue, Ikeja Lagos"



    const value = {
        aboutUsRef,
        scrollToAboutUs,
        servicesRef,
        scrollToServices,
        contactUsRef,
        scrollToContactUs,
        phone,
        email,
        address
    }


    return (
        <TechGiantContext.Provider  value={value}>
            {props.children}
        </TechGiantContext.Provider>
    )
}

export default TechGiantContextProvider