import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import styled from 'styled-components'
import { ItemControlButton, PageTitle } from 'components/UI'
import { Table, TableCol, TableRow } from '../../../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../../../components/UI'
import {answerCommissionType} from "../../../../../constants/backend";

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;

`

const statusColors = {
  approved: 'green',
  reject: 'red',
  wait: 'blue',
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`

const ApplicationCommissionResultList = props => {
  const { application, results } = props

  const tableList = results.map(client => {
    const {
      id,
      answerType,
      commission,
      comments,
      // expert,
      //
      // closedDate,
      // status,
      // file,
    } = client

    // Render

    const statusText = answerCommissionType.object[answerType]
    const statusColor = statusColors[answerType]
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

export default ApplicationCommissionResultList
