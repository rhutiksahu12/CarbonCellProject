import React from 'react'
import { useContext, useState, createContext } from 'react'

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {

    const [populationData, setPopulationData] = useState()
    const [bitCoin, setBitCoin] = useState()
    const [ isExpanded, setIsExpanded] = useState(false)

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <GlobalContext.Provider value={{ toggleSidebar,isExpanded, setIsExpanded, populationData, setPopulationData, bitCoin, setBitCoin }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalData = () => {
    return useContext(GlobalContext)
}



