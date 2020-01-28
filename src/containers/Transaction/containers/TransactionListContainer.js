import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'
import { transactionFetchList } from '../actions'
import TransactionList from '../components/TransactionList'

const getRoomListParams = () => ({
  action: transactionFetchList,
  stateName: STATE.TRANSACTION_LIST,
})

const TransactionListContainer = props => {
  const list = useFetchList(getRoomListParams())
  return (
    <TransactionList
      list={list}
    />
  )
}

export default TransactionListContainer
