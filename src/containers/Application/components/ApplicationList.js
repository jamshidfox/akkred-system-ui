import * as ROUTES from 'constants/routes'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { prop, isEmpty, path, propOr } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Pagination from 'components/Pagination'
import { TableCol, Table, TableRow, TableActions } from '../../../components/Table'
import { APPLICATION_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'
import Tabs from '../../../components/Tabs'
import CommentListFilterForm from './CommentListFilterForm'

const BoxUI = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 20px 25px 25px;
`
const Row = styled(TableRow)`
  padding: 10px 12px 10px 10px ;
  border-radius: 8px;
  height: 55px;
  &:nth-child(odd) {
    background-color: #F1F3F5;
  }
`
const style = {
  color: '#ffffff',
  textDecoration: 'none',
  cursor: 'pointer'
}

const ApplicationList = props => {
  const { list, filterActions, onDelete } = props

  // Data
  const data = propOr([], 'results', list)
  const count = path(['data', 'count'], list)
  const loading = prop('loading', list)

  // Actions
  const linkAction = '/application/create'
  const tableActions = (
    <TableActions
      filterForm={<CommentListFilterForm />}
      filterActions={filterActions}
      linkAction={linkAction}
    />
  )

  // TabsList
  const tabsList = [
    {
      name: 'Мои заявки',
      url: ROUTES.APPLICATION_LIST_URL
    },
    {
      name: 'Табуляция',
      url: ROUTES.APPLICATION_TABS_URL
    },
    {
      name: 'Табуляция',
      url: ROUTES.APPLICATION_TABS_URL
    }
  ]

  // Tabs
  const tabs =
    <Tabs
      list={tabsList}
      styles={{ marginBottom: '15px' }}
    />

  // TableHead
  const tableHead =
    <TableRow header={true}>
      <TableCol span={8}>Полное название юридического лица</TableCol>
      <TableCol span={6}>НОМЕР ПАСПОРТА</TableCol>
      <TableCol span={3}>Адрес</TableCol>
      <TableCol span={4}>дата рождения</TableCol>
      <TableCol span={1} />
      <TableCol span={1} />
    </TableRow>

  // TableList
  const tableList = data.map(client => (
    <Row key={client.id}>
      <TableCol span={8}>{client.title}</TableCol>
      <TableCol span={6}>АА 3545332</TableCol>
      <TableCol span={3}>{client.address}</TableCol>
      <TableCol span={4} />
      <TableCol span={1}>
        <Link style={style} to={sprintf(APPLICATION_UPDATE_URL, client.id)}><img src={Edit} alt="Edit" /></Link>
      </TableCol>
      <TableCol span={1}>
        <span style={style} onClick={() => onDelete(client.id)}><img src={Trash} alt="Edit" /></span>
      </TableCol>
    </Row>
  ))

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

  // Render
  return (
    <BoxUI>
      {tabs}
      {table}
      <Pagination
        count={count}
        styles={{ marginTop: 'auto' }}
      />
    </BoxUI>
  )
}

ApplicationList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
  onDelete: PropTypes.func
}

export default ApplicationList
