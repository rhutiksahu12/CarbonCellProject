import React, { useState } from 'react'
import { GlobalContextProvider } from './GlobalContext'

const WrapperContext = ({ children }) => {



    return (
        <GlobalContextProvider >
            {children}
        </GlobalContextProvider>

    )
}

export default WrapperContext