import React from 'react'
import ApexAreaCharts from '../components/ApexAreaCharts'
import ShartNomaTableBasics from '../components/Tables/ShartnomaTable'
import TestTableShouldBeDeleted from '../components/Tables/just-test-table'
import { Row, Col, DropdownItem } from 'reactstrap'
import { Edit, Trash } from 'react-feather'

const actions = (
  <div className="d-flex justify-content-start">
    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
      <Trash className="mr-50" size={15} />
    </DropdownItem>
    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
      <Edit className="mr-50" size={15} />
    </DropdownItem>
  </div>
)
const dataForTable = {
  tableHeader: ['No', 'Korhona nomi', 'Elektron manzil', 'Telefon', `To'lovlar`],
  tableBody: [
    ['1', 'Korhona2', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['2', 'Korhona2', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['3', 'Korhona1', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['4', 'Korhona1', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['5', 'Korhona1', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['6', 'Korhona2', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['7', 'Korhona2', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['8', 'Korhona1', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['9', 'Korhona1', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['10', 'Korhona2', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['11', 'Korhona2', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['12', 'Korhona1', 'a.kakharov@gmail.com', '+998934192077', actions],
  ],
}

const DashboardPayments = () => {
  return (
    <div className="p-3">
      <Row>
        <Col sm="12">
          <ApexAreaCharts />
        </Col>
        <Col sm="12" className="p-4">
          <TestTableShouldBeDeleted dataForTable={dataForTable} />

          {/* <ShartNomaTableBasics /> */}
        </Col>
      </Row>
    </div>
  )
}
export default DashboardPayments
