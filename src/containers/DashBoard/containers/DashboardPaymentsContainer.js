import React from "react";
import ApexAreaCharts from "../components/ApexAreaCharts"
import ShartNomaTableBasics from "../components/Tables/ShartnomaTable"
import {Row, Col} from 'reactstrap'

const DashboardPayments = () => {

    return (
        <div className="p-3">
            <Row>
                <Col sm='12'>
                    <ApexAreaCharts/>
                </Col>
                <Col sm='12' className='p-4'>
                    <ShartNomaTableBasics/>
                </Col>
            </Row>
        </div>
    )
}
export default DashboardPayments