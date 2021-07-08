import React from 'react'
import { isEmpty } from 'ramda'

import { Table, TableRow } from '../../../../../components/Table'
import { answerTypeTextList, roleTypeTextList } from '../../../../../constants/backend'

const ExpertsArchiveList = props => {
  const { list } = props
  // TableList
  const tableList = list.map(client => {
    const {
      id,
      answerType,
      comments,
      expert,
      type,
    } = client

    const answerTypeText = answerTypeTextList.object[answerType]
    const typeText = roleTypeTextList.object[type]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>{expert && expert.fullName}</td>
        <td colSpan={6}>{answerTypeText}</td>
        <td colSpan={6}>{comments}</td>
        <td colSpan={6}>{typeText}</td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >Ijrochi </th>
      <th colSpan={6} >Javob </th>
      <th colSpan={6} >Izoh </th>
      <th colSpan={6} >Ekspert roli </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(list)}
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
ExpertsArchiveList.defaultProps = {
  list: [],
}
export default ExpertsArchiveList
