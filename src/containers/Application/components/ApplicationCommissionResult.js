import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { ItemControlButton, PageTitle } from 'components/UI'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { Table, TableCol, TableRow, TableColRight } from '../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../components/UI'
import * as ROUTES from '../../../constants/routes'

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;

`

const ApplicationCommissionResult = props => {
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
      <th colSpan={8} >Эксперт </th>
      <th colSpan={8} >результат </th>
      <th colSpan={8} >comments </th>
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
