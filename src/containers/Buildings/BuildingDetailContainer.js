import * as STATE from 'constants/stateNames'
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useFetchList, useCreateModal, useDelete } from '../../hooks'
import { getSerializedData } from '../../utils/get'
import {
  buildingsFetchDetail,
  buildingsFetchDetailFloors,
  buildingFloorsUpdate,
  roomFetchList,
  buildingFloorsCreate,
  floorDeleteAction
} from './actions'
import { BuildingDetail, floorFields, floorCreateFields } from './components'

const getBuildingDetailParams = (id) => ({
  mapper: () => (id),
  action: buildingsFetchDetail,
  stateName: STATE.BUILDING_DETAIL,
})
const getBuildingDetailFloorsParams = (id) => ({
  mapper: () => (id),
  action: buildingsFetchDetailFloors,
  stateName: STATE.BUILDING_FLOORS_DETAIL,
})
const getRoomListParams = () => ({
  action: roomFetchList,
  stateName: STATE.ROOM_LIST,

})

const updateSerializer = (values) => {
  const { id, ...data } = getSerializedData(floorFields, values)
  return [id, data]
}
const buildingsFloorsUpdateParams = (onSuccess) => ({
  key: 'updateModal',
  stateName: STATE.BUILDING_FLOORS_UPDATE,
  action: buildingFloorsUpdate,
  serializer: updateSerializer,
  onSuccess
})
const buildingsFloorsCreateParams = (onSuccess) => ({
  stateName: STATE.BUILDING_FLOORS_CREATE,
  action: buildingFloorsCreate,
  serializer: getSerializedData(floorCreateFields),
  onSuccess
})

const getFloorsDeleteParams = (onSuccess) => ({
  stateName: STATE.BUILDING_DELETE,
  action: floorDeleteAction,
  onSuccess
})

const BuildingDetailContainer = props => {
  const dispatch = useDispatch()
  const list = useFetchList(getBuildingDetailParams(props.match.params.id))
  const floorsList = useFetchList(getBuildingDetailFloorsParams(props.match.params.id))
  const roomsList = useFetchList(getRoomListParams())
  const onSuccess = () => dispatch(buildingsFetchDetailFloors(props.match.params.id))

  const updateModal = useCreateModal(buildingsFloorsUpdateParams(onSuccess))
  const createModal = useCreateModal(buildingsFloorsCreateParams(onSuccess))
  const deleteModal = useDelete(getFloorsDeleteParams(onSuccess))
  const initialValues = {}

  return (
    <BuildingDetail
      list={list}
      floorsList={floorsList}
      updateModal={updateModal}
      createModal={createModal}
      deleteModal={deleteModal}
      initialValues={initialValues}
      roomsList={roomsList}
    />
  )
}

BuildingDetailContainer.propTypes = {
  match: PropTypes.object
}

export default BuildingDetailContainer
