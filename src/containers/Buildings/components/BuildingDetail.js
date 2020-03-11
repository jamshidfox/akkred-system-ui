import React, { useState } from 'react'
import { prop, isEmpty } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import FloorsCreateModal from './FloorsCreateModal'
import FloorsDeleteModal from './FloorsDeleteModal'

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

const BuildingDetail = props => {
  const { list, floorsList, createModal, deleteModal, roomsList } = props
  const [modalFloor, setModalFloor] = useState({})
  const [deleteItem, setDeleteItem] = useState({})
  const floors = prop('results', floorsList)
  const data = prop('data', list)

  console.log(deleteModal)

  const deleteItemModal = (id, name) => {
    setDeleteItem({ id: id, name: name })
    deleteModal.onOpen()
  }

  const modalOpen = (id, name, rooms) => {
    setModalFloor({ id: id, name: name, rooms: rooms })
    createModal.onOpen()
  }

  return (
    <BoxUI>
      <PageTitle name={`Корпусы / ${data && data.name}`}>
        <MediumButton>добавить</MediumButton>
      </PageTitle>
      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={6}>Название этажа</TableCol>
          <TableCol span={5}>Количество номеров</TableCol>
          <TableCol span={10} />
        </TableRow>
        {floors && floors.map((floor, index) => (
          <TableRow key={index}>
            <TableCol span={6}>{floor.name}</TableCol>
            <TableCol span={5}>{floor.rooms.length}</TableCol>
            <TableCol span={8} />
            <TableCol span={1} style={linkListStyle}>
              <span
                style={linkStyle} 
                onClick={() => modalOpen(floor.id, floor.name, floor.rooms)}
              >
                <img src={Edit} alt="Edit" />
              </span>
              <span
                style={linkStyle}
                onClick={() => deleteItemModal(floor.id, floor.name)}>
                <img src={Trash} alt="Delete" />
              </span>
            </TableCol>
          </TableRow>
        ))}
      </Table>
      <FloorsCreateModal
        {...createModal}
        modalFloor={modalFloor}
        roomsList={roomsList} />
      <FloorsDeleteModal
        {...deleteModal}
        deleteItem={deleteItem} />
    </BoxUI>
  )
}

BuildingDetail.propTypes = {
  list: PropTypes.object,
  createModal: PropTypes.object,
  deleteModal: PropTypes.object,
  floorsList: PropTypes.object,
  deleteBuilding: PropTypes.object,
  roomsList: PropTypes.object
}

export default BuildingDetail
