import React from 'react'
import { isEmpty } from 'ramda'

import styled from 'styled-components'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Table, TableRow } from '../../../../../components/Table'
import { SecondarySmallButton } from '../../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
`
const DocumentList = props => {
  const { serviceModal, document, onDeleteDocument } = props

  // TableList
  const tableList = document.map(client => {
    const {
      id,
      file,
      name,

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={12}>{name}</td>

        <td colSpan={10} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} target={'_blank'} href={`${file.file}`}>{'Hujjat'}</a></td>

        <ItemControlButton onClick={() => onDeleteDocument(client)}>
          <img src={Trash} alt="Trash" />
        </ItemControlButton>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat nomi </th>
      <th colSpan={10} >Hujjat </th>
      <th colSpan={2} />
    </TableRow>
  const table =
    <Table
      isEmpty={isEmpty(document)}
    >
      {tableHead}
      {tableList}
    </Table>
  return (
    <>
      <AddBtn onClick={() => serviceModal.onOpen()}>Hujjat qo'shish </AddBtn>

      {table}

    </>
  )
}
DocumentList.defaultProps = {
  document:[],
}
export default DocumentList
