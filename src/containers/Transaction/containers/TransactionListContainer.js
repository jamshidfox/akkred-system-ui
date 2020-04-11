import React from 'react'
import { useDispatch } from 'react-redux'

import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal, useFilterActions } from '../../../hooks'
import { transactionFetchList, transactionCreateAction } from '../actions'
import TransactionList from '../components/TransactionList'
import { getSerializedData } from '../../../utils/get'
import { fields } from '../components'
import { DEFAULT_PICK_PARAMS } from '../../../utils/isEquals'

const getTransactionListParams = () => ({
  action: transactionFetchList,
  stateName: STATE.TRANSACTION_LIST,
  pickParams: [...DEFAULT_PICK_PARAMS, ...fields]

})

const getTransactionCreateParams = (onSuccess) => ({
  stateName: STATE.TRANSACTION_CREATE,
  action: transactionCreateAction,
  serializer: getSerializedData(fields),
  onSuccess
})

const TransactionListContainer = props => {
  const dispatch = useDispatch()
  const onSuccess = () => dispatch(transactionFetchList())
  const list = useFetchList(getTransactionListParams())
  const createModal = useCreateModal(getTransactionCreateParams(onSuccess))
  const filterActions = useFilterActions({ fields })
  return (
    <TransactionList
      list={list}
      createModal={createModal}
      filterActions={filterActions}

    />
  )
}

export default TransactionListContainer
