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

const ExpertExpertiseList = props => {
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
        <td colSpan={8}>{expert.username}</td>
        <td colSpan={8}>{type.name}</td>

        <ItemControlButton onClick={() => onDeletePlace(client)}>
          <img src={Trash} alt="Trash" />
        </ItemControlButton>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={8} >Expert</th>
      <th colSpan={8} >Roli </th>
      <th colSpan={4} />
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
export default ExpertExpertiseList
