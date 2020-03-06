import * as STATE from 'constants/stateNames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useFetchList, useCreateModal, useModal } from '../../hooks'
import { getSerializedData } from '../../utils/get'
import { buildingCreateAction, buildingsFetchList, buildingDeleteAction } from './actions'
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

const getBuildingDeleteParams = (onSuccess) => ({
  stateName: STATE.BUILDING_DELETE,
  action: buildingDeleteAction,
  onSuccess
})

const BuildingsListContainer = props => {
  const dispatch = useDispatch()
  const list = useFetchList(getBuildingListParams())
  const onSuccess = () => dispatch(buildingsFetchList())

  const createModal = useCreateModal(getBuildingCreateParams(onSuccess))
  const deleteModal = useModal(getBuildingDeleteParams(onSuccess))
  const initialValues = { floors: [''] }
  const deleteBuilding = id => {
    return dispatch(buildingDeleteAction(id))
      .then(onSuccess)
  }

  return (
    <BuildingsList
      list={list}
      createModal={createModal}
      initialValues={initialValues}
      deleteModal={deleteModal}
      deleteBuilding={deleteBuilding}
    />
  )
}

export default BuildingsListContainer
