import React from 'react'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { HelpCircle } from 'react-feather'
import { CardTitle, CardBody, Card, CardText, Row, Col } from 'reactstrap'

const GoalOverview = props => {
  const [data, setData] = useState({proved: 121, disaproved: 90})
  const percentage = (100 * data.proved)/(data.proved + data.disaproved)
  let x = 9.656

  const options = {
      chart: {
        sparkline: {
          enabled: true
        },     
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      },
      colors: ['#51e5a8'],
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%'
          },
          track: {
            background: '#ebe9f1',
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: '#5e5873',
              fontFamily: 'Montserrat',
              fontSize: '2.86rem',
              fontWeight: '600'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [props.success],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          bottom: 30
        }
      }
    },
    series = [percentage.toFixed(0)]

  return data !== null ? (
    <Card>
      <div className="d-flex justify-content-between align-items-center p-3">
        <CardTitle tag='h4'>{props.title}</CardTitle>
        <HelpCircle size={18} className='text-muted cursor-pointer' />
      </div>
      <CardBody className='p-0'>
        <Chart options={options} series={series} type='radialBar' height={245} />
      </CardBody>
      <Row className='border-top text-center mx-0'>
        <Col xs='6' className='border-right py-1'>
          <CardText className='text-muted mb-0'>Tasdiqlangan</CardText>
          <h3 className='font-weight-bolder mb-0'>{data.proved}</h3>
        </Col>
        <Col xs='6' className='py-1'>
          <CardText className='text-muted mb-0'>Tasdiqlanmagan</CardText>
          <h3 className='font-weight-bolder mb-0'>{data.disaproved}</h3>
        </Col>
      </Row>
    </Card>
  ) : null
}
export default GoalOverview
