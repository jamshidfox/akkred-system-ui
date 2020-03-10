import * as STATE from 'constants/stateNames'
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useFetchList, useCreateModal } from '../../hooks'
import { getSerializedData } from '../../utils/get'
import { buildingsFetchDetail, buildingsFetchDetailFloors, buldingFloorsUpdate, roomFetchList } from './actions'
import { BuildingDetail, floorFields } from './components'

const getBuildingDetailParams = (id) => ({
  mapper: () => (id),
  action: buildingsFetchDetail,
  stateName: STATE.BUILDING_DETAIL,
})
const getBuildingDetailFloorsParams = (id) => ({
  mapper: () => (id),
  action: buildingsFetchDetailFloors,
  stateName: STATE.BUILDING_DETAIL_FLOORS,
})
const getRoomListParams = () => ({
  action: roomFetchList,
  stateName: STATE.ROOM_LIST,
})
const buildingsFloorsUpdateParams = (onSuccess) => ({
  stateName: STATE.BUILDING_FLOORS_UPDATE,
  action: buldingFloorsUpdate,
  serializer: getSerializedData(floorFields),
  onSuccess
})

const BuildingDetailContainer = props => {
  const dispatch = useDispatch()
  const list = useFetchList(getBuildingDetailParams(props.match.params.id))
  const floorsList = useFetchList(getBuildingDetailFloorsParams(props.match.params.id))
  const roomsList = useFetchList(getRoomListParams())
  const onSuccess = () => dispatch(getBuildingDetailFloorsParams())

  const createModal = useCreateModal(buildingsFloorsUpdateParams(onSuccess))
  const initialValues = {}

  return (
    <BuildingDetail
      list={list}
      floorsList={floorsList}
      createModal={createModal}
      initialValues={initialValues}
      roomsList={roomsList}
    />
  )
}

BuildingDetailContainer.propTypes = {
  match: PropTypes.object
}

export default BuildingDetailContainer
