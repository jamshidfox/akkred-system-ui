import React from "react";
import {Row, Col} from 'reactstrap'
import RoyhatTable from '../components/Tables/RoyhatlarTable'
import ChartjsBarChart from '../components/ChartjsBarChart'
const DashBoardLists = () => {
    const tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    successColorShade = '#28dac6'

    return (
        <div className="p-3">
            <Row>
                <Col sm='12'>
                    <ChartjsBarChart 
                    successColorShade={successColorShade}
                    tooltipShadow={tooltipShadow}
                    gridLineColor={gridLineColor}
                     />
                </Col>
                <Col sm='12' className='p-4'>
                    <RoyhatTable />
                </Col>
            </Row>
        </div>
    )
}
export default DashBoardLists