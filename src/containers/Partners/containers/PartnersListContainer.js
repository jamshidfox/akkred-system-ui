import React from 'react'
import { useDispatch } from 'react-redux'

import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal, useFilterActions } from '../../../hooks'
import { partnerFetchList, partnerCreateAction, partnerUpdateAction } from '../actions'
import PartnersList from '../components/PartnersList'
import { getSerializedData } from '../../../utils/get'
import { fields as field } from '../components'
import { fields } from '../components/PartnersListFilterForm'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

const getPartnersListParams = () => ({
  action: partnerFetchList,
  stateName: STATE.PARTNER_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

const getPartnersCreateParams = (onSuccess) => ({
  stateName: STATE.PARTNER_CREATE,
  action: partnerCreateAction,
  serializer: getSerializedData(field),
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
  const filterActions = useFilterActions({ fields })
  return (
    <PartnersList
      list={list}
      createModal={createModal}
      editModal={editModal}
      filterActions={filterActions}

    />
  )
}

export default PartnersListContainer
