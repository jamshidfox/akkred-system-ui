import React from 'react'
import StatsCard from '../components/StatsCard'
import CardMedal from '../components/CardMedal'
import SimplePieChart from '../components/PieChart'
import GoalOverview from '../components/GoalOverview'
import FileterDateFrom from '../components/data-picker/FromTimeFlatpiicker'
import FileterDateTo from '../components/data-picker/ToTimeFlatpicker'
import { Row, Col } from 'reactstrap'

const Dashboard = () => {
  const donut = {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
  }

  const dataForTable = {
    tableHeader: ['No', 'Korhona nomi', 'Elektron manzil', 'Telefon', 'Narxi'],
    tableBody: [
      ['1', 'Korhona1', 'a.kakharov@gmail.com', '+998934192077', '450$'],
      ['2', 'Korhona2', 'a.kakharov@gmail.com', '+998934192077', '450$'],
      ['3', 'Korhona3', 'a.kakharov@gmail.com', '+998934192077', '450$'],
      ['4', 'Korhona4', 'a.kakharov@gmail.com', '+998934192077', '450$'],
      ['5', 'Korhona5', 'a.kakharov@gmail.com', '+998934192077', '450$'],
    ],
  }

  return (
    <div className="m-4">
      <Row>
        <Col xl="5">
          <FileterDateFrom />
        </Col>
        <Col xl="1" className="d-flex align-items-center justify-content-center">
          Dan
        </Col>
        <Col xl="5">
          <FileterDateTo />
        </Col>
        <Col xl="1" className="d-flex align-items-center justify-content-center">
          Gacha
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xl="4" className="">
          <CardMedal />
        </Col>
        <Col xl="8" className="">
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xl="6" lg="12">
          <SimplePieChart
            series1={donut.series1}
            series2={donut.series2}
            series3={donut.series3}
            series5={donut.series5}
          />
        </Col>
        <Col xl="6" lg="12">
          <GoalOverview success={'green'} title="Arizalar" />
        </Col>
      </Row>
    </div>
  )
}
export default Dashboard
