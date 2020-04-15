import React, { useState } from 'react'
import {prop, isEmpty, path} from 'ramda'
import styled from 'styled-components'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import Edit from '../../../images/edit.svg'
import RolesCreateModal from './RolesCreateModal'
import RolesUpdateModal from './RolesUpdateModal'
import Pagination from "../../../components/Pagination/Pagination";
import Trash from 'images/trash-2.svg'

const BoxUI = styled(Box)`
  padding: 25px;
`
const linkStyle = {
  textDecoration: 'none'
}
const RolesList = props => {
  const { list, createModal, editModal, groupList } = props
  const [updateItem, setUpdateItem] = useState({})
  const data = prop('results', list)
  const count = path(['data', 'count'], list)
  const updateItemModal = (item) => {
    setUpdateItem(item)
    editModal.onOpen()
  }

  return (
    <>
      <BoxUI>
        <PageTitle name="Должности" >
          <MediumButton onClick={createModal.onOpen}>добавить</MediumButton>
        </PageTitle>

        <Table isEmpty={isEmpty(data)}>
          <TableRow header={true} >
            <TableCol span={22}> название </TableCol>
            <TableCol span={1} />
            <TableCol span={1} />
          </TableRow>
          {data.map(role => {
            const id = prop('id', role)
            const name = prop('name', role)

            return (
              <TableRow key={id}>
                <TableCol span={22}>{name}</TableCol>
                <TableCol span={1}>
                  <span style={linkStyle} onClick={() => updateItemModal(role)}><img src={Edit} alt="Edit" /></span>
                </TableCol>
                <TableCol span={1}>
                  <span style={linkStyle} onClick={() => updateItemModal(role)}><img src={Trash} alt="Delete" /></span>
                </TableCol>

              </TableRow>
            )
          })}

        </Table>
      </BoxUI>
      <Pagination count={count} />
      <RolesCreateModal {...createModal} groupList={groupList} />
      <RolesUpdateModal {...editModal} updateItem={updateItem} groupList={groupList} />

    </>
  )
}

export default RolesList
