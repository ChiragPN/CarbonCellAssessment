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
          color: 'black',
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
          color: 'black',
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
        color: "black"
      },
      legend: {
        align: "end",
        labels: {
          color: "black",
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
          borderColor: "rgb(255, 92, 132)",
          backgroundColor: "rgba(255, 92, 132, 0.3)",
          borderWidth: 2,
        }],
      })
    }
    
    fetchData()
  }, [])

  return (
    <div className='container mx-6 my-4'>
      <div className="graph w-[60%] h-[60%] p-4 border-2 rounded-lg">
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
