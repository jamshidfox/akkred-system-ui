import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { Table, TableCol, TableRow, TableColRight } from '../../../components/Table'
import {MediumButton, PageTitle, SecondarySmallButton} from '../../../components/UI'
import { API_URL } from '../../../constants/api'

const PageTitleNew = styled(PageTitle)`
  color: #2C3A50;
  margin-bottom: 5px;

`

const TemplateDocumentList = props => {
  const { list } = props
  // TableList
  const tableList = list.map(client => {
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
        <td colSpan={12}>{name }</td>
        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${file && file.file}`}>hujjat</a></td>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat nomi </th>
      <th colSpan={12} >Hujjat </th>
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(list)}
    >
      <PageTitleNew name="Akkreditatsiyaga tegishli hujjatlar" />
      {tableHead}
      {tableList}
    </Table>
  return (
    <>

      {table}

    </>
  )
}
TemplateDocumentList.defaultProps = {
  list: [],
}
export default TemplateDocumentList
