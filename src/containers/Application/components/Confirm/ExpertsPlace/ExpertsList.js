import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Trash from 'images/trash-2.svg'
import Edit from 'images/edit.svg'
import { ItemControlButton } from 'components/UI'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { Table, TableCol, TableRow, TableColRight } from '../../../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../../../components/UI'
import * as ROUTES from '../../../../../constants/routes'

const AddBtn = styled(SecondarySmallButton)`
`

const ExpertsList = props => {
  const { serviceModal, branches, onDeletePlace, editModalOpen } = props
  // TableList
  const tableList = branches.map((client, index) => {
    const {
      id,
      type,
      expert,
      date,
      address,
    } = client

    // Render
    return (
      <TableRow
        key={index}
      >
        <td colSpan={6}>{expert && expert.username}</td>
        <td colSpan={6}>{type && type.name}</td>
        <td colSpan={6}>{date && date}</td>
        <td colSpan={4}>{address && address.name}</td>

        {/*<ItemControlButton onClick={() => editModalOpen(client)}>*/}
        {/*  <img src={Edit} alt="Edit" />*/}
        {/*</ItemControlButton>*/}

        <ItemControlButton onClick={() => onDeletePlace(client)}>
          <img src={Trash} alt="Trash" />
        </ItemControlButton>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >Ijrochi</th>
      <th colSpan={6} >Roli </th>
      <th colSpan={6} >Sana </th>
      <th colSpan={4} >Manzil </th>
      <th colSpan={2} />
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(branches)}
    >
      {tableHead}
      {tableList}
    </Table>
  return (
    <>
      <AddBtn onClick={() => serviceModal.onOpen()}>Qo'shish</AddBtn>
      {table}

    </>
  )
}
export default ExpertsList
