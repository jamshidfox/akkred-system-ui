import React from 'react'
import { useDispatch } from 'react-redux'

import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal } from '../../../hooks'
import { roleFetchList, roleCreateAction, roleUpdateAction ,groupFetchList} from '../actions'
import RolesList from '../components/RolesList'
import { getSerializedData } from '../../../utils/get'
import { fields } from '../components'

const getRolesListParams = () => ({
  action: roleFetchList,
  stateName: STATE.ROLE_LIST,
})

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
  onSuccess
})

const RolesListContainer = props => {
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(roleFetchList())
  const list = useFetchList(getRolesListParams())
  const groupList = useFetchList(getGroupListParams())
  const editModal = useCreateModal(getRoleUpdateParams(onSuccess))
  const createModal = useCreateModal(getRoleCreateParams(onSuccess))
  return (
    <RolesList
      list={list}
      createModal={createModal}
      editModal={editModal}
      groupList={groupList}

    />
  )
}

export default RolesListContainer
