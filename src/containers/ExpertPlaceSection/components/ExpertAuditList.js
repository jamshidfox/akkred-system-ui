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
import { statusAssignments, expertAuditAnswerType, answerTypeList } from '../../../constants/backend'
import CommentListFilterForm from './CommentListFilterForm'

const statusColors = {
  done: 'green',
  given: 'red',
  approved: 'green',
  reject: 'red',
  wait: 'red',
}

const statusResultColors = {
  wait: 'red',
  confirm: 'green',
  not_wait: 'blue',
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`

const ExpertAuditList = props => {
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
  const linkAction = '/application/create'
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
      <th colSpan={6}>Ariza raqami</th>
      <th colSpan={6}>Vazifa raqami</th>
      <th colSpan={6}>Status</th>
      <th colSpan={6}>So`rov</th>
      <th />
    </TableRow>

  // TableList
  const tableList = listData.map(client => {
    const {
      id,
      application,
      openDate,
      statusAssignment,
      statusResult,
      expert,
      answerType
    } = client

    const statusText = statusAssignments.object[statusAssignment]
    const statusResultText = expertAuditAnswerType.object[statusResult]
    const statusColor = statusColors[statusAssignment]
    const statusResultColor = statusResultColors[statusResult]
    const answerText = answerTypeList.object[answerType]
    const answerTypeTypColor = statusColors[answerType]

    // MoreList
    const moreList = [
      {
        name: 'Ko\'rish',
        onClick: () => {
          history.push({
            pathname: sprintf(ROUTES.EXPERT_PLACE_UPDATE_URL, id)
          })
        }
      },
    ]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}><a style={{
          color: 'blue'
        }} href={sprintf(ROUTES.EXPERT_PLACE_UPDATE_URL, id)} >{expert.firstName} {expert.lastName} {expert.middleName} ({expert.username})</a></td>
        <td colSpan={6}> ???{id}/{openDate}</td>
        <td colSpan={6}> Ariza ??? AK-{application.applicationNumber && application.applicationNumber}-21</td>
        <td colSpan={6}><Status color={statusColor}>
          {statusText}
        </Status></td>
        <td colSpan={6}> <Status color={answerTypeTypColor}>
          {answerText}
        </Status></td>
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

ExpertAuditList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object
  // onDelete: PropTypes.func
}

export default ExpertAuditList
