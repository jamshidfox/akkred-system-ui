import React from 'react'
import { isEmpty, } from 'ramda'
import styled from 'styled-components'
import { PageTitle } from 'components/UI'
import { Table, TableRow } from '../../../components/Table'
import { API_URL } from '../../../constants/api'
import { documentType } from '../../../constants/backend'

const PageTitleNew = styled(PageTitle)`
 color: #2C3A50;
  margin-bottom: 5px;

`

const ApplicationExpertPlaceResult = props => {
  const { results, docs } = props

  const tableList = results.map(client => {
    const {
      id,
      name,
      file,

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}>{name}</td>

        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}${file.file}`}>Документ</a></td>

      </TableRow>
    )
  })
  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >Наименование </th>
      <th colSpan={12} >ссылка </th>
    </TableRow>

  const tableHeadDoc =
    <TableRow header={true}>
      <th colSpan={8} >Наименование </th>
      <th colSpan={8} >тип </th>
      <th colSpan={8} >ссылка </th>
    </TableRow>
  const tableAudit =
    <Table
      isEmpty={isEmpty(results)}
    >
      <PageTitleNew name="Auditga tegishli hujjatlar" />
      {tableHead}
      {tableList}
    </Table>
  const tableDocList = docs.map(client => {
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
        <td colSpan={8}>{name}</td>
        <td colSpan={8}>{statusText}</td>

        <td colSpan={8} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}${file.file}`}>Документ</a></td>

      </TableRow>
    )
  })
  const tableDoc =
    <Table
      isEmpty={isEmpty(docs)}
    >
      <PageTitleNew name="Murojaatchiga tegishli hujjatlar" />
      {tableHeadDoc}
      {tableDocList}
    </Table>

  return (
    <>
      {tableAudit}
      {tableDoc}

    </>
  )
}

ApplicationExpertPlaceResult.defaultProps = {
  results: [],
  audits: [],
}

export default ApplicationExpertPlaceResult
