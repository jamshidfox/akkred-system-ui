import React from 'react'
import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody as div, CardSubtitle } from 'reactstrap'

const areaColors = {
  series3: '#a4f8cd',
  series2: '#60f2ca',
  series1: '#2bdac7',
}

const ApexAreaCharts = ({ direction }) => {
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: 'straight',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: [areaColors.series3, areaColors.series2, areaColors.series1],
    xaxis: {
      categories: [
        'Yanvar',
        'Fevral',
        'Mart',
        'Aprel',
        'Mart',
        'Iyun',
        'Iyul',
        'Avgust',
        'Sentyabr',
        'Oktyabr',
        'Noyabr',
        'Dekabr',
      ],
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    tooltip: {
      shared: false,
    },
    yaxis: {
      opposite: direction === 'rtl',
    },
  }

  const series = [
    {
      name: 'Ekspertiza',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270],
    },
    {
      name: 'Audit',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200],
    },
    {
      name: 'Baholash',
      data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140],
    },
  ]

  return (
    <div>
      <div className="d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start">
        <div className="p-3">
          <CardTitle className="mb-75" tag="h4">
            Shartnoma
          </CardTitle>
          <CardSubtitle className="text-muted">Umumiy shartnomalar</CardSubtitle>
        </div>
      </div>
      <div>
        <Chart options={options} series={series} type="area" height={300} />
      </div>
    </div>
  )
}
export default ApexAreaCharts
