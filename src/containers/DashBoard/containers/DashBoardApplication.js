import React, {Fragment as div} from 'react'
import {Row, Col} from 'reactstrap'
import ChartjsLineChart from '../components/ChartjsLineChart'
import TableBasic from "../components/Tables/DashBoardTable"


const DashboardContainer = props => {

  return (
    <div className='p-3'>
      <Row>
        <Col sm='12'>
            <ChartjsLineChart />
        </Col>
        <Col sm='12' className='p-4'>
            <TableBasic />
        </Col>
      </Row>
    </div>
  )
}

export default DashboardContainer
