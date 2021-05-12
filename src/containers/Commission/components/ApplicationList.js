import * as ROUTES from 'constants/routes'
import React from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path, propOr } from 'ramda'
import Pagination from 'components/Pagination'
import { Table, TableRow, TableActions } from 'components/Table'
import { getTabsFromRoute } from 'utils/get'
import Container from 'components/StyledElems/Container'
import DropdownMore from 'components/Dropdown/more'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Tabs from '../../../components/Tabs'
import { answerCommissionType } from '../../../constants/backend'
import CommentListFilterForm from './CommentListFilterForm'

const statusColors = {
  approved: 'green',
  reject: 'red',
  wait: 'blue',
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`

const ApplicationList = props => {
  const {
    list,
    filterActions,
    history,
    onDelete
  } = props

  // Data
  const listData = propOr([], 'results', list)
  const listCount = path(['data', 'count'], list)
  const listLoading = prop('loading', list)

  // TabsList
  const tabsList = getTabsFromRoute()

  // Tabs
  const tabs =
    <Tabs
      list={tabsList}
    />

  // Actions
  const linkAction = '#'
  const tableActions =
    <TableActions
      filterForm={<CommentListFilterForm />}
      filterActions={filterActions}
      linkAction={linkAction}
      notCreate={true}
    />

  // TableHead
  const tableHead =
    <TableRow header={true}>
      <th colSpan={8}>Ariza</th>
      <th colSpan={6}>Status</th>
      <th colSpan={3}>Yuridik shaxsning to‘liq nomi</th>
      <th colSpan={4}>Sana</th>
      <th />
    </TableRow>

  // TableList
  const tableList = listData.map(client => {
    const {
      id,
      answerType,
      application,

    } = client

    const statusText = answerCommissionType.object[answerType]
    const statusColor = statusColors[answerType]

    // MoreList
    const moreList = [
      {
        name: 'Ovoz berish',
        onClick: () => {
          history.push({
            pathname: sprintf(ROUTES.COMMISSION_UPDATE_URL, id)
          })
        }
      },
    ]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>Ariza №{application && application.id}/{ application && application.registerDate}</td>

        <td colSpan={8}><Status color={statusColor}>
          {statusText}
        </Status></td>
        <td colSpan={3}>{application.name}</td>
        <td colSpan={4}>{application && application.registerDate}</td>
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
      {/* {tabs} */}
      {table}
      {pagination}
    </Container>
  )
}

ApplicationList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object
  // onDelete: PropTypes.func
}

export default ApplicationList
