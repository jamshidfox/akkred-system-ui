import React from 'react'
import { useDispatch } from 'react-redux'

import * as STATE from '../../../constants/stateNames'
import { useFetchList, useCreateModal } from '../../../hooks'
import { transactionFetchList, transactionCreateAction } from '../actions'
import TransactionList from '../components/TransactionList'
import { getSerializedData } from '../../../utils/get'
import { fields } from '../components'

const getTransactionListParams = () => ({
  action: transactionFetchList,
  stateName: STATE.TRANSACTION_LIST,
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
  return (
    <TransactionList
      list={list}
      createModal={createModal}
    />
  )
}

export default TransactionListContainer
