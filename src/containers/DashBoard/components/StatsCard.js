import React from 'react'
import classnames from 'classnames'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
// import Avatar from 'react-avatar'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '230',
      subtitle: 'Arizalar',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: '80',
      subtitle: 'Shartnoma',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: '120',
      subtitle: `Ro'yhatga olingan`,
      color: 'light-danger',
      icon: <Box size={24} />
    },
    // {
    //   title: '$9745',
    //   subtitle: 'Revenue',
    //   color: 'light-success',
    //   icon: <DollarSign size={24} />
    // }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
          <Col
            key={index}
            {...cols}
            className={classnames({
              [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
            })}
          >
            <Media>
              {/* <Avatar googleId="118096717852922241760" size="100" round={true} /> */}
              <Media className='my-auto' body>
                <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
              </Media>
            </Media>
          </Col>
      )
    })
  }

  return (
    <Card className='card-statistics p-1'>
      <CardBody className='statistics-body'>
        <div>
          <div>
            <CardTitle tag='h4'>Statistika</CardTitle>
            <CardText className='card-text font-small-2 mr-25 mb-0'>2022-01-06 dan 2022-01-29 gacha</CardText>
          </div>
        </div>
        <Row className='mt-3'>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
