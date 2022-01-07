import React from 'react'
import { CardHeader, CardTitle, CardBody as div, CardSubtitle } from 'reactstrap'
import {Line} from 'react-chartjs-2'
import TimePicker from '../components/data-picker/PickerInline'

const ChartjsLineChart = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: false,
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 25,
        boxWidth: 10
      }
    },
    hover: {
      mode: 'label'
    },
    tooltips: {
      // Updated default tooltip UI
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowBlur: 8,
      shadowColor: 'blue',
      backgroundColor: '#fff',
      titleFontColor: '#000',
      bodyFontColor: '#000'
    },
    layout: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true
          },
          gridLines: {
            display: true,
            color: 'red',
            zeroLineColor: 'yellow'
          },
          ticks: {
            fontColor: 'black'
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: 'red'
          },
          gridLines: {
            display: true,
            color: 'blue',
            zeroLineColor: 'yellow'
          }
        }
      ]
    },
    legend: {
      position: 'top',
      align: 'start',
      labels: {
        usePointStyle: true,
        padding: 25,
        boxWidth: 9
      }
    }
  }
  const data = {
    labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May','Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
    datasets: [
      {
        data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255],
        label: 'Labaratoriya1',
        borderColor: 'red',
        lineTension: 0.5,
        pointStyle: 'line',
        backgroundColor: 'red',
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: '#fff',
        pointHoverBackgroundColor: 'red',
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: 'grey'
      },
      {
        data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170],
        label: 'Labaratoriya2',
        borderColor: 'blue',
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: 'blue',
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: '#fff',
        pointHoverBackgroundColor: 'blue',
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: 'grey'
      },
      {
        data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90],
        label: 'Labaratoriya3',
        borderColor: 'orange',
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: 'orange',
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: '#fff',
        pointHoverBackgroundColor: 'orange',
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: 'grey'
      }
    ]
  }
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <div>
        <div className='d-flex justify-content-between w-100'>
          <div>
            <CardTitle className='mb-75' tag='h4'>
              Arizalar
            </CardTitle>
            <CardSubtitle>Arizalar bo'yicha statistika</CardSubtitle>
          </div>
          <div>
              <TimePicker />
          </div>
        </div>
        <div style={{ height: '250px', width: '100%'}}>
          <Line data={data} options={options} plugins={plugins} />
      </div>
  </div>
  )
}
export default ChartjsLineChart