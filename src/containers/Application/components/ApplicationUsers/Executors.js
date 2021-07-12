import React from 'react'
import { isEmpty } from 'ramda'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../../components/Table'

const Executors = props => {
  const { executors } = props

  const tableList = executors.map((client, index) => {
    const {
      fullName,
      phoneNumber,
      role,
    } = client

    // Render
    return (
      <TableRow
        key={index}
      >
        <td colSpan={8}>{fullName}</td>
        <td colSpan={8}>{phoneNumber}</td>
        <td colSpan={8}>{role && role.name}</td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={8} >F.I.O </th>
      <th colSpan={8} >Telefon </th>
      <th colSpan={8} >Lavozim </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(executors)}
    >
      <PageRowTitle name="Markazdan ijrochlar" />
      {tableHead}
      {tableList}
    </Table>

  return (
    <>
      {table}

    </>
  )
}
Executors.defaultProps = {
  executors:[],
}

export default Executors
