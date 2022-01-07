import React from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap'
import medal from '../../../icons/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal p-1'>
      <CardBody>
        <div className='d-flex justify-content-between'>
          <div>
            <h5>Tabriklaymiz 🎉!</h5>
            <CardText className='font-small-3'>Bu oy plan Bajarildi</CardText>
            <h4 className='mb-75 mt-2 pt-50'>
            <a href='/' onClick={e => e.preventDefault()}>
              $48.9k
            </a>
          </h4>
          </div>
          <img className='congratulation-medal' src={medal} alt='Medal Pic' />
        </div>
        {/* <Button color='primary'>View Sales</Button> */}
      </CardBody>
    </Card>
  )
}

export default CardMedal
