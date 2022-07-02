import React from 'react'
import { Pie,Line, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['9 A.M', '12 P.M', '3 P.M', '6 P.M', '9 P.M', '12 A.M'],
          datasets: [
            
            {
              label: 'temperature',
              data: [31, 33, 30, 27, 28, 22],
              backgroundColor: 'skyblue',
              borderColor: 'skyblue',
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart
