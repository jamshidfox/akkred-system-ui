import * as ROUTES from 'constants/routes'

import React from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path, propOr } from 'ramda'
import Pagination from 'components/Pagination'
import Container from 'components/StyledElems/Container'
import DropdownMore from 'components/Dropdown/more'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { Table, TableRow, TableActions } from '../../../components/Table'
import { stageName } from '../../../constants/backend'
import Tabs from '../../../components/Tabs'
import { Box } from '../../../components/StyledElems'
import CommentListFilterForm from './CommentListFilterForm'

const statusColors = {
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

const BoxUI = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 20px 25px 25px;
`

const ApplicationList = props => {
  const {
    list,
    filterActions,
    history,
    tabsList,
    my
  } = props

  // Data
  const listData = propOr([], 'results', list)
  const listCount = path(['data', 'count'], list)
  const listLoading = prop('loading', list)

  // TabsList

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
      <th colSpan={1}>#</th>
      <th colSpan={2}>Nomer</th>
      <th colSpan={8}>Yuridik shaxsning to‘liq nomi</th>
      <th colSpan={6}>Manzili</th>
      <th colSpan={2}>Pochta</th>
      <th colSpan={2}>Status</th>
      <th colSpan={2}>Qolgan kun</th>
      <th />
    </TableRow>

  // TableList
  const tableList = listData.map((application, index) => {
    const {
      id,
      objectFullName,
      objectFactAddress,
      objectEmail,
      deadlineDate,
      stage,
      registerDate,
      applicationNumber,
    } = application

    const statusText = stageName.object[stage]
    const statusColor = statusColors[my]
    const order = index + 1

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
    ]

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={1}>{order} </td>
        <td colSpan={2}><a style={{
          color: 'blue'
        }} href={sprintf(ROUTES.APPLICATION_UPDATE_URL, id)}>AK-{applicationNumber && applicationNumber}-21</a> </td>
        <td colSpan={8}>{objectFullName}</td>

        <td colSpan={6}>{objectFactAddress}</td>
        <td colSpan={2}>{objectEmail}</td>

        <td colSpan={2}><Status color={statusColor}>
          {statusText}
        </Status> </td>
        <td colSpan={2}>

          {deadlineDate < 1
            ? (<Status color={'red'}>
              {deadlineDate}
            </Status>)
            : (<Status color={'green'}>
              {deadlineDate}
            </Status>)
          }
        </td>

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
}

export default ApplicationList
