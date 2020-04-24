import React from 'react'
import { useDispatch } from 'react-redux'
import { ReservationList } from '../components'
import { placingFetchList, placingDeleteAction } from '../actions'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import * as STATE from '../../../constants/stateNames'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import { fields } from '../../Partners/components/PartnersListFilterForm'

const getPlacinggDeleteParams = (onSuccess) => ({
  stateName: STATE.PLACING_DELETE,
  action: placingDeleteAction,
  onSuccess
})

const ReservationListContainer = props => {
  const data = useFetchList({
    action: placingFetchList,
    stateName: STATE.PLACING_LIST,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })
  const filterActions = useFilterActions({ fields })
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(placingFetchList())
  const deleteModal = useDelete(getPlacinggDeleteParams(onSuccess))
  return (
    <ReservationList
      filterActions={filterActions}
      deleteModal={deleteModal}
      {...data}
    />
  )
}

export default ReservationListContainer
