import React, { useState } from 'react'
import { prop, isEmpty, path } from 'ramda'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { TableCol, Table, TableRow, TableActions } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import { PARTNERS_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import Pagination from '../../../components/Pagination/Pagination'
import TransactionCreateModal from './PartnersCreateModal'
import PartnersUpdateModal from './PartnersUpdateModal'
import PartnersListFilterForm from './PartnersListFilterForm'

const BoxUI = styled(Box)`
  padding: 25px;
`
const linkStyle = {
  textDecoration: 'none'
}
const PartnersList = props => {
  const { list, createModal, editModal, filterActions } = props
  const [updateItem, setUpdateItem] = useState({})

  const data = prop('results', list)
  const count = path(['data', 'count'], list)
  const loading = prop('loading', list)

  const updateItemModal = (item) => {
    setUpdateItem(item)
    editModal.onOpen()
  }

  const tableActions = (
    <TableActions
      filterForm={<PartnersListFilterForm />}
      filterActions={filterActions}
    />
  )

  return (
    <>
      <BoxUI>
        <PageTitle name="Партнеры" >
          <MediumButton onClick={createModal.onOpen}>добавить</MediumButton>
        </PageTitle>

        <Table isEmpty={isEmpty(data)} filterForm={tableActions} loading={loading}>
          <TableRow header={true} >
            <TableCol span={6}>Тип партнера</TableCol>
            <TableCol span={12}>внутреннее название компании</TableCol>
            <TableCol span={4}>статус</TableCol>
            <TableCol span={2} />
            <TableCol span={1} />
          </TableRow>
          {data.map(partners => {
            const id = prop('id', partners)
            const title = prop('title', partners)

            return (
              <TableRow key={id}>
                <TableCol span={6}>Туристическая компания</TableCol>
                <TableCol span={12}>{title}</TableCol>
                <TableCol span={4}>Активный</TableCol>
                <TableCol span={2}>
                  <span style={linkStyle} onClick={() => updateItemModal(partners)}><img src={Edit} alt="Edit" /></span>
                </TableCol>

              </TableRow>
            )
          })}

        </Table>
      </BoxUI>
      <Pagination count={count} />
      <TransactionCreateModal {...createModal} />
      <PartnersUpdateModal {...editModal} updateItem={updateItem} />

    </>
  )
}

export default PartnersList
