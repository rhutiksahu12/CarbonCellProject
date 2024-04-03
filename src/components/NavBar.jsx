import React from 'react'
import Layout from './layout/Layout'
import MaxWidthWrapper from './utilityComponents/MaxWidthWrapper'
import Wavinghand from '../assets/waving-hand.svg'
import { Menu, PanelRightClose } from 'lucide-react'
import { useGlobalData } from '@/context/GlobalContext'

const NavBar = () => {
    const { toggleSidebar, isExpanded } = useGlobalData()

    return (
        <MaxWidthWrapper>

            <nav className='flex flex-col md:flex-row md:justify-between md:items-center items-end'>
                
                <div className='flex items-center justify-between md:justify-start lg:justify-normal w-full gap-3 text-white'>
                <div className={`-ml-2 ${isExpanded?'hidden':null} cursor-pointer `}>
                    <Menu  onClick={toggleSidebar} />
                </div>
                    <div>
                        <h1 className='flex text-lg'>Hello,<span className='text-primary'>&nbsp; Brooklyn Simmons</span> <img src={Wavinghand} alt="wavinghand" className='h-6 w-6' /></h1>
                        <h4>Welcome to <span className='text-primary'>Spot trading !</span></h4>
                    </div>
                </div>
                <div className='w-full md:w-fit mt-4 md:mt-0'>
                    <button className='bg-primary text-white px-3 py-2 rounded-sm w-full md:whitespace-nowrap hover:bg-primary/70'>Start Trading</button>
                </div>

            </nav>
        </MaxWidthWrapper>
    )
}

export default NavBar