import React from 'react'
import { isEmpty, } from 'ramda'
import styled from 'styled-components'

import { Table, TableRow } from '../../../../components/Table'
import { SecondarySmallButton } from '../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
`

const StaffList = props => {
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
        <td colSpan={6}>{name}</td>
        <td colSpan={6}>{address}</td>
        <td colSpan={6}>{phoneNumber}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >наименование </th>
      <th colSpan={6} >адрес </th>
      <th colSpan={6} >телефон </th>
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
      <AddBtn > персоналы </AddBtn>

      {table}

    </>
  )
}
export default StaffList
