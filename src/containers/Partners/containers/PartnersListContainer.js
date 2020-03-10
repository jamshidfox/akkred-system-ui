import React from 'react'
import { useDispatch } from 'react-redux'

import { prop, path } from 'ramda'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal, useFetchItem, useUpdate } from '../../../hooks'
import { partnerFetchList, partnerCreateAction, partnerUpdateAction, partnerFetchItem } from '../actions'
import PartnersList from '../components/PartnersList'
import { getSerializedData } from '../../../utils/get'
import { fields } from '../components'
import * as ROUTES from '../../../constants/routes'

const getPartnersListParams = () => ({
  action: partnerFetchList,
  stateName: STATE.PARTNER_LIST,
})

const getPartnersCreateParams = (onSuccess) => ({
  stateName: STATE.PARTNER_CREATE,
  action: partnerCreateAction,
  serializer: getSerializedData(fields),
  onSuccess
})

// const getPartnersItemParams = () => ({
//   action: partnerFetchItem,
//   stateName: STATE.PARTNER_ITEM,
// })

const getPartnersUpdateParams = () => ({
  stateName: STATE.PARTNER_UPDATE,
  action: partnerUpdateAction,
  serializer: getSerializedData(fields),
  redirectUrl: ROUTES.PARTNERS_LIST_URL
})

const getInitialValues = (data) => {
  return ({
    type: prop('type', data),
    title: prop('title', data),
    legalName: prop('legalName', data),
    phoneNumber: prop('phoneNumber', data),
    email: prop('email', data),
    fax: prop('fax', data),
    contract: path(['contract', 'id'], data),
  })
}

const PartnersListContainer = props => {
  // const { data } = useFetchItem(getPartnersItemParams())
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(partnerFetchList())
  const list = useFetchList(getPartnersListParams())
  // const initialValues = getInitialValues(data)
  // const updateData = useUpdate(getPartnersUpdateParams())
  const createModal = useCreateModal(getPartnersCreateParams(onSuccess))
  return (
    <PartnersList
      list={list}
      createModal={createModal}

    />
  )
}

export default PartnersListContainer
