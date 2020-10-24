import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { prop, isEmpty, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { ItemControlButton } from 'components/UI'
import { TableCol, Table, TableRow, TableActions } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { EMPLOYEES_UPDATE_URL, default as ROUTES } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'
import Pagination from '../../../components/Pagination/Pagination'
import { getTabsFromRoute } from '../../../utils/get'
import Tabs from '../../../components/Tabs'
import EmployeesListFilterForm from './EmployeesListFilterForm'

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

const EmployeesList = props => {
  const { list, filterActions, deleteModal } = props

  const data = prop('results', list)
  const loading = prop('loading', list)
  const count = path(['data', 'count'], list)
  const linkAction = 'settings/employees/create'
  const onDelete = () => {}
  const tableHead =
    <TableRow header={true}>
      <th colSpan={8}>Ф.И.O</th>
      <th colSpan={6}>Номер</th>
      <th colSpan={3}>Адрес</th>
      <th colSpan={4}>Email</th>
      <th colSpan={4}>Должность</th>
      <th colSpan={4}>Департамент</th>
      <th colSpan={1} />
      <th colSpan={1} />
    </TableRow>
  const tableActions = (
    <TableActions
      filterForm={<EmployeesListFilterForm />}
      filterActions={filterActions}
      linkAction={linkAction}
    />
  )

  // TableList
  const tableList = data.map(client => {
    const {
      id,
      address ,
      firstName,
      lastName,
      mail,
      phoneNumber,
      role,
      department,
    } = client

    // Render
    return (
      <TableRow
        key={id}
        // onClick={handleRedirect}
      >
        <td colSpan={8}>{firstName} {lastName}</td>
        <td colSpan={6}>{phoneNumber}</td>
        <td colSpan={3}>{address}</td>
        <td colSpan={4}>{mail}</td>
        <td colSpan={4}>фывыв</td>
        <td colSpan={4}>ыфвфвфыв</td>

        <td colSpan={1}>
          <Link style={style} to={sprintf(EMPLOYEES_UPDATE_URL, id)} ><img src={Edit} alt="Edit" /></Link>
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

  return (

    <BoxUI>
      {table}
      {pagination}
    </BoxUI>

  )
}

EmployeesList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
  deleteModal: PropTypes.object
}

export default EmployeesList
