import * as ROUTES from 'constants/routes'
import {registryStatus, statusPayments} from 'constants/backend'
import React from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path, propOr } from 'ramda'
import Pagination from 'components/Pagination'
import { Table, TableRow, TableActions } from 'components/Table'
import Container from 'components/StyledElems/Container'
import DropdownMore from 'components/Dropdown/more'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import CommentListFilterForm from './CommentListFilterForm'

const statusColors = {
  paid: 'green',
  unpaid: 'red',
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`

const AccountingContractList = props => {
  const {
    list,
    filterActions,
    history,
    onDelete,
    onPaid,
  } = props

  // Data
  const listData = propOr([], 'results', list)
  const listCount = path(['data', 'count'], list)
  const listLoading = prop('loading', list)

  // TabsList

  // Tabs

  // Actions
  const linkAction = '/application/create'
  const tableActions =
    <TableActions
      filterForm={<CommentListFilterForm />}
      filterActions={filterActions}
      linkAction={linkAction}
    />

  // TableHead
  const tableHead =
    <TableRow header={true}>
      <th colSpan={6}>Номер заявки</th>
      <th colSpan={6}>Номер договра</th>
      <th colSpan={6}>Статус</th>
      <th colSpan={6}>Сумма</th>
      <th />
    </TableRow>

  // TableList
  const tableList = listData.map(client => {
    const {
      id,
      application,
      statusPayment,
      totalAmount,
      registerDate,
    } = client

    const statusText = statusPayments.object[statusPayment]
    const statusColor = statusColors[statusPayment]

    // MoreList
    const moreList = [
      {
        name: 'Оплатить',
        onClick: () => onPaid(id)
      },
      {
        name: 'Удалить',
        onClick: () => onDelete(id)
      }
    ]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}><a style={{
          color: 'blue'
        }} href={sprintf(ROUTES.APPLICATION_UPDATE_URL, application.id)}>Заявка №{application.id}/{application.registerDate}</a> </td>
        <td colSpan={6}> №{id}/{registerDate}</td>
        <td colSpan={6}><Status color={statusColor}>
          {statusText}
        </Status></td>
        <td colSpan={6}>{totalAmount}</td>
        <DropdownMore
          moreList={moreList}
        />
      </TableRow>
    )
  })

  // Table
  const table =
    <Table
      isEmpty={isEmpty(listData)}
      filterForm={tableActions}
      loading={listLoading}
      styles={{ marginBottom: '47px' }}
    >
      {tableHead}
      {tableList}
    </Table>

  // Pagination
  const pagination =
    <Pagination
      count={listCount}
    />

  // Render
  return (
    <Container>
      {table}
      {pagination}
    </Container>
  )
}

AccountingContractList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object
  // onDelete: PropTypes.func
}

export default AccountingContractList
