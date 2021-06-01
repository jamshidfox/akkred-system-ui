import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { Table, TableCol, TableRow, TableColRight } from '../../../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../../../components/UI'
import * as ROUTES from '../../../../../constants/routes'

const AddBtn = styled(SecondarySmallButton)`
`

const ExpertsList = props => {
  const { serviceModal, branches, onDeletePlace } = props
  // TableList
  const tableList = branches.map(client => {
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
        key={id}
      >
        <td colSpan={6}>{expert.username}</td>
        <td colSpan={6}>{type.name}</td>
        <td colSpan={6}>{date}</td>
        <td colSpan={4}>{address.name}</td>

        <ItemControlButton onClick={() => onDeletePlace(client)}>
          <img src={Trash} alt="Trash" />
        </ItemControlButton>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >Expert</th>
      <th colSpan={6} >Roli </th>
      <th colSpan={6} >Data </th>
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
