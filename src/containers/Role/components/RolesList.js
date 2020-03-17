import React, { useState } from 'react'
import { prop, isEmpty } from 'ramda'
import styled from 'styled-components'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import Edit from '../../../images/edit.svg'
import RolesCreateModal from './RolesCreateModal'
import RolesUpdateModal from './RolesUpdateModal'

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
            <TableCol span={12}> название </TableCol>
            <TableCol span={2} />
          </TableRow>
          {data.map(role => {
            const id = prop('id', role)
            const name = prop('name', role)

            return (
              <TableRow key={id}>
                <TableCol span={12}>{name}</TableCol>
                <TableCol span={2}>
                  <span style={linkStyle} onClick={() => updateItemModal(role)}><img src={Edit} alt="Edit" /></span>
                </TableCol>

              </TableRow>
            )
          })}

        </Table>
      </BoxUI>
      <RolesCreateModal {...createModal} groupList={groupList} />
      <RolesUpdateModal {...editModal} updateItem={updateItem} groupList={groupList} />

    </>
  )
}

export default RolesList
