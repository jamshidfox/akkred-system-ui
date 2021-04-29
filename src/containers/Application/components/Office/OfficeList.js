import React from 'react'
import { isEmpty, } from 'ramda'
import styled from 'styled-components'
import { Table, TableRow } from '../../../../components/Table'
import { SecondarySmallButton } from '../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
`

const OfficeList = props => {
  const { branches } = props
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
      <th colSpan={8} >Nomi </th>
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
export default OfficeList
