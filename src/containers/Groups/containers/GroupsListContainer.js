import React from 'react'
import { useDispatch } from 'react-redux'

import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal, useDelete } from '../../../hooks'
import { roleFetchList, roleCreateAction, roleUpdateAction, groupFetchList, roleDeleteAction } from '../actions'
import GroupsList from '../components/GroupsList'
import { getSerializedData } from '../../../utils/get'
import { fields } from '../components'

const getRolesListParams = () => ({
  action: roleFetchList,
  stateName: STATE.GROUP_LIST,
})

// const updateSerializer = (values) => {
//   const { id, ...data } = getSerializedData(rolefields, values)
//   return [id, data]
// }

const getGroupListParams = () => ({
  action: groupFetchList,
  stateName: STATE.PERMISSION_LIST,
})

const getRoleCreateParams = (onSuccess) => ({
  stateName: STATE.GROUP_CREATE,
  action: roleCreateAction,
  serializer: getSerializedData(fields),
  onSuccess
})

const getRoleUpdateParams = (onSuccess) => ({
  key: 'groupUpdate',
  stateName: STATE.GROUP_UPDATE,
  action: roleUpdateAction,
  // serializer:updateSerializer,
  onSuccess
})

const getRoomDeleteParams = (onSuccess) => ({
  stateName: STATE.ROOM_DELETE,
  action: roleDeleteAction,
  onSuccess
})

const GroupsListContainer = props => {
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(roleFetchList())
  const list = useFetchList(getRolesListParams())
  const groupList = useFetchList(getGroupListParams())
  const editModal = useCreateModal(getRoleUpdateParams(onSuccess))
  const createModal = useCreateModal(getRoleCreateParams(onSuccess))
  const deleteModal = useDelete(getRoomDeleteParams(onSuccess))
  return (
    <GroupsList
      list={list}
      createModal={createModal}
      editModal={editModal}
      groupList={groupList}
      deleteModal={deleteModal}
    />
  )
}

export default GroupsListContainer
