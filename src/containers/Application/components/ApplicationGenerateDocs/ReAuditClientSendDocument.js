import React from 'react'
import { isEmpty } from 'ramda'
import { PageRowTitle } from '../../../../components/UI'

import { Table, TableRow } from '../../../../components/Table'

const ReAuditClientSendDocument = ({ planWorks, results }) => {
  // Client
  const tablePlanProofWorksList = results.map(client => {
    const {
      id,
      file,

    } = client
    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}>Hisobot</td>

        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${file && file.file}`}>Hujjat</a></td>

      </TableRow>
    )
  })
  const tablePlanProofWorksHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat nomi </th>
      <th colSpan={12} >Havola </th>
    </TableRow>

  const tablePlanProofWorks =
    <Table
      isEmpty={isEmpty(results)}
    >
      {tablePlanProofWorksHead}
      {tablePlanProofWorksList}
    </Table>
  // Doc
  const tableHeadPlanWorks =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat nomi </th>
      <th colSpan={12} >Havola </th>
    </TableRow>

  const tablePlanWorksList = planWorks.map(client => {
    const {
      id,
      file,
    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}>Harakatlar rejasini</td>

        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${file && file.file}`}>Hujjat</a></td>

      </TableRow>
    )
  })
  const tablePlanWorks =
    <Table
      isEmpty={isEmpty(planWorks)}
    >
      {tableHeadPlanWorks}
      {tablePlanWorksList}
    </Table>

  return (

    <>
      <PageRowTitle name="Hisobot" />
      {tablePlanWorks}
      {tablePlanProofWorks}

    </>

  )
}
ReAuditClientSendDocument.defaultProps = {
  results: [],
  planWorks: [],
}

export default ReAuditClientSendDocument
