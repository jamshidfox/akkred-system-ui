import * as STATE from 'constants/stateNames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useFetchList, useCreateModal } from '../../hooks'
import { getSerializedData } from '../../utils/get'
import { buildingCreateAction, buildingsFetchList } from './actions'
import { BuildingsList, fields } from './components'

const getBuildingListParams = () => ({
  action: buildingsFetchList,
  stateName: STATE.BUILDING_LIST,
})

const getBuildingCreateParams = (onSuccess) => ({
  stateName: STATE.BUILDING_CREATE,
  action: buildingCreateAction,
  serializer: getSerializedData(fields),
  onSuccess
})

const BuildingsListContainer = props => {
  const dispatch = useDispatch()
  const list = useFetchList(getBuildingListParams())
  const onSuccess = () => dispatch(buildingsFetchList())
  const createModal = useCreateModal(getBuildingCreateParams(onSuccess))
  const initialValues = { floors: [''] }
  return (
    <BuildingsList
      list={list}
      createModal={createModal}
      initialValues={initialValues}
    />
  )
}

export default BuildingsListContainer
