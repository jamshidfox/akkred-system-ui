import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { head, prop, union, pipe, map, fromPairs, toPairs } from 'ramda'
import * as STATE from '../../constants/stateNames'
import { getParamFromHistory } from '../../utils/get'
import { useFetchList } from '../../hooks'
import { replaceParamsRoute } from '../../utils/route'
import Requisites from './components/Requisites'
import { requisitesUpdateAction, clientInfoFetchList } from './actions'

const getHotelListParams = () => ({
  action: clientInfoFetchList,
  stateName: STATE.CLIENT_INFO_LIST
})

const getInitialValues = (data) => {
  return ({
    document_date: prop('documentDate', data),
    title_object: prop('titleObject', data),
    address : prop('address', data),
    email: prop('email', data),
    mfo: prop('mfo', data),
    site: prop('site', data),
    fax: prop('fax', data),
    oked: prop('oked', data),
    nds_reg_id : prop('ndsRegId', data),
    swift : prop('swift', data),
    phone_number : prop('phoneNumber', data),
    full_name : prop('fullName', data),
    inn : prop('inn', data),
    legal_name : prop('legalName', data),
    payment_account : prop('paymentAccount', data),
    full_name_organ : prop('fullNameOrgan', data),
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
      title : prop('title', data),
      document_date : prop('document_date', data),
      title_object : prop('title_object', data),
      address: prop('address', data),
      full_name_organ: prop('full_name_organ', data),
      email: prop('email', initialValues),
      mfo: prop('mfo', data),
      site: prop('site', data),
      fax: prop('fax', data),
      oked: prop('oked', data),
      nds_reg_id : prop('nds_reg_id', data),
      swift : prop('swift', data),
      phone_number : prop('phone_number', data),
      full_name : prop('full_name', data),
      inn : prop('inn', data),
      legal_name : prop('legal_name', data),
      payment_account : prop('payment_account', data),

    }
    return dispatch(requisitesUpdateAction(prop('id', hotel), result))
      .then(() => replaceParamsRoute({ [EDIT]: false }, history))
      .then(() => dispatch(clientInfoFetchList()))
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
