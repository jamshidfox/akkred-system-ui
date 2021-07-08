import React from 'react'
import { isEmpty } from 'ramda'
import styled from 'styled-components'
import { Table, TableRow, } from '../../../../components/Table'
import { PageRowTitle, PageTitle } from '../../../../components/UI'

const PageTitleNew = styled(PageTitle)`
  color: #2C3A50;
  margin-bottom: 5px;

`

const TemplateDocument = props => {
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
      {tableHead}
      {tableList}
    </Table>
  return (
    <>
      <PageRowTitle name="Akkreditatsiyaga tegishli hujjatlar" />
      {table}

    </>
  )
}
TemplateDocument.defaultProps = {
  list: [],
}
export default TemplateDocument
