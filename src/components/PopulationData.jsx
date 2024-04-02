import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function PopulationData() {
  const [chartData, setChartData] = useState({});
  const lineOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
          color: 'white',
          font: {
            size: 15,
          },
          margin: {
            top: 20,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
          color: 'white',
          font: {
            size: 15,
          },
          margin: {
            right: 20,
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Population Data",
        align: "start",
        font: {
          size: 25,
        },
        color: "white"
      },
      legend: {
        align: "end",
        labels: {
          color: "white",
          font: {
            size: 15,
          },
        },
        margin: {
          bottom: 10,
        }
      },
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      setChartData({
        labels: data.data.map(item => item.Year),
        datasets: [{
          label: "United States",
          data: data.data.map(item => item.Population),
          fill: false,
          borderColor: "LightBlue",
          backgroundColor: "LightBlue",
          borderWidth: 2,
        }],
      })
    }
    
    fetchData()
  }, [])

  return (
    <div className='container mx-4 pt-2 md:w-full w-fit'>
      <div className="graph bg-CustomGray p-4 rounded-lg w-full h-[70vh]">
        {chartData && chartData.datasets && (
          <Line
            data={chartData}
            options={lineOptions}
          />
        )}
      </div>
    </div>
  )
}

export default PopulationData
