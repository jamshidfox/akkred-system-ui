import { answerCommissionType } from 'constants/backend'
import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { PageTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;

`

const statusColors = {
  approved: 'green',
  reject: 'red',
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`

const ApplicationCommissionResult = props => {
  const { results } = props

  const tableList = results.map(client => {
    const {
      id,
      answerType,
      commission,
      comments,
    } = client

    const statusText = answerCommissionType.object[answerType]
    const statusColor = statusColors[answerType]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={8}>{commission.username}</td>

        <td colSpan={8}><Status color={statusColor}>
          {statusText}
        </Status></td>
        <td colSpan={8}>{comments}</td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={8} >komissiyasi </th>
      <th colSpan={8} >javobi </th>
      <th colSpan={8} >izoh </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(results)}
    >
      <PageTitleNew name="Akrreditatsiya komissiyasi " />
      {tableHead}
      {tableList}
    </Table>

  return (
    <>
      {table}

    </>
  )
}

export default ApplicationCommissionResult
