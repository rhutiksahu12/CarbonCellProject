import { Home } from 'lucide-react'
import React from 'react'

const SideBarItem = ({ item }) => {
    return (
        <div className='flex items-center gap-3 text-white/80 rounded-lg px-3 py-2 transition-all hover:text-primary'>
            {/* <div className='h-4 w-4'> */}
                {item.icon}
            {/* </div> */}
            {item.title}
        </div>
    )
}

export default SideBarItem