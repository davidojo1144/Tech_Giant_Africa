import { createContext, useRef } from "react"


export const TechGiantContext = createContext()

const TechGiantContextProvider = (props)=> {



    const aboutUsRef = useRef(null)

    const scrollToAboutUs = ()=> {
        aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }



    const value = {
        aboutUsRef,
        scrollToAboutUs
    }


    return (
        <TechGiantContext.Provider  value={value}>
            {props.children}
        </TechGiantContext.Provider>
    )
}

export default TechGiantContextProvider