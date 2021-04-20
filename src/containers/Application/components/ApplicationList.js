import * as ROUTES from 'constants/routes'
import { registryStatus } from 'constants/backend'
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
import CommentListFilterForm from './CommentListFilterForm'

const statusColors = {
  // draft: 'green',
  // active: 'green',
  // inactive: 'red',
  // paused: 'yellow',
  // extended: 'blue'
  my:'red',
  all:'green'
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
    onDelete,
      my
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
    />

  // TableHead
  const tableHead =
    <TableRow header={true}>
      <th colSpan={2}>Номер</th>
      <th colSpan={8}>Полное название юридического лица</th>
      <th colSpan={6}>Адрес</th>
      <th colSpan={4}>Майл</th>
      <th colSpan={4}>Статус</th>
      <th />
    </TableRow>

  // TableList
  const tableList = listData.map(application => {
    const {
      id,
      objectFullName,
      objectFactAddress,
      objectEmail,
      status,
      registerDate,
    } = application

    const statusText = registryStatus.object[status]
    const statusColor = statusColors[my]

    // MoreList
    const moreList = [
      {
        name: "Ko'rish",
        onClick: () => {
          history.push({
            pathname: sprintf(ROUTES.APPLICATION_UPDATE_URL, id)
          })
        }
      },
      // {
      //   name: 'Удалить',
      //   onClick: () => onDelete(id)
      // }
    ]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={2}><a style={{
          color: 'blue'
        }} href={sprintf(ROUTES.APPLICATION_UPDATE_URL, id)}>Заявка №{id}/{registerDate}</a> </td>
        <td colSpan={8}>{objectFullName}</td>

        <td colSpan={6}>{objectFactAddress}</td>
        <td colSpan={4}>{objectEmail}</td>
        <td colSpan={4}><Status color={statusColor}>
          {statusText}
        </Status> </td>
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
      {tabs}
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
