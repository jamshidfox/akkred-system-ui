import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path } from 'ramda'
import styled from 'styled-components'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Table, TableRow, TableActions } from '../../../components/Table'
import { Box } from '../../../components/StyledElems'
import Edit from '../../../images/edit.svg'
import Pagination from '../../../components/Pagination/Pagination'
import RolesCreateModal from './RolesCreateModal'
import RolesUpdateModal from './RolesUpdateModal'

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

const RolesList = props => {
  const { list, createModal, editModal, groupList } = props
  const [updateItem, setUpdateItem] = useState({})
  const data = prop('results', list)
  const loading = prop('loading', list)
  const count = path(['data', 'count'], list)
  const updateItemModal = (item) => {
    setUpdateItem(item)
    editModal.onOpen()
  }
  const onDelete = () => {}

  const tableHead =
    <TableRow header={true}>
      <th colSpan={22}>Lavozim nomi</th>
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
    } = client

    // Render
    return (
      <TableRow
        key={id}
        // onClick={handleRedirect}
      >
        <td colSpan={22}>{name}</td>

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

  return (

    <BoxUI>
      {table}
      {pagination}
    </BoxUI>

  )
}

RolesList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
  editModal: PropTypes.object,
  groupList: PropTypes.object,
  deleteModal: PropTypes.object,
  createModal: PropTypes.object
}

export default RolesList
