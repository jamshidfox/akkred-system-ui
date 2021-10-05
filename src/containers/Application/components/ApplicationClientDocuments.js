import React from 'react'
import { isEmpty, } from 'ramda'
import { PageRowTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'
import { documentType } from '../../../constants/backend'

const ApplicationClientDocument = props => {
  const { docs } = props

  const tableHeadDoc =
    <TableRow header={true}>
      <th colSpan={8} >Turi </th>
      <th colSpan={8} >Yuklangan hujjat nomi</th>
      <th colSpan={8} >Hujjat </th>
    </TableRow>

  const tableDocList = docs.map((client, index) => {
    const {
      id,
      name,
      file,
      type

    } = client

    const statusText = documentType.object[type]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={8}>{statusText}</td>
        <td colSpan={8}>{name}</td>
        <td colSpan={8} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${file.file}`}>Hujjat</a></td>

      </TableRow>
    )
  })
  const tableDoc =
    <Table
      isEmpty={isEmpty(docs)}
    >
      <PageRowTitle name="Murojaatchiga tegishli hujjatlar" />
      {tableHeadDoc}
      {tableDocList}
    </Table>

  return (
    <>
      {tableDoc}

    </>
  )
}

ApplicationClientDocument.defaultProps = {
  docs: [],
}

export default ApplicationClientDocument
