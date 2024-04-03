import { getBitCoinData } from '@/api/bitCoinApi'
import { getPopulationData } from '@/api/populationApi'
import CardComponent from '@/components/Card'
import LineCharts from '@/components/charts/LineCharts'
import Layout from '@/components/layout/Layout'
import MaxWidthWrapper from '@/components/utilityComponents/MaxWidthWrapper'
import { useGlobalData } from '@/context/GlobalContext'
import _ from 'lodash'
import React, { useEffect } from 'react'

const Dashboard = () => {
    const { setPopulationData, setBitCoin, bitCoin } = useGlobalData()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPopulationData();
            // console.log(data.data);
            setPopulationData(data.data);
            const bitcoinData = await getBitCoinData()
            // console.log(bitcoinData)
            const bitCoinDataArray = _.map(bitcoinData?.bpi, (obj, key) => {
                obj.symbol = key
                return obj
            })
            setBitCoin(bitCoinDataArray)
        };

        fetchData();
    }, []);

    console.log(bitCoin)
    return (
        <>
            <section className='flex w-full flex-col md:flex-row'>
                <div className='w-full lg:w-[40%] bg-[#171717] px-3 py-2 rounded-md'>
                    <div>
                        <h2 className='text-lg text-white/90 font-semibold'>US population over the years</h2>
                    </div>
                    <div>
                        <LineCharts />

                    </div>

                </div>
                <div className='w-full md:w-[30%]'>

                </div>
                <div className='w-full md:w-[30%]'>

                </div>
            </section>
            <section className='w-full my-3'>
                <div className='flex justify-between text-white text-base '>
                    <span>Assets</span>
                    <span>Today</span>

                </div>
                <div className='flex gap-4 flex-wrap'>
                    {/* <CardComponent/> */}
                    {bitCoin?.map((item) => (
                        <CardComponent item={item} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Dashboard