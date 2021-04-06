import React from 'react'
import { isEmpty, } from 'ramda'
import styled from 'styled-components'

import { Table, TableRow } from '../../../../components/Table'
import { SecondarySmallButton } from '../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
`

const AccreditationList = props => {
  const { branches, } = props
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
      <th colSpan={8} >наименование </th>
      <th colSpan={8} >адрес </th>
      <th colSpan={8} >телефон </th>
      <th />
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

      <AddBtn >  Аккредитован другим органом  </AddBtn>

      {table}

    </>
  )
}
export default AccreditationList
