import React from 'react'
import { prop, isEmpty } from 'ramda'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import { PARTNERS_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import TransactionCreateModal from './PartnersCreateModal'

const BoxUI = styled(Box)`
  padding: 25px;
`

const PartnersList = props => {
  const { list, createModal } = props

  const data = prop('results', list)
  return (
    <>
      <BoxUI>
        <PageTitle name="Партнеры" >
          <MediumButton onClick={createModal.onOpen}>добавить</MediumButton>
        </PageTitle>

        <Table isEmpty={isEmpty(data)}>
          <TableRow header={true} >
            <TableCol span={6}>Тип партнера</TableCol>
            <TableCol span={12}>внутреннее название компании</TableCol>
            <TableCol span={4}>статус</TableCol>
            <TableCol span={1} />
            <TableCol span={1} />
          </TableRow>
          {data.map(transaction => {
            const id = prop('id', transaction)
            const title = prop('title', transaction)

            return (
              <TableRow key={id}>
                <TableCol span={6}>Туристическая компания</TableCol>
                <TableCol span={12}>{title}</TableCol>
                <TableCol span={4}>Активный</TableCol>
                <TableCol span={1}> <Link style={{
                  color: '#FFF',
                  textDecoration: 'none'
                }} to={sprintf(PARTNERS_UPDATE_URL, id)} ><img src={Edit} alt="Edit" /></Link>
                </TableCol>

                <TableCol span={1}> <Link style={{
                  color: '#FFF',
                  textDecoration: 'none'
                }} to={sprintf(PARTNERS_UPDATE_URL, id)} ><img src={Trash} alt="Edit" /></Link>
                </TableCol>
              </TableRow>
            )
          })}

        </Table>
      </BoxUI>
      <TransactionCreateModal {...createModal} />

    </>
  )
}

export default PartnersList
