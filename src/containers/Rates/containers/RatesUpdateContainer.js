import React from 'react'
import {
  path,
  pathOr,
  prop,
  propOr
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
  getFirstProp,
  isEmptyAddObject,
  formulateRates,
  formulatePartnerRates
} from './serializer'
import { ratesPartnerCreateAction } from '~/containers/Rates/actions'

const EMPTY_ARR = []
const RatesUpdateContainer = props => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { data } = useFetchItem({
    action: ratesFetchItem,
    stateName: STATE.RATES_ITEM,
  })

  const categoryData = useFetchList({
    action: roomCategoryCapacityList,
    stateName: STATE.ROOM_CATEGORY_CAPACITY_LIST
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

  const list = propOr(EMPTY_ARR, 'results', categoryData)
  const rates = propOr(EMPTY_ARR, 'rates', data)

  const initialValues = { ...data, rates: formulateRates(list, rates) }

  const agentInit = isEmptyAddObject(pathOr(EMPTY_ARR, ['agent'], data))
  const tourInit = isEmptyAddObject(pathOr(EMPTY_ARR, ['tour'], data))
  const companyInit = isEmptyAddObject(pathOr(EMPTY_ARR, ['company'], data))

  const totalInits = {
    agent: {
      nds: getFirstProp('nds', agentInit),
      touristTax: getFirstProp('touristTax', agentInit),
      partnerRates: formulatePartnerRates(agentInit, list)
    },
    tour: {
      nds: getFirstProp('nds', tourInit),
      touristTax: getFirstProp('touristTax', tourInit),
      partnerRates: formulatePartnerRates(tourInit, list)
    },
    company: {
      nds: getFirstProp('nds', companyInit),
      touristTax: getFirstProp('touristTax', companyInit),
      partnerRates: formulatePartnerRates(companyInit, list)
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
