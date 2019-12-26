import React from 'react'
import { path, prop } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { RatesCreate, fields } from '../components'
import { ratesCreateAction } from '../actions'

const serializer = (val) => {
  const fromTime = prop('fromTime', val)
  const fromDate = prop('fromDate', val)
  const fromDateTime = ''.concat(fromDate, ' ', fromTime)

  const toTime = prop('toTime', val)
  const toDate = prop('toDate', val)
  const toDateTime = ''.concat(toDate, ' ', toTime)
  return {
    ...getSerializedData(fields, val),
    from_date:fromDateTime,
    to_date:toDateTime
  }
}

const getRatesCreateParams = () => ({
  stateName: STATE.RATES_CREATE,
  action: ratesCreateAction,
  serializer: serializer
  // redirectUrl: ROUTES.RATES_LIST_URL
})
const RatesCreateContainer = props => {
  const create = useCreate(getRatesCreateParams())
  return (
    <RatesCreate
      {...create}
    />
  )
}

export default RatesCreateContainer
