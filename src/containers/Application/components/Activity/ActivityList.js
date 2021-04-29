import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { Table, TableRow } from '../../../../components/Table'
import { PageTitle } from '../../../../components/UI'

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;
  margin-bottom: 5px;

`
const ActivityList = props => {
  const { branches, } = props
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
      <th colSpan={24} >Faoliyat turini</th>
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
export default ActivityList
