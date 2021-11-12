import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as STATE from '../../../constants/stateNames'
import { useFetchList, useFilterActions, useDelete } from '../../../hooks'
import AccountingContractList from '../components/AccountingContractList'
import { fields } from '../components/CommentListFilterForm'
import { applicationFetchList, applicationDeleteAction, applicationPaidAction } from '../actions'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

// Enhance
const enhance = compose(connect())

// Component
const AccountingContractListContainer = props => {
  // FetchList
  const list = useFetchList({
    action: applicationFetchList,
    stateName: STATE.REESTR_LIST,
    pickParams: [...DEFAULT_PICK_PARAMS, ...fields]
  })

  // Handlers
  const deleteAction = useDelete({
    action: applicationDeleteAction,
    stateName: STATE.REESTR_DELETE,
    successAction: applicationFetchList
  })

  // FilterActions
  const filterActions = useFilterActions({ fields })

  // Render
  return (
    <AccountingContractList
      list={list}
      filterActions={filterActions}
      onDelete={deleteAction.onSubmit}
      {...props}
    />
  )
}

export default enhance(AccountingContractListContainer)
