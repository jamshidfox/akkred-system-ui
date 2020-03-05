import React from 'react'
import { prop, isEmpty } from 'ramda'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import BuidingsCreateModal from './BuildingsCreateModal'

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
  const { list, createModal, initialValues } = props

  const data = prop('results', list)

  return (
    <BoxUI>
      <PageTitle name="Корпуса">
        <MediumButton onClick={createModal.onOpen}>добавить</MediumButton>
      </PageTitle>
      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={6}>Название корпуса</TableCol>
          <TableCol span={6}>Этажность</TableCol>
          <TableCol span={5}>Количество номеров</TableCol>
          <TableCol span={7} />
        </TableRow>
        {data.map((room, index) => (
          <TableRow key={index}>
            <TableCol span={6}>{room.name}</TableCol>
            <TableCol span={6}>{room.floors.length}</TableCol>
            <TableCol span={5}>{room.count}</TableCol>
            <TableCol span={5} />
            <TableCol span={2} style={linkListStyle}>
              <Link style={linkStyle} to={''}><img
                src={Edit} alt="Edit" /></Link>
              <Link style={linkStyle} to={''}><img src={Trash} alt="Edit" /></Link>
            </TableCol>
          </TableRow>
        ))}
      </Table>
      <BuidingsCreateModal {...createModal} initialValues={initialValues} />
    </BoxUI>
  )
}

BuildingsList.propTypes = {
  list: PropTypes.object,
  createModal: PropTypes.object,
  initialValues: PropTypes.object
}

export default BuildingsList
