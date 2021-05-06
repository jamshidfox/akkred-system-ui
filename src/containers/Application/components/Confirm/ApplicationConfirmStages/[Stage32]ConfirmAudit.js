import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import { MediumButton, PageTitle } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import { Table, TableRow } from '../../../../../components/Table'
import { documentType } from '../../../../../constants/backend'
import { API_URL } from '../../../../../constants/api'

const BoxUI = styled(Box)`
  padding: 25px;
`

const PageTitleNew = styled(PageTitle)`
  color: #2C3A50;

`

const ConfirmAudit = ({ onSubmit, text, initialValues }) => {
  const results = prop('documentNews', initialValues)
  const docs = prop('audits', initialValues)
  const additionalDocs = prop('additionalDocs', initialValues)
  // Client
  const tableAuditList = results.map(client => {
    const {
      id,
      name,
      file,
      type,

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
          }} href={`${API_URL}${file.file}`}>Hujjat</a></td>

      </TableRow>
    )
  })
  const tableAuditHead =
    <TableRow header={true}>
      <th colSpan={8} >Hujjat nomi </th>
      <th colSpan={8} >Turi </th>

      <th colSpan={8} >Havola </th>
    </TableRow>

  const tableAudit =
    <Table
      isEmpty={isEmpty(results)}
    >
      <PageTitleNew name="Murojaatchiga tegishli hujjatlar" />
      {tableAuditHead}
      {tableAuditList}
    </Table>
  // Doc
  const tableHeadDoc =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat nomi </th>
      <th colSpan={12} >havola </th>
    </TableRow>

  const tableDocList = docs.map(client => {
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
          }} href={`${file.file}`}>Hujjat</a></td>

      </TableRow>
    )
  })
  const tableDoc =
    <Table
      isEmpty={isEmpty(docs)}
    >
      <PageTitleNew name="Baholashga tegishli hujjatlar" />
      {tableHeadDoc}
      {tableDocList}
    </Table>

  // Add Doc
  const tableAddDocList = additionalDocs.map(client => {
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
          }} href={`${file.file}`}>Hujjat</a></td>

      </TableRow>
    )
  })
  const tableAddDocHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat nomi </th>

      <th colSpan={12} >Havola </th>
    </TableRow>

  const tableAddDoc =
    <Table
      isEmpty={isEmpty(additionalDocs)}
    >
      <PageTitleNew name="Qo'shimcha hujjatlar" />
      {tableAddDocHead}
      {tableAddDocList}
    </Table>

  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              {tableDoc}
              {tableAudit}
              {tableAddDoc}

              <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <MediumButton type="submit">{text}</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmAudit
