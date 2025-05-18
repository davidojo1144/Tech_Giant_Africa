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



    const value = {
        aboutUsRef,
        scrollToAboutUs,
        servicesRef,
        scrollToServices,
        contactUsRef,
        scrollToContactUs
    }


    return (
        <TechGiantContext.Provider  value={value}>
            {props.children}
        </TechGiantContext.Provider>
    )
}

export default TechGiantContextProvider