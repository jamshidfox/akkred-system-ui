import React from 'react'
import { fromPairs, map, pipe, values, isEmpty } from 'ramda'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { Table, TableCol, TableRow, TableColRight } from '../../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../../components/UI'
import * as ROUTES from '../../../../constants/routes'

const AddBtn = styled(SecondarySmallButton)`
`

const TextDiv = styled('div')`
margin-bottom: 10px;
`

const DocumentList = props => {
  const { serviceModal, document, update, text, onDeleteDocument } = props

  const arrayObjToObj = pipe(map(values), fromPairs)

  const getFormattedListData = list => ({
    list,
    object: arrayObjToObj(list)
  })

  const typeList = getFormattedListData([
    {
      id:'ACCREDITATION_SCOPE_DRAFT',
      name:' Проект области аккредитации ',
    },
    {
      id:'APPLICANT_DETAILS',
      name:'Сведения о заявителе/объекте аккредитации',
    },
    {
      id:'QUALITY_MANAGEMENT_SYSTEM_DOCUMENTATION',
      name:'Документация Системы Менеджмента Качества',
    },
    {
      id:'QUALITY_QUIDE',
      name:'Руководство по качеству',
    }
  ])

  // TableList
  const tableList = document.map(client => {
    const {
      id,
      file,
      type,
      name,

    } = client

    const typeText = typeList.object[type]

    // Render
    return (
      <TableRow
        key={id}
      >

        <td colSpan={8}>{name}</td>

        <td colSpan={8}><a target={'_blank'} href={`${file.file}`}>{'ссылка'}</a></td>

        <ItemControlButton onClick={() => onDeleteDocument(client)}>
          <img src={Trash} alt="Trash" />
        </ItemControlButton>

      </TableRow>
    )
  })

  const tableHead =
    <TableRow header={true}>
      <th colSpan={8} >Названые </th>
      <th colSpan={8} >Документ </th>
      <th colSpan={8} />
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
      {/* {!update && ( */}
      {/*  <AddBtn onClick={() => serviceModal.onOpen()}>добавить документ </AddBtn> */}

      {/* ) } */}
      {/* {update && ( */}
      {/*  <AddBtn > документ </AddBtn> */}

      {/* ) } */}
      <TextDiv>{text}</TextDiv>
      <AddBtn onClick={() => serviceModal.onOpen()}> документы </AddBtn>

      {table}

    </>
  )
}
DocumentList.defaultProps = {
  document:[],
}
export default DocumentList
