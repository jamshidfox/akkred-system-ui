import React from 'react'
import useFetchList from '../../hooks/useFetchList'
import { hotelListFetch } from './actions'

const Example = props => {
  const hotelData = useFetchList({ props, action: hotelListFetch, stateName: 'hotelList' })
  return (
    <div>
    dsds
    </div>
  )
}

export default Example
