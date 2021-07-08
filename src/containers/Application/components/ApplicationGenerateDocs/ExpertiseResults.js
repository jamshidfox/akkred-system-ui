import React from 'react'
import { isEmpty } from 'ramda'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../../components/Table'
import { API_URL } from '../../../../constants/api'
import styled from 'styled-components'

const BoxUI = styled('div')`
  margin-bottom: 25px;
`
const ExpertiseResults = props => {
  const { results } = props

  const tableList = results.map(client => {
    const {
      id,
      expert,
      assignment

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12} >{expert && expert.username }</td>

        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/media/${assignment && assignment.name}`}>Vazifa</a></td>
      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >Ijrochi </th>
      <th colSpan={12} >Hujjat </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(results)}
    >
      {tableHead}
      {tableList}
    </Table>

  return (
    <BoxUI>
      <PageRowTitle name="Ijrochi natijalari" />
      {table}
    </BoxUI>
  )
}
ExpertiseResults.defaultProps = {
  results: [],
}

export default ExpertiseResults
