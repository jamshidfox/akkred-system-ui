import React from 'react'
import { Row, Col, Badge, DropdownItem } from 'reactstrap'
import ChartjsLineChart from '../components/ChartjsLineChart'
import TableBasic from '../components/Tables/DashBoardTable'
import TestTablShouldBeDeleted from '../components/Tables/just-test-table'
import { Edit, Trash } from 'react-feather'
import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const DashboardContainer = (props) => {
  const notify = (e) => {
    e.preventDefault()
    toast(`Malumot ochirildi`)
  }
  const actions = (
    <div className="d-flex justify-content-start">
      <DropdownItem href="/" onClick={notify}>
        <Trash className="mr-50" size={15} />
        <ToastContainer />
      </DropdownItem>
      <DropdownItem href="/" onClick={notify}>
        <Edit className="mr-50" size={15} />
      </DropdownItem>
    </div>
  )
  const clientStatus = (type) => {
    switch (type) {
      case 'Active':
        return (
          <Badge pill color="ligt-success" className="mr-1 bg-info text-light">
            Aktiv
          </Badge>
        )
      case 'Yakulandi':
        return (
          <Badge pill color="light-success" className="mr-1 bg-success">
            Yakulandi
          </Badge>
        )
      case 'Rejalashtirilgan':
        return (
          <Badge pill color="light-info" className="mr-1 bg-warning">
            Rejalashtirilgan
          </Badge>
        )
      default:
        return (
          <Badge pill color="danger" className="mr-1 bg-success">
            Nomalum
          </Badge>
        )
    }
  }

  const dataForTable = {
    tableHeader: ['Arizalar', 'Korhona nomi', 'Elektron manzil', 'Telefon', 'Statusi', 'Haraktlar'],
    tableBody: [
      [
        'Ariza1',
        'Korhona1',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Active'),
        actions,
      ],
      [
        'Ariza2',
        'Korhona2',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Yakulandi'),
        actions,
      ],
      [
        'Ariza2',
        'Korhona2',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Rejalashtirilgan'),
        actions,
      ],
      [
        'Ariza1',
        'Korhona1',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Active'),
        actions,
      ],
      [
        'Ariza1',
        'Korhona1',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Active'),
        actions,
      ],
      [
        'Ariza2',
        'Korhona2',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Yakulandi'),
        actions,
      ],
      [
        'Ariza2',
        'Korhona2',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Rejalashtirilgan'),
        actions,
      ],
      [
        'Ariza1',
        'Korhona1',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Active'),
        actions,
      ],
      [
        'Ariza1',
        'Korhona1',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Active'),
        actions,
      ],
      [
        'Ariza2',
        'Korhona2',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Yakulandi'),
        actions,
      ],
      [
        'Ariza2',
        'Korhona2',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Rejalashtirilgan'),
        actions,
      ],
      [
        'Ariza1',
        'Korhona1',
        'a.kakharov@gmail.com',
        '+998934192077',
        clientStatus('Active'),
        actions,
      ],
    ],
  }

  return (
    <div className="p-3">
      <Row>
        <Col sm="12">
          <ChartjsLineChart />
        </Col>
        <Col sm="12" className="p-4">
          {/* <TableBasic /> */}
          <TestTablShouldBeDeleted dataForTable={dataForTable} />
        </Col>
      </Row>
    </div>
  )
}

export default DashboardContainer
