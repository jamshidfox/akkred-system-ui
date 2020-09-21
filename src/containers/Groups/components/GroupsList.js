import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path } from 'ramda'
import styled from 'styled-components'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import Edit from '../../../images/edit.svg'
import Pagination from '../../../components/Pagination/Pagination'
import RolesCreateModal from './GroupsCreateModal'
import RolesUpdateModal from './GroupsUpdateModal'

const BoxUI = styled(Box)`
  padding: 25px;
`
const GroupsList = props => {
  const { list, createModal, editModal, groupList, deleteModal } = props
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
        <PageTitle name="Группы" >
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
                  <ItemControlButton onClick={() => updateItemModal(role)}>
                    <img src={Edit} alt="Edit" />
                  </ItemControlButton>
                </TableCol>
                <TableCol span={1}>
                  <ItemControlButton onClick={() => deleteModal.onSubmit(id)}>
                    <img src={Trash} alt="Delete" />
                  </ItemControlButton>
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

GroupsList.propTypes = {
  list: PropTypes.object,
  filterActions: PropTypes.object,
  editModal: PropTypes.object,
  groupList: PropTypes.object,
  deleteModal: PropTypes.object,
  createModal: PropTypes.object
}

export default GroupsList
