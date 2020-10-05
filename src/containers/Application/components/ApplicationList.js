import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { prop, isEmpty, path, propOr, add } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Pagination from 'components/Pagination'
import { Table, TableRow, TableActions } from '../../../components/Table'
import { APPLICATION_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'
import Tabs from '../../../components/Tabs'
import { getTabsFromRoute } from '../../../utils/get'
import CommentListFilterForm from './CommentListFilterForm'

const BoxUI = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 20px 25px 25px;
`
const style = {
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer'
}

const ApplicationList = props => {
  const {
    list,
    filterActions,
    onDelete
  } = props

  // Data
  const data = propOr([], 'results', list)
  const count = path(['data', 'count'], list)
  const loading = prop('loading', list)

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
    />

  // TableHead
  const tableHead =
    <TableRow header={true}>
      <th colSpan={8}>Полное название юридического лица</th>
      <th colSpan={6}>Номер паспорта</th>
      <th colSpan={3}>Адрес</th>
      <th colSpan={4}>Дата рождения</th>
      <th colSpan={1} />
      <th colSpan={1} />
    </TableRow>

  // TableList
  const tableList = data.map(client => {
    const {
      title = 'Title',
      id,
      address = 'Address'
    } = client

    // Handlers
    const handleRedirect = () => alert('Hello')

    // Render
    return (
      <TableRow
        key={id}
        onClick={handleRedirect}
      >
        <td colSpan={8}>{title}</td>
        <td colSpan={6}>АА 3545332</td>
        <td colSpan={3}>{address}</td>
        <td colSpan={4}>BDay</td>
        <td colSpan={1}>
          <Link
            style={style}
            to={sprintf(APPLICATION_UPDATE_URL, id)}>
            <img src={Edit} alt="Edit" />
          </Link>
        </td>
        <td colSpan={1}>
          <span
            style={style}
            onClick={() => onDelete(id)}>
            <img src={Trash} alt="Edit" />
          </span>
        </td>
      </TableRow>
    )
  })

  // Table
  const table =
    <Table
      isEmpty={isEmpty(data)}
      filterForm={tableActions}
      loading={loading}
      styles={{ marginBottom: '47px' }}
    >
      {tableHead}
      {tableList}
    </Table>

  // Pagination
  const pagination =
    <Pagination
      count={count}
    />

  // Render
  return (
    <BoxUI>
      {tabs}
      {table}
      {pagination}
    </BoxUI>
  )
}

ApplicationList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
  onDelete: PropTypes.func
}

export default ApplicationList
