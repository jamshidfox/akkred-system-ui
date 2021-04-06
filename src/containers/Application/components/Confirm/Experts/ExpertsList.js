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
  const { serviceModal, branches, editModalOpen } = props
  // TableList
  const tableList = branches.map(client => {
    const {
      id,
      cases,
      assignment,
      expert,
      status,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>{assignment && assignment.file}</td>
        <td colSpan={6}>{expert && expert.full_name}</td>
        <td colSpan={6}>{status && status}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >cases </th>
      <th colSpan={6} >assignment </th>
      <th colSpan={6} >expert </th>
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
      <AddBtn onClick={() => serviceModal.onOpen()}>добавить эксперта из базы </AddBtn>
      {table}

    </>
  )
}
export default ExpertsList
