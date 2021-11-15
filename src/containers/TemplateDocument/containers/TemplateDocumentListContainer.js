import React from 'react'
import { compose } from 'redux'
import { connect, useDispatch } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import { templateDocumentFetchList, templateDocumentDeleteAction } from '../actions'
import TemplateDocumentList from '../components/TemplateDocumentList'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'
import { fields } from '../../Employees/components/EmployeesListFilterForm'
// Enhance
const enhance = compose(connect())
const getRoomListParams = () => ({
  action: templateDocumentFetchList,
  stateName: STATE.TEMPLATE_DOCUMENT_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
})

// const getBuildingDeleteParams = (onSuccess) => ({
//   stateName: STATE.BUILDING_DELETE,
//   action: templateDocumentDeleteAction,
//   onSuccess
// })

const TemplateDocumentListContainer = props => {
  const dispatch = useDispatch()
  const list = useFetchList(getRoomListParams())
  const filterActions = useFilterActions({ fields })
  const onSuccess = () => dispatch(templateDocumentFetchList())
  // const deleteModal = useDelete(getBuildingDeleteParams(onSuccess))
  return (
    <TemplateDocumentList
      list={list}
      filterActions={filterActions}
      {...props}
      // deleteModal={deleteModal}
    />
  )
}

export default enhance(TemplateDocumentListContainer)
