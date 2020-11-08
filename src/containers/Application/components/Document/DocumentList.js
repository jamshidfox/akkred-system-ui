import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { Table, TableCol, TableRow, TableColRight } from '../../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../../components/UI'
import * as ROUTES from '../../../../constants/routes'

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`

const DocumentList = props => {
  const { serviceModal, document, editModalOpen } = props
  // TableList
  const tableList = document.map(client => {
    const {
      id,
      file,
      type,
      name,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>{name}</td>
        <td colSpan={6}>{type}</td>
        <td colSpan={6}><a href={file}>документ</a></td>
        <td colSpan={6}><ItemControlButton onClick={() => editModalOpen(client)}>
          <img src={Edit} alt="Edit" />
        </ItemControlButton></td>


      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >Name </th>
      <th colSpan={6} >type </th>
      <th colSpan={6} >file </th>
      <th colSpan={6}> </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(document)}
    >
      {tableHead}
      {tableList}
    </Table>
  return (
    <>
      <AddBtn onClick={() => serviceModal.onOpen()}>добавить документ </AddBtn>
      {table}

    </>
  )
}
export default DocumentList
