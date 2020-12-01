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

const ApplicationExpertResult = props => {
  const { contracts, application, results } = props

  const tableList = results.map(client => {
    const {
      id,
      expert,
      assignment,
      closedDate,
      status,
      file,
      // price,
      // rate,
      // count,
      // totalAmount,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={5}>{expert.username}</td>
        <td colSpan={5} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/media/${assignment.file}`}>Задание</a></td>
        <td colSpan={4}>{closedDate}</td>
        <td colSpan={5}>{status}</td>
        <td colSpan={3} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/media/${file}`}>результат</a></td>
        <td colSpan={2} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`http://127.0.0.1:8000/main/applications/${application}/act`}>Акты</a></td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={5} >Эксперт </th>
      <th colSpan={5} >Задание </th>
      <th colSpan={4} >дата зкарытие </th>
      <th colSpan={5} >статус </th>
      <th colSpan={3} >результат </th>
      <th colSpan={2} > Акты выпол.работ </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(contracts)}
    >
      <PageTitleNew name="EKSPERTIZA natijalari" />
      {tableHead}
      {tableList}
    </Table>

  return (
    <>
      {table}

    </>
  )
}

export default ApplicationExpertResult
