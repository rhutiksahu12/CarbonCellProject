import React from 'react'
import {
    Bell,
    CandlestickChart,
    Home,
    LineChart,
    Hourglass,
    Package,
    Building2,
    WalletMinimal,
    CircleHelp,
    Settings,
    Search,
    Menu,
    EllipsisVertical,
    PanelRightOpen

} from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Logo from '../assets/logo2.png'
import AvatarImg from '../assets/avatar.jpg'
import { useGlobalData } from '@/context/GlobalContext'
import SideBarItem from './SideBarItem'

const sideBarData = [
    {
        icon: <Home />,
        path: '/',
        title: "Home"
    },
    {
        icon: <Building2 />,
        path: 'organization',
        title: 'Organization'
    },
    {
        icon: <Package />,
        path: 'assets',
        title: 'Assets'
    },
    {
        icon: <Hourglass />,
        path: 'trade',
        title: 'Trade'
    },
    {
        icon: <CandlestickChart />,
        path: 'history',
        title: 'History'
    },
    {
        icon: <WalletMinimal />,
        path: 'wallet',
        title: 'Wallet'
    }
]


const Sidebar = () => {
    const { setIsExpanded, toggleSidebar } = useGlobalData()
    return (
        <>
            <aside className='flex h-full max-h-screen flex-col sticky py-6 gap-2 bg-[#1b1e1c] overflow-hidden'>
                <div className='flex items-center px-3'>
                    <div className='items-center'>
                        <img src={Logo} className='h-10 w-10' alt="logo" />
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex flex-col text-yellow-400 text-md'>
                            <strong className='p-0 tracking-wide'>Carbon</strong>
                            <span className='p-0 tracking-wide'>Cell</span>
                        </div>
                        <div className='text-white/80 hover:cursor-pointer'>
                            <PanelRightOpen onClick={toggleSidebar} />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-white/80 rounded-lg px-3 py-2 transition-all hover:text-primary'>
                    <Input type='search' className='bg-[#333333] border-0 placeholder:text-white/80 focus-visible:ring-0 focus-visible:border-0' placeholder='Search' Search />
                </div>
                <div className='flex-1'>
                    <nav className="grid items-start px-3 gap-3 text-sm font-medium lg:px-4">
                        {sideBarData.map(item => <SideBarItem item={item} />)}
                    </nav>
                </div>
                {/* </div > */}
                <div className="mt-auto">
                    <nav className="grid items-start px-3 text-sm font-medium lg:px-4">
                        <div className='flex items-center gap-3 text-muted-foreground rounded-lg px-3 py-2 transition-all hover:text-primary'>

                            <Bell className="h-4 w-4" />
                            Notifications
                            <Badge className="ml-auto flex h-4 w-6 shrink-0 items-center rounded-sm justify-center text-black">
                                12
                            </Badge>
                        </div>

                        <div className='flex items-center gap-3 text-muted-foreground rounded-lg px-3 py-2 transition-all hover:text-primary'>
                            <CircleHelp className="h-4 w-4" />
                            Support

                        </div>

                        <div className='flex items-center gap-3 text-muted-foreground rounded-lg px-3 py-2 transition-all hover:text-primary'>
                            <Settings className="h-4 w-4" />
                            Settings
                        </div>

                    </nav>
                </div>
                <div className='flex items-center justify-between bg-[#333333] mx-3 px-1 py-3 rounded-md'>
                    <div className='flex items-center px-3 gap-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={AvatarImg} alt="avatar" />
                            <AvatarFallback>Profile</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col items-stretch text-xs'>
                            <strong className='text-white/80'>Brooklyn Simmons</strong>
                            <span className='text-muted-foreground text-[0.6rem]'>brooklyn@simmons.com</span>
                        </div>
                    </div>

                    <EllipsisVertical className='text-muted-foreground' />


                </div>

            </aside>
        </>

    )
}

export default Sidebar