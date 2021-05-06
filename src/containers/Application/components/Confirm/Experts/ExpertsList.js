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
  const { serviceModal, branches } = props
  // TableList
  const tableList = branches.map(client => {
    const {
      id,
      assignment,
      expert,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}>{expert && expert.fullName}</td>
        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
          color: '#0f22ff'
        }} href={`${assignment && assignment.file}`}>Hujjat</a></td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >Expert </th>
      <th colSpan={12} >Hujjat </th>
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
      <AddBtn onClick={() => serviceModal.onOpen()}>Ma'lumotlar bazasidan mutaxassis qo'shing </AddBtn>
      {table}

    </>
  )
}
export default ExpertsList
