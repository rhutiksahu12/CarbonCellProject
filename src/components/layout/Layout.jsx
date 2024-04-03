import React from 'react'
import Sidebar from '../Sidebar'
import NavBar from '../NavBar'
import { useGlobalData } from '@/context/GlobalContext'

const Layout = ({ children }) => {
    const { isExpanded} = useGlobalData()
    return (
        <div className=' flex max-w-full min-h-screen bg-[#0b0b0b] '>
            <div className={`${isExpanded? 'w-[90%] md:w-[50%] lg:w-[18%]':'w-0'} h-screen md:static transition-all duration-300 ease-in-out fixed z-10`}>
                <Sidebar />
            </div>
            <div className='flex-1 flex-grow'>
                <div className='py-6'>
                    <NavBar />

                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout