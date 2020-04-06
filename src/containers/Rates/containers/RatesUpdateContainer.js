import React from 'react'
import {
  flatten,
  path,
  pipe,
  prop,
  map,
  propOr,
  range,
  find,
  curry,
  equals
} from 'ramda'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as STATE from '../../../constants/stateNames'

import { useUpdate, useFetchItem, useFetchList } from '../../../hooks'

import { RatesCreate } from '../components'
import { ratesUpdateAction, ratesFetchItem, roomCategoryCapacityList } from '../actions'
import toSnakeCase from '~/utils/toSnakeCase'
import { ratesPartnerCreateAction } from '~/containers/Rates/actions'
import { getSerializedData } from '~/utils/get'

const ONE = 1
const getRatestItemParams = () => ({
  action: ratesFetchItem,
  stateName: STATE.RATES_ITEM,
})

const serializer = (val) => {
  const rates = pipe(prop('rates'), flatten, map(toSnakeCase))(val)
  return {
    ...toSnakeCase(val),
    rates
  }
}

const partnerSerializer = (values) => {
  console.warn('Val: ', values)
  const touristTax = prop('touristTax', values)
  const nds = prop('nds', values)
  const data = pipe(prop('priceList'), map(price => (toSnakeCase({
    ...getSerializedData(['discountType', 'partners', 'discountPrice', 'rates', 'partnerType'], price),
    touristTax,
    nds,
    individualRates: pipe(prop('individualRates'), flatten, map(toSnakeCase))(price)

  }))))(values)

  console.warn(data)
  return data
}

const capCatergoryEq = curry((data, item) => {
  const capacity = item.capacity
  const hotelRoomCategory = path(['hotelRoomCategory', 'id'], item)
  return equals(data, { capacity, hotelRoomCategory })
})
const RatesUpdateContainer = props => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data } = useFetchItem(getRatestItemParams())

  const categoryData = useFetchList({
    action: roomCategoryCapacityList,
    stateName: STATE.ROOM_CATEGORY_CAPACITY_LIST
  })

  const list = prop('results', categoryData)
  const rates = propOr([], 'rates', data)

  const initialRates = list.map(category => {
    const capacity = path(['capacity'], category)
    const id = path(['id'], category)
    const TO = capacity + ONE

    return range(ONE, TO).map(cap => {
      const rateFeatures = { capacity: cap, hotelRoomCategory: id }
      const rate = find(capCatergoryEq(rateFeatures))(rates)

      return {
        ...rate,
        id: undefined,
        capacity: cap,
        hotelRoomCategory: id,

      }
    })
  })
  const initialValues = { ...data, rates: initialRates }
  const updateData = useUpdate({
    stateName: STATE.RATES_UPDATE,
    action: ratesUpdateAction,
    serializer: serializer,
    onSuccess: () => dispatch(ratesFetchItem(id))
  })

  const companyCreateData = useUpdate({
    stateName: STATE.RATES_PARTNER_CREATE,
    action: ratesPartnerCreateAction,
    serializer: partnerSerializer,
    onSuccess: () => dispatch(ratesFetchItem(id))
  })

  return (
    <RatesCreate
      categoryData={categoryData}
      {...updateData}
      initialValues={initialValues}
      companyCreateData={companyCreateData}
    />
  )
}

export default RatesUpdateContainer
