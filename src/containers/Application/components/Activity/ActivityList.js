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
