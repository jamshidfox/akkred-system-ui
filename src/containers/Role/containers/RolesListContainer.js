import React from 'react'
import { useDispatch } from 'react-redux'

import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal, useDelete } from '../../../hooks'
import { roleFetchList, roleCreateAction, roleUpdateAction, groupFetchList, roleDeleteAction } from '../actions'
import RolesList from '../components/RolesList'
import { getSerializedData } from '../../../utils/get'
import { fields } from '../components'

const getRolesListParams = () => ({
  action: roleFetchList,
  stateName: STATE.ROLE_LIST,
})

// const updateSerializer = (values) => {
//   const { id, ...data } = getSerializedData(rolefields, values)
//   return [id, data]
// }

const getGroupListParams = () => ({
  action: groupFetchList,
  stateName: STATE.GROUP_LIST,
})

const getRoleCreateParams = (onSuccess) => ({
  stateName: STATE.ROLE_CREATE,
  action: roleCreateAction,
  serializer: getSerializedData(fields),
  onSuccess
})

const getRoleUpdateParams = (onSuccess) => ({
  key: 'updateRole',
  stateName: STATE.ROLE_UPDATE,
  action: roleUpdateAction,
  // serializer:updateSerializer,
  onSuccess
})

const getRoomDeleteParams = (onSuccess) => ({
  stateName: STATE.ROOM_DELETE,
  action: roleDeleteAction,
  onSuccess
})

const RolesListContainer = props => {
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(roleFetchList())
  const list = useFetchList(getRolesListParams())
  const groupList = useFetchList(getGroupListParams())
  const editModal = useCreateModal(getRoleUpdateParams(onSuccess))
  const createModal = useCreateModal(getRoleCreateParams(onSuccess))
  const deleteModal = useDelete(getRoomDeleteParams(onSuccess))
  return (
    <RolesList
      list={list}
      createModal={createModal}
      editModal={editModal}
      groupList={groupList}
      deleteModal={deleteModal}
    />
  )
}

export default RolesListContainer
