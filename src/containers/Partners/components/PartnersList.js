import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { prop, isEmpty, path } from 'ramda'
import TransactionCreateModal from './PartnersCreateModal'
import PartnersUpdateModal from './PartnersUpdateModal'
import PartnersListFilterForm from './PartnersListFilterForm'
import {
  Table,
  TableCol,
  TableRow,
  TableActions,
  EditDeleteButtons
} from '~/components/Table'
import { MediumButton, PageTitle } from '~/components/UI'
import { Box } from '~/components/StyledElems'
import Pagination from '~/components/Pagination/Pagination'
import Toggle from '~/components/UI/Toggle'

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
      <Box padding={'25px'}>
        <PageTitle name="Партнеры" >
          <MediumButton onClick={createModal.onOpen}>
            Добавить
          </MediumButton>
        </PageTitle>

        <Table
          isEmpty={isEmpty(data)}
          filterForm={tableActions}
          loading={loading}>
          <TableRow header={true}>
            <TableCol span={6}>Тип партнера</TableCol>
            <TableCol span={12}>Внутреннее название компании</TableCol>
            <TableCol span={4}>Статус</TableCol>
            <TableCol span={2} />
          </TableRow>
          {data.map(partners => {
            const id = prop('id', partners)
            const name = prop('name', partners)
            const status = prop('status', partners)

            return (
              <TableRow key={id} align={'center'}>
                <TableCol span={6}>Туристическая компания</TableCol>
                <TableCol span={12}>{name}</TableCol>
                <TableCol span={4}>
                  <Toggle checked={status} disabled={true} />
                </TableCol>
                <TableCol span={2}>
                  <EditDeleteButtons
                    onEdit={() => updateItemModal(partners)}
                    onDelete={() => null}
                  />
                </TableCol>
              </TableRow>
            )
          })}

        </Table>
      </Box>
      <Pagination count={count} />
      <TransactionCreateModal {...createModal} />
      <PartnersUpdateModal {...editModal} updateItem={updateItem} />
    </>
  )
}

PartnersList.propTypes = {
  list: PropTypes.object.isRequired,
  createModal: PropTypes.object.isRequired,
  editModal: PropTypes.object.isRequired,
  filterActions: PropTypes.object.isRequired
}

export default PartnersList
