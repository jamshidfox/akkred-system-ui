import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import styled from 'styled-components'
import { ItemControlButton, PageTitle } from 'components/UI'
import { Table, TableCol, TableRow } from '../../../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;

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
    return (
      <TableRow
        key={id}
      >
        <td colSpan={8}>{commission.username}</td>

        <td colSpan={8}>{answerType}</td>
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
