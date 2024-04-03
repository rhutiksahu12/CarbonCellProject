import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
} from "@/components/ui/avatar"
import { BadgeInfo } from 'lucide-react'

const CardComponent = ({item}) => {
    console.log(item)
    return (
        <>
            <Card className='bg-[#171717] border-0 w-full md:w-48 p-3'>
                <CardHeader className='p-0'>
                    <CardTitle className='flex items-center text-white gap-2'>
                        <Avatar className='h-10 w-10 bg-primary'>
                            <span className='text-white my-auto text-sm font-normal w-full text-center'>{item.code}</span>
                        </Avatar>
                        <h2 className='font-semibold text-base'>{item.code}</h2>
                    </CardTitle>
                    <CardDescription className='py-1 whitespace-nowrap overflow-hidden truncate'>
                        Bitcoin to {item.description}
                    </CardDescription>
                </CardHeader>
                <CardContent className='p-0'>
                    <div className='flex justify-between items-center text-white py-2'>
                        <strong className='text-lg'>{item.rate}</strong>
                        <span className='text-xs text-white/70'>+70.01%</span>
                    </div>
                    <div className='flex justify-between items-center pt-2 '>
                        <BadgeInfo className='text-primary cursor-pointer' />
                        <button className='text-xs text-center font-normal bg-primary px-3 py-1.5 rounded-md text-white hover:bg-primary/70'>Trade</button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default CardComponent