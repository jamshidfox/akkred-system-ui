import React, { useState } from 'react'
import { prop, isEmpty } from 'ramda'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import FloorsCreateModal from './FloorsCreateModal'
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

const BuildingDetail = props => {
  const { list, floorsList, createModal, roomsList, initialValues } = props
  const [deleteItem, setDeleteItem] = useState({})
  const floors = prop('results', floorsList)
  const data = prop('data', list)

  const deleteItemModal = (id, name) => {
    setDeleteItem({ id: id, name: name })
    deleteModal.onOpen()
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
              <span style={linkStyle} onClick={createModal.onOpen}><img src={Edit} alt="Edit" /></span>
              <span style={linkStyle} onClick={() => deleteItemModal(floor.id, floor.name)}><img
                src={Trash} alt="Delete" /></span>
            </TableCol>
          </TableRow>
        ))}
      </Table>
      <FloorsCreateModal {...createModal} roomsList={roomsList} initialValues={initialValues} />
    </BoxUI>
  )
}

BuildingDetail.propTypes = {
  list: PropTypes.object,
  createModal: PropTypes.object,
  deleteModal: PropTypes.object,
  deleteBuilding: PropTypes.object,
  initialValues: PropTypes.object
}

export default BuildingDetail
