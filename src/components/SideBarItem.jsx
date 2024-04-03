import { useGlobalData } from '@/context/GlobalContext'
import { Home } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SideBarItem = ({ item }) => {
    const {setIsExpanded } = useGlobalData()
    return (
        <NavLink to={item.path} className={({ isActive }) =>  isActive ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-primary" : "flex items-center gap-3 text-white/80 rounded-lg px-3 py-2 transition-all hover:text-primary"} >
            <div className=' flex items-center h-4 w-4'>
                {item.icon}
            </div>
            {item.title}
        </NavLink>
    )
}

export default SideBarItem

// 'flex items-center gap-3 text-white/80 rounded-lg px-3 py-2 transition-all hover:text-primary ' +