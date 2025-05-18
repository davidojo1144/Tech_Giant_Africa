import { createContext } from "react"


export const TechGiantContext = createContext()

const TechGiantContextProvider = (props)=> {




    const value = {

    }


    return (
        <TechGiantContext  value={value}>
            {props.children}
        </TechGiantContext>
    )
}

export default TechGiantContextProvider