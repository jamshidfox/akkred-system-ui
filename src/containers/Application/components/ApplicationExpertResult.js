import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { PageTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'
import { expertAnswerType } from '../../../constants/backend'
import { API_URL } from '../../../constants/api'

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;

`

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`

const statusColors = {
  process: 'green',
  confirm: 'green',
  wait: 'green',
  reject: 'red',
}

const ApplicationExpertResult = props => {
  const { results } = props

  const tableList = results.map(client => {
    const {
      id,
      expert,
      assignment,
      closedDate,
      status,
      file,
      act,
    } = client

    const statusText = expertAnswerType.object[status]
    const statusColor = statusColors[status]

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
          }} href={`${API_URL}/media/${assignment}`}>Задание</a></td>
        <td colSpan={4}>{closedDate}</td>
        <td colSpan={5}><Status color={statusColor}>
          {statusText}
        </Status> </td>
        <td colSpan={3} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/media/${file}`}>результат</a></td>
        <td colSpan={2} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/media/${act}`}>Акты</a></td>

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
      isEmpty={isEmpty(results)}
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

ApplicationExpertResult.defaultProps = {
  results: [],
}

export default ApplicationExpertResult
