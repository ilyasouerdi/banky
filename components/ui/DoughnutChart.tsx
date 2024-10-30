"use client";
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({ accounts}:DoughnutChartProps) => {
  
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250,2600,8900],
                backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
            }
        ],
        labels: ['Bank 1', ' Bank 2', ' Bank 3']
    }
    return <Doughnut 
        data={data}
        options={{
            cutout: '60%',
            plugins:{
                legend: {
                  display: false
            }
        }
    }}
    />
  
}

export default DoughnutChart