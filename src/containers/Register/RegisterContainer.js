import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { head, prop, union, isEmpty, pipe, flatten, map, fromPairs, toPairs, values, propOr } from 'ramda'
import * as STATE from '../../constants/stateNames'
import { useCreate, useFetchList, useModal } from '../../hooks'
import { getSerializedData, getParamFromHistory } from '../../utils/get'
import { replaceParamsRoute } from '../../utils/route'
import Register, { fields } from './components/Register'
import { hotelCreateAction, hotelFetchList, hotelUpdateAction } from './actions'
import getAttractionTypes from './getAttractionTypes'

const EDIT = 'edit'
const serializer = (val) => {
  const services = pipe(
    values,
    flatten,
    map(prop('id'))
  )(val.services)

  const attractions = pipe(
    propOr({}, 'attractionTypes'),
    values,
    flatten,
    map(prop('id'))
  )(val)

  return {
    ...getSerializedData(fields, val),
    attractions,
    services: services,
    currencies: []
  }
}

const getHotelCreateParams = () => ({
  action: hotelCreateAction,
  stateName: STATE.HOTEL_CREATE,
  redirectUrl: '/',
  serializer: serializer
})

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
  const attractions = propOr([], 'attractions', data)
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
    services,
    attractionTypes: getAttractionTypes(attractions)
  })
}
const toBoolean = v => v === 'true' || v === true
const RegisterContainer = props => {
  const dispatch = useDispatch()
  const { history } = props
  const data = useCreate(getHotelCreateParams())
  const serviceModal = useModal({ key: 'services' })
  const attractionsModal = useModal({ key: 'attractions' })
  const { results, data: d, ...hotelData } = useFetchList(getHotelListParams())
  const hotel = head(results)

  const onEditOpen = () => replaceParamsRoute({ [EDIT]: true }, history)
  const onEdit = data => {
    return dispatch(hotelUpdateAction(prop('id', hotel), serializer(data)))
      .then(() => replaceParamsRoute({ [EDIT]: false }, history))
      .then(() => dispatch(hotelFetchList()))
  }

  const isEdit = toBoolean(getParamFromHistory(EDIT, history))
  const initialValues = getInitialValues(hotel)

  const isCreated = !isEmpty(results)
  const editData = {
    isEdit,
    onEdit: onEditOpen,
    onSubmit: onEdit
  }
  return (
    <Register
      {...data}
      editData={editData}
      isCreated={isCreated}
      hotelData={{ ...hotelData, data: hotel, initialValues }}
      serviceModal={serviceModal}
      attractionsModal={attractionsModal}
    />
  )
}
RegisterContainer.propTypes = {
  history: PropTypes.object
}
export default RegisterContainer
