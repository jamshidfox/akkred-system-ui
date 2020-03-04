import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { head, prop, union, pipe, map, fromPairs, toPairs } from 'ramda'
import * as STATE from '../../constants/stateNames'
import { getParamFromHistory } from '../../utils/get'
import { useFetchList } from '../../hooks'
import { replaceParamsRoute } from '../../utils/route'
import { hotelFetchList } from '../Register/actions'
import Requisites from './components/Requisites'
import { RequisitesUpdateAction } from './actions'

const getHotelListParams = () => ({
  action: hotelFetchList,
  stateName: STATE.HOTEL_LIST
})

const KEY = 0
const VALUE = 1
const mapIndexKey = (arr) => {
  const key = '_' + arr[KEY]
  return [key, arr[VALUE]]
}
const getInitialValues = (data) => {
  const services = pipe(prop('services'), toPairs, map(mapIndexKey), fromPairs)(data)

  return ({
    hotelType: prop('hotelType', data),
    additionalPhoneNumber: prop('additionalPhoneNumber', data),
    address: prop('address', data),
    email: prop('email', data),
    title: prop('title', data),
    phoneNumber: prop('phoneNumber', data),
    point: prop('point', data),
    leaveTime: prop('leaveTime', data),
    entranceTime: prop('entranceTime', data),
    photos: union(prop('photos', data), [{}]),
    legal_name: prop('legalName', data),
    payment_account: prop('paymentAccount', data),
    mfo: prop('mfo', data),
    inn: prop('inn', data),
    oked: prop('oked', data),
    nds_reg_id : prop('ndsRegId', data),
    swift : prop('swift', data),
    paymentTypes: prop('paymentTypes', data),
    services
  })
}

const EDIT = 'edit'
const toBoolean = v => v === 'true' || v === true
const RequisitesContainer = props => {
  const dispatch = useDispatch()
  const { history } = props
  const { results, data: d, ...hotelData } = useFetchList(getHotelListParams())
  const hotel = head(results)
  const initialValues = getInitialValues(hotel)

  const onEditOpen = () => replaceParamsRoute({ [EDIT]: true }, history)

  const onEdit = data => {
    const result = {
      entrance_time: prop('entranceTime', initialValues),
      hotel_type: initialValues.hotelType ? initialValues.hotelType.id : '',
      leave_time: prop('leaveTime', initialValues),
      title: prop('title', initialValues),
      point: prop('point', initialValues),
      address: prop('address', initialValues),
      phone_number: prop('phoneNumber', initialValues),
      additional_phone_number: prop('additionalPhoneNumber', initialValues),
      initialValues_type: prop('initialValues_type', initialValues),
      currencies: initialValues.currencies ? initialValues.currencies : [],
      services: prop('services', initialValues),
      legal_name: prop('legal_name', data),
      payment_account: prop('payment_account', data),
      mfo: prop('mfo', data),
      inn: prop('inn', data),
      oked: prop('oked', data),
      nds_reg_id : prop('nds_reg_id ', data),
      paymentTypes: prop('paymentTypes', data),
    }
    return dispatch(RequisitesUpdateAction(prop('id', hotel), result))
      .then(() => replaceParamsRoute({ [EDIT]: false }, history))
      .then(() => dispatch(hotelFetchList()))
  }

  const isEdit = toBoolean(getParamFromHistory(EDIT, history))
  const editData = {
    isEdit,
    onEdit: onEditOpen,
    onSubmit: onEdit
  }
  return (
    <Requisites
      hotelData={{ ...hotelData, data: hotel, initialValues }}
      editData={editData}
    />
  )
}
RequisitesContainer.propTypes = {
  history: PropTypes.object
}
export default RequisitesContainer
