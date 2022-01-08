import React from 'react'
import { Row, Col, DropdownItem } from 'reactstrap'
import RoyhatTable from '../components/Tables/RoyhatlarTable'
import TestTableShouldBeDeleted from '../components/Tables/just-test-table'
import ChartjsBarChart from '../components/ChartjsBarChart'
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
  tableHeader: ['No', 'Korhona nomi', 'Olingan raqami', 'Elektron manzil', 'Telefon', `Harakatlar`],
  tableBody: [
    ['1', 'Korhona2', '1912', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['2', 'Korhona2', '2212', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['3', 'Korhona1', '1324', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['4', 'Korhona1', '1132', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['5', 'Korhona1', '1142', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['6', 'Korhona2', '1912', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['7', 'Korhona2', '2212', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['8', 'Korhona1', '1912', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['9', 'Korhona1', '1131', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['10', 'Korhona2', '1232', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['11', 'Korhona2', '1121', 'a.kakharov@gmail.com', '+998934192077', actions],
    ['12', 'Korhona1', '2212', 'a.kakharov@gmail.com', '+998934192077', actions],
  ],
}

const DashBoardLists = () => {
  const tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    successColorShade = '#28dac6'

  return (
    <div className="p-3">
      <Row>
        <Col sm="12">
          <ChartjsBarChart
            successColorShade={successColorShade}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
          />
        </Col>
        <Col sm="12" className="p-4">
          <TestTableShouldBeDeleted dataForTable={dataForTable} />

          {/* <RoyhatTable /> */}
        </Col>
      </Row>
    </div>
  )
}
export default DashBoardLists
