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
const OfficeList = props => {
  const { serviceModal, branches, editModalOpen } = props
  // TableList
  const tableList = branches.map(client => {
    const {
      id,
      fullName,
      address,
      phoneNumber,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>{fullName}</td>
        <td colSpan={6}>{address}</td>
        <td colSpan={6}>{phoneNumber}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >fullName </th>
      <th colSpan={6} >address </th>
      <th colSpan={6} >phoneNumber </th>
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
      <PageTitleNew name="ОФИСЫ" />
      {table}

    </>
  )
}
export default OfficeList
