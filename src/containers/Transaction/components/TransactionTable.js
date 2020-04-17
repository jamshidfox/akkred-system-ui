import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty, prop } from 'ramda'
import styled from 'styled-components'
import TransactionListFilterForm from './TransactionListFilterForm'
import numberFormat from '~/utils/numberFormat'
import dateFormat from '~/utils/dateFormat'
import { Table, TableActions, TableCol, TableRow } from '~/components/Table'

const TransType = styled('div')`
  border-radius: 12px;
  color: #FFF;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  padding: 6px 12px 5px;
  margin-right:30px;
  margin-top:-3px;
`

const Income = styled(TransType)`
  background: #00E096;
`

const Outcome = styled(TransType)`
  background: #FF3D71;
`

const TransactionTable = props => {
  const { data, loading, filterActions, isAll } = props

  const tableActions = (
    <TableActions
      filterForm={<TransactionListFilterForm />}
      filterActions={filterActions}
    />
  )

  return (
    <div>
      <Table
        isEmpty={isEmpty(data)}
        filterForm={tableActions}
        loading={loading}>
        <TableRow header={true}>
          {isAll && <TableCol span={3} />}
          <TableCol span={4}>Сумма</TableCol>
          <TableCol span={4}>Дата и время</TableCol>
          <TableCol span={4}>Платешьщик</TableCol>
          <TableCol span={4}>Комментарий</TableCol>
          <TableCol span={5}>Имя, фамилия</TableCol>
        </TableRow>
        {data.map(transaction => {
          const id = prop('id', transaction)
          const totalPrice = numberFormat(prop('totalPrice', transaction))
          const createdDate = dateFormat(prop('createdDate', transaction))
          const type = prop('type', transaction)
          const comment = prop('comment', transaction)
          return (
            <TableRow key={id}>
              {isAll && (
                <TableCol span={3}>
                  {type === 'outcome' && (
                    <Outcome>Расход</Outcome>
                  )}
                  {type === 'income' && (
                    <Income>Приход</Income>
                  )}
                </TableCol>
              )}
              <TableCol span={4}>{totalPrice}</TableCol>
              <TableCol span={4}>{createdDate}</TableCol>
              <TableCol span={4}>Гость</TableCol>
              <TableCol span={4}>{comment}</TableCol>
              <TableCol span={5}>Анатолий Токов</TableCol>
            </TableRow>
          )
        })}
      </Table>
    </div>
  )
}

TransactionTable.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  filterActions: PropTypes.object.isRequired,
  isAll: PropTypes.bool,
}

TransactionTable.defaultProps = {
  isAll: false
}

export default TransactionTable
