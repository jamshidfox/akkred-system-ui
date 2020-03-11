import * as STATE from 'constants/stateNames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useFetchList, useCreateModal, useModal } from '../../hooks'
import { getSerializedData } from '../../utils/get'
import { 
  buildingCreateAction,
  buildingsFetchList,
  buildingDeleteAction,
  buildingUpdateAction
} from './actions'
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

const getBuildingDeleteParams = (id, onSuccess) => ({
  mapper: () => (id),
  stateName: STATE.BUILDING_DELETE,
  action: buildingDeleteAction,
  onSuccess
})

const buildingUpdateActionParams = (id, onSuccess) => ({
  key: 'updateBuild',
  mapper: () => (id),
  stateName: STATE.BUILDING_UPDATE,
  action: buildingUpdateAction,
  onSuccess
})

const BuildingsListContainer = props => {
  const dispatch = useDispatch()
  const list = useFetchList(getBuildingListParams())
  const onSuccess = () => dispatch(buildingsFetchList())
  const createModal = useCreateModal(getBuildingCreateParams(onSuccess))
  const deleteModal = useModal(getBuildingDeleteParams(onSuccess))
  const editModal = useCreateModal(buildingUpdateActionParams(onSuccess))
  const deleteBuilding = id => {
    return dispatch(buildingDeleteAction(id))
      .then(onSuccess)
  }

  return (
    <BuildingsList
      list={list}
      createModal={createModal}
      deleteModal={deleteModal}
      deleteBuilding={deleteBuilding}
      editModal={editModal}
    />
  )
}

export default BuildingsListContainer
