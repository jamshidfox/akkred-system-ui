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
      assignment,
      expert,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}> <a style={{
          color: 'blue'
        }} href={assignment && assignment.file}>Задача</a></td>
        <td colSpan={12}>{expert && expert.fullName}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >assignment </th>
      <th colSpan={12} >expert </th>
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

      {table}

    </>
  )
}
export default ExpertsList
