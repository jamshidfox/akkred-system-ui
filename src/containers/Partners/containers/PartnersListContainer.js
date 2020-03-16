import React from 'react'
import { useDispatch } from 'react-redux'

import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal } from '../../../hooks'
import { partnerFetchList, partnerCreateAction, partnerUpdateAction } from '../actions'
import PartnersList from '../components/PartnersList'
import { getSerializedData } from '../../../utils/get'
import { fields } from '../components'

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

const getPartnersUpdateParams = (onSuccess) => ({
  key: 'updatePartner',
  stateName: STATE.PARTNER_UPDATE,
  action: partnerUpdateAction,
  onSuccess
})

const PartnersListContainer = props => {
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(partnerFetchList())
  const list = useFetchList(getPartnersListParams())
  const editModal = useCreateModal(getPartnersUpdateParams(onSuccess))
  const createModal = useCreateModal(getPartnersCreateParams(onSuccess))
  return (
    <PartnersList
      list={list}
      createModal={createModal}
      editModal={editModal}

    />
  )
}

export default PartnersListContainer
