import React, { useState } from 'react'
import { prop, isEmpty } from 'ramda'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { SETTING_BUILDINGS_ITEM_URL } from '../../../constants/routes'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import BuildingsCreateModal from './BuildingsCreateModal'
import BuildingsDeleteModal from './BuildingsDeleteModal'

const BoxUI = styled(Box)`
  padding: 25px;
`

const linkStyle = {
  color: '#FFF',
  textDecoration: 'none'
}
const linkListStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const BuildingsList = props => {
  const { list, createModal, deleteModal, deleteBuilding } = props
  const [deleteItem, setDeleteItem] = useState({})
  const data = prop('results', list)

  const deleteItemModal = (id, name) => {
    setDeleteItem({ id: id, name: name })
    deleteModal.onOpen()
  }

  return (
    <BoxUI>
      <PageTitle name="Корпусы">
        <MediumButton onClick={createModal.onOpen}>добавить</MediumButton>
      </PageTitle>
      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={6}>Название корпуса</TableCol>
          <TableCol span={6}>Этажность</TableCol>
          <TableCol span={5}>Количество номеров</TableCol>
          <TableCol span={7} />
        </TableRow>
        {data.map((building, index) => (
          <TableRow to={sprintf(SETTING_BUILDINGS_ITEM_URL, building.id)} key={index}>
            <TableCol span={6}>{building.name}</TableCol>
            <TableCol span={6}>{building.floors.length}</TableCol>
            <TableCol span={5}>{building.count}</TableCol>
            <TableCol span={5} />
            <TableCol span={2} style={linkListStyle}>
              <Link style={linkStyle} to={''}><img src={Edit} alt="Edit" /></Link>
              <span style={linkStyle} onClick={() => deleteItemModal(building.id, building.name)}><img
                src={Trash} alt="Delete" /></span>
            </TableCol>
          </TableRow>
        ))}
      </Table>
      <BuildingsCreateModal {...createModal} />
      <BuildingsDeleteModal {...deleteModal} deleteItem={deleteItem} deleteBuilding={deleteBuilding} />
    </BoxUI>
  )
}

BuildingsList.propTypes = {
  list: PropTypes.object,
  createModal: PropTypes.object,
  deleteModal: PropTypes.object,
  deleteBuilding: PropTypes.func,
  initialValues: PropTypes.object
}

export default BuildingsList
