import React from 'react'
import { isEmpty } from 'ramda'

import { Table, TableRow } from '../../../../../components/Table'
import { API_URL } from '../../../../../constants/api'
import { answerTypeTextList, roleTypeTextList } from '../../../../../constants/backend'

const ExpertsList = props => {
  const { branches } = props
  // TableList
  const tableList = branches.map(client => {
    const {
      id,
      expert,
      type,
    } = client

    const typeText = roleTypeTextList.object[type]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}>{expert && expert.fullName}</td>
        <td colSpan={12}>{typeText}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >Ijrochi </th>
      <th colSpan={6} >Ekspert roli </th>
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
ExpertsList.defaultProps = {
  branches: [],
}
export default ExpertsList
