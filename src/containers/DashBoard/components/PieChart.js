import React from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts'

const SimplePieChart = props => {
  const data = [
    { name: 'Operational', value: 85, color: props.series1 },
    { name: 'Networking', value: 16, color: props.series5 },
    { name: 'Hiring', value: 50, color: props.series3 }
  ]

  /*eslint-disable */
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, fill }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    /*eslint-enable */
    return (
      <text
        x={x}
        y={y}
        fill={fill === props.secondary ? '#000' : '#fff'}
        textAnchor='middle'
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <Card>
        <div className='p-3'>
          <CardTitle tag='h4'>Akkreditatsiya</CardTitle>
          <small className='text-muted'>Akkreditatsiya bo'yicha barcha malumo'tlar</small>
        </div>

      <CardBody>
        <div className='recharts-wrapper d-flex justify-content-center'>
            <PieChart width={200} height={200}>
              <Pie data={data} dataKey="value" label={renderCustomizedLabel} innerRadius={45} labelLine={false}>
              {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} label />
                  ))}
              </Pie>
            </PieChart>
        </div>
        <div className='d-flex align-items-center justify-content-around flex-wrap'>
          <div className='mr-2 d-flex justify-content-around align-items-center'>
            <span className='rounded-circle' style={{ backgroundColor: '#ffe700', height: '1rem', width: '1rem', marginRight: '0.5rem'}}></span>
            <span className='align-middle mr-75'>Akkreditatsiya</span>
          </div>
          <div className='mr-2 d-flex justify-content-around align-items-center'>
          <span className='rounded-circle' style={{ backgroundColor: '#ffa1a1', height: '1rem', width:'1rem', marginRight: '0.5rem'}}></span>            
          <span className='align-middle mr-75'>Akkreditatsiya2</span>
          </div>
          <div className='mr-2 d-flex justify-content-around align-items-center'>
          <span className='rounded-circle' style={{ backgroundColor: '#826BF8', height: '1rem', width: '1rem', marginRight: '0.5rem'}}></span>            
          <span className='align-middle mr-75'>Akkreditatsiya3</span>
          </div>
          {/* <div className='mr-2 d-flex justify-content-around align-items-center'>
            <span className='rounded-circle' style={{ backgroundColor: '#00d4bd', color: '#00d4bd', height: '1.5rem', marginRight: '0.5rem'}}>222</span>            
            <span className='align-middle mr-75'>Akkreditatsiya4</span>
          </div> */}
        </div>
      </CardBody>
    </Card>
  )
}
export default SimplePieChart
