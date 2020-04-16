import React from 'react'
import { ReservationList } from '../components'
import { placingFetchList } from '../actions'
import { useFetchList, useFilterActions } from '../../../hooks'
import * as STATE from '../../../constants/stateNames'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import { fields } from '../../Partners/components/PartnersListFilterForm'

const ReservationListContainer = props => {
  const data = useFetchList({
    action: placingFetchList,
    stateName: STATE.PLACING_LIST,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })
  const filterActions = useFilterActions({ fields })
  return (
    <ReservationList {...data} filterActions={filterActions} />
  )
}

export default ReservationListContainer
