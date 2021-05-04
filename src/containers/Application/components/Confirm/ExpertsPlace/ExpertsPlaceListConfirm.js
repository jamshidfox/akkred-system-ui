import React from 'react'
import { isEmpty } from 'ramda'
import { Table, TableRow } from '../../../../../components/Table'

const ExpertsPlaceListConfirm = props => {
  const { branches } = props
  // TableList
  const tableList = branches.map(client => {
    const {
      id,
      type,
      expert,
      address,
      date,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}>{expert.fullName}</td>
        <td colSpan={12}>{date}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >Expert</th>
      <th colSpan={12} >Data </th>
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
ExpertsPlaceListConfirm.defaultProps = {
  branches: [],
}
export default ExpertsPlaceListConfirm
