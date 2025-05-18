import { createContext, useRef } from "react"


export const TechGiantContext = createContext()

const TechGiantContextProvider = (props)=> {



    const howItWorksRef = useRef(null)

    const scrollToHowItWorks = ()=> {
        howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })
    }



    const value = {
        howItWorksRef,
        scrollToHowItWorks
    }


    return (
        <TechGiantContext  value={value}>
            {props.children}
        </TechGiantContext>
    )
}

export default TechGiantContextProvider