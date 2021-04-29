import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { Table, TableRow } from '../../../../components/Table'
import { PageTitle } from '../../../../components/UI'

const PageTitleNew = styled(PageTitle)`
  color: #2C3A50;
  margin-bottom: 5px;
`

const BranchList = props => {
  const { branches } = props
  // TableList
  const tableList = branches.map(client => {
    const {
      id,
      name,
      address,
      phoneNumber,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={8}>{name}</td>
        <td colSpan={8}>{address}</td>
        <td colSpan={8}>{phoneNumber}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={8} >Filiali rahbarining F.I.Sh. </th>
      <th colSpan={8} >Manzil </th>
      <th colSpan={8} >Telefon raqami</th>
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
export default BranchList
