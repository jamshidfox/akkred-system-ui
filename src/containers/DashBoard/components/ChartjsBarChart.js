import React from 'react'
import { Bar } from 'react-chartjs-2'
import {  CardTitle, CardBody } from 'reactstrap'
import TimePicker from '../components/data-picker/PickerInline'

const ChartjsBarChart = ({ tooltipShadow, gridLineColor, successColorShade }) => {
  const options = {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            scaleLabel: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400
            }
          }
        ]
      }
    },
    data = {
      labels: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
      datasets: [
        {
          label : `Ro'yhatlar`,
          data: [275, 90, 190, 205, 125, 85, 55, 87, 127],
          backgroundColor: successColorShade,
          borderColor: 'transparent',
          barThickness: 15
        }
      ]
    }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
            <CardTitle tag='h4'>Ro'hatga olingan korhonalar</CardTitle>
        </div>
        <div>
            <TimePicker />
        </div>
      </div>
      <div>
        <div style={{ height: '300px'}}>
          <Bar data={data} options={options} height={300} />
        </div>
      </div>
    </div>
  )
}

export default ChartjsBarChart
