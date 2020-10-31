import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path } from 'ramda'
import styled from 'styled-components'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { TableCol, Table, TableRow, TableActions } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import Edit from '../../../images/edit.svg'
import Pagination from '../../../components/Pagination/Pagination'
import EmployeesListFilterForm from '../../Employees/components/EmployeesListFilterForm'
import { EMPLOYEES_UPDATE_URL } from '../../../constants/routes'
import RolesCreateModal from './GroupsCreateModal'
import RolesUpdateModal from './GroupsUpdateModal'

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
const GroupsList = props => {
  const { list, createModal, editModal, groupList, deleteModal } = props
  const [updateItem, setUpdateItem] = useState({})
  const data = prop('results', list)
  const loading = prop('loading', list)
  const count = path(['data', 'count'], list)
  const onDelete = () => {}
  const tableHead =
    <TableRow header={true}>
      <th colSpan={8}>Полное название юридического лица</th>
      <th colSpan={6}>Номер</th>
      <th colSpan={3}>Адрес</th>
      <th colSpan={4}>Дата рождения</th>
      <th colSpan={1} />
      <th colSpan={1} />
    </TableRow>
  const tableActions = (
    <TableActions
      createModal={createModal}
    />
  )

  const tableList = data.map(client => {
    const {
      name = 'Title',
      id,
      address = 'Address'
    } = client

    // Render
    return (
      <TableRow
        key={id}
        // onClick={handleRedirect}
      >
        <td colSpan={8}>{name}</td>
        <td colSpan={6}>АА 3545332</td>
        <td colSpan={3}>{address}</td>
        <td colSpan={4}>BDay</td>

        <td colSpan={1}>
          <ItemControlButton onClick={() => updateItemModal(client)}>
            <img src={Edit} alt="Edit" />
          </ItemControlButton>
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

  const table =
    <Table
      isEmpty={isEmpty(data)}
      filterForm={tableActions}
      loading={loading}
      styles={{ marginBottom: '47px' }}
    >
      {tableHead}
      {tableList}
      <RolesCreateModal {...createModal} groupList={groupList} />
      <RolesUpdateModal {...editModal} updateItem={updateItem} groupList={groupList} />
    </Table>

  // Pagination
  const pagination =
    <Pagination
      count={count}
    />

  const updateItemModal = (item) => {
    setUpdateItem(item)
    editModal.onOpen()
  }

  return (
    <BoxUI>
      {table}
      {pagination}
    </BoxUI>
  )
}

GroupsList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
  editModal: PropTypes.object,
  groupList: PropTypes.object,
  deleteModal: PropTypes.object,
  createModal: PropTypes.object
}

export default GroupsList
