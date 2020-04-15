import React from 'react'
import {
  path,
  prop,
  propOr,
  range,
  find,

} from 'ramda'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as STATE from '../../../constants/stateNames'

import { useUpdate, useFetchItem, useFetchList } from '../../../hooks'

import { RatesCreate } from '../components'
import { ratesUpdateAction, ratesFetchItem, roomCategoryCapacityList } from '../actions'
import {
  serializer,
  partnerSerializer,
  capCatergoryEq,
  getFirstProp,
  isEmptyAddObject
} from './serializer'
import { ratesPartnerCreateAction } from '~/containers/Rates/actions'

const ONE = 1

const getRatestItemParams = () => ({
  action: ratesFetchItem,
  stateName: STATE.RATES_ITEM,
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

  const initialValues = { ...data, rates: initialRates }

  const agentInit = isEmptyAddObject(path(['agent'], data))
  const tourInit = isEmptyAddObject(path(['tour'], data))
  const companyInit = isEmptyAddObject(path(['company'], data))

  const totalInits = {
    agent: {
      nds: getFirstProp('nds', agentInit),
      touristTax: getFirstProp('touristTax', agentInit),
      partnerRates: agentInit
    },
    tour: {
      nds: getFirstProp('nds', tourInit),
      touristTax: getFirstProp('touristTax', tourInit),
      partnerRates: tourInit
    },
    company: {
      nds: getFirstProp('nds', companyInit),
      touristTax: getFirstProp('touristTax', companyInit),
      partnerRates: companyInit
    }
  }

  return (
    <RatesCreate
      categoryData={categoryData}
      {...updateData}
      initialValues={initialValues}
      companyCreateData={companyCreateData}
      totalInits={totalInits}
    />
  )
}

export default RatesUpdateContainer
