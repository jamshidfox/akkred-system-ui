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
      file,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={6}>{expert.username}</td>
        <td colSpan={6} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/media/${assignment}`}>Vazifa</a></td>
        <td colSpan={6}>{closedDate}</td>
        <td colSpan={6} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/media/${file}`}>Natija</a></td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={6} >Ijrochi </th>
      <th colSpan={6} >Vazifa </th>
      <th colSpan={6} >Bajarilgan sana </th>
      <th colSpan={6} >Natija </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(results)}
    >
      <PageTitleNew name="Ekspertiza natijalari" />
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
