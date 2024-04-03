import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalData } from '@/context/GlobalContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Population in United States',
        },
    },
    scales: {
        // x: {
            
        // },
        y: {
            grid: {
                color: '#AEAEAE' // Specify a color for y-axis grid lines
                
            },
            
        }
    }
};


const LineCharts = () => {

    const { populationData } = useGlobalData()
    console.log(populationData, "ppp")
    const labels = populationData?.map(item => item.Year)

    return (
        <Line data={{
            labels: labels,
            datasets: [
                {
                    label: 'Population Data',
                    data: populationData?.map(item => item.Population),
                    // backgroundColor: '#171717',
                    backgroundColor:'white',
                    borderColor: '#4ca154'

                }
            ],
            

        }}options={options} />
    )
}

export default LineCharts