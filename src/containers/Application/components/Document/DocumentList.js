import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { ItemControlButton, PageTitle } from 'components/UI'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { Table, TableCol, TableRow, TableColRight } from '../../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../../components/UI'
import * as ROUTES from '../../../../constants/routes'

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;

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
        <td colSpan={8}>{name}</td>
        <td colSpan={8}>{type}</td>
        <td colSpan={8}><a href={`http://127.0.0.1:8000/media/${file}`}>документ</a></td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={8} >Name </th>
      <th colSpan={8} >type </th>
      <th colSpan={8} >file </th>
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
      <PageTitleNew name="ДОКУМЕНТЫ" />
      {table}

    </>
  )
}
export default DocumentList
