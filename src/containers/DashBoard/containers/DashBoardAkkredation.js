import React from "react";
import SimplePieChart from '../components/PieChart'
import GoalOverview from '../components/GoalOverview'
import {Row, Col} from 'reactstrap'

const DashBoardAkkedation = () => {
    const donut = {
        series1: '#ffe700',
        series2: '#00d4bd',
        series3: '#826bf8',
        series4: '#2b9bf4',
        series5: '#FFA1A1'
      }
    return (
        <div className='p-3'>
            <Row>
                <Col xl='6' lg='12'>
                    <SimplePieChart series1={donut.series1} series2={donut.series2} series3={donut.series3} series5={donut.series5} />
                </Col>
                <Col xl='6' lg='12'>
                    <GoalOverview success={'green'} title='Progress'/>
                </Col>
            </Row>
        </div>
    )
}
export default DashBoardAkkedation