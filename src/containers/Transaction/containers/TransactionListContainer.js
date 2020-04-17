import React from 'react'
import { prop } from 'ramda'
import { useDispatch } from 'react-redux'
import { transactionFetchList, transactionCreateAction } from '../actions'
import TransactionList from '../components/TransactionList'
import { fields } from '../components/TransactionListFilterForm'
import * as STATE from '~/constants/stateNames'
import { useFetchList, useCreateModal, useFilterActions } from '~/hooks'
import { getSerializedData, getParamFromHistory } from '~/utils/get'
import { DEFAULT_PICK_PARAMS } from '~/utils/isEquals'
import { replaceParamsRoute } from '~/utils/route'

const getTransactionListParams = () => ({
  action: transactionFetchList,
  stateName: STATE.TRANSACTION_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields, 'type']
})

const getTransactionCreateParams = (dispatch) => ({
  stateName: STATE.TRANSACTION_CREATE,
  action: transactionCreateAction,
  serializer: getSerializedData(fields),
  onSuccess: () => dispatch(transactionFetchList())
})

const TransactionListContainer = props => {
  const history = prop('history', props)
  const dispatch = useDispatch()

  const list = useFetchList(getTransactionListParams())
  const createModal = useCreateModal(getTransactionCreateParams(dispatch))
  const filterActions = useFilterActions({ fields })

  const activeTab = getParamFromHistory('type', history) || 'all'
  const onTabChange = value => {
    replaceParamsRoute({
      type: value
    }, history)
  }

  const tabData = {
    active: activeTab,
    onChange: onTabChange
  }

  return (
    <TransactionList
      list={list}
      createModal={createModal}
      filterActions={filterActions}
      tabData={tabData}
    />
  )
}

export default TransactionListContainer
