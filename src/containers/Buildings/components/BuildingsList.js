import React, { useState } from 'react'
import { prop, isEmpty } from 'ramda'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { SETTING_BUILDINGS_ITEM_URL } from '../../../constants/routes'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import BuildingsCreateModal from './BuildingsCreateModal'
import BuildingsUpdateModal from './BuildingsUpdateModal'

const BoxUI = styled(Box)`
  padding: 25px;
`

const linkStyle = {
  textDecoration: 'none'
}
const linkListStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const BuildingsList = props => {
  const { list, createModal, deleteModal, editModal } = props
  const [updateItem, setUpdateItem] = useState({})
  const data = prop('results', list)
  const initialValues = { floors: [{}] }

  const updateItemModal = (item) => {
    setUpdateItem(item)
    editModal.onOpen()
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
          <TableRow key={index}>
            <TableCol span={6}>
              <Link style={linkStyle} to={sprintf(SETTING_BUILDINGS_ITEM_URL, building.id)}>
                {building.name}
              </Link>
            </TableCol>
            <TableCol span={6}>{building.floors.length}</TableCol>
            <TableCol span={5}>{building.count}</TableCol>
            <TableCol span={5} />
            <TableCol span={2} style={linkListStyle}>
              <ItemControlButton onClick={() => updateItemModal(building)}>
                <img src={Edit} alt="Edit" />
              </ItemControlButton>
              <ItemControlButton onClick={() => deleteModal.onSubmit(building.id)}>
                <img src={Trash} alt="Delete" />
              </ItemControlButton>
            </TableCol>
          </TableRow>
        ))}
      </Table>
      <BuildingsCreateModal {...createModal} initialValues={initialValues} />
      <BuildingsUpdateModal {...editModal} updateItem={updateItem} />
    </BoxUI>
  )
}

BuildingsList.propTypes = {
  list: PropTypes.object,
  createModal: PropTypes.object,
  deleteModal: PropTypes.object,
  deleteBuilding: PropTypes.func,
  editModal: PropTypes.object,
  initialValues: PropTypes.object
}

export default BuildingsList
