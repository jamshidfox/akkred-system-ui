import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'

import { Table, TableRow } from '../../../../components/Table'
import { SecondarySmallButton } from '../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`

const MobileComplexList = props => {
  const { branches } = props
  // TableList
  const tableList = branches.map(client => {
    const {
      id,
      name,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={24}>{name}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={24} >наименование </th>
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
      <AddBtn >  мобильный испытательный комплексы </AddBtn>
      {table}

    </>
  )
}
export default MobileComplexList
