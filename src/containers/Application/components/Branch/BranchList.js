import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from 'images/edit.svg'
import Trash from 'images/trash-2.svg'
import { ItemControlButton } from 'components/UI'
import { Table, TableCol, TableRow, TableColRight } from '../../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`
const BranchList = props => {
  const { serviceModal, branches } = props
  const emptyText = 'Пожалуйста, добавьте услугу для дальнейших дейсвий в системе'
  const emptyService = isEmpty(branches)
  return (
    <>
      <Table isEmpty={false}>
        <TableRow header={true} gutter={10} align={'center'}>
          <TableCol span={5}>
            <AddBtn onClick={() => serviceModal.onOpen()}>+ добавить услугу </AddBtn>
          </TableCol>
          <TableCol span={5}>темп начисления</TableCol>
          <TableCol span={4}>цена</TableCol>
          <TableCol span={3}>кол-во</TableCol>
          <TableCol span={4}>Общая сумма</TableCol>
          <TableColRight span={3}>действие</TableColRight>
        </TableRow>
      </Table>
      <Table isEmpty={emptyService} loading={false} emptyText={emptyText}>
        {branches.map((branch, index) => {
          const address = prop('address', branch)
          const phoneNumber = prop('phoneNumber', branch)
          const fullName = prop('fullName', branch)
          return (
            <TableRow key={index} gutter={10}>
              <TableCol span={5}>{address}</TableCol>
              <TableCol span={5}>{phoneNumber}</TableCol>
              <TableCol span={3}>{fullName}</TableCol>
              <TableColRight span={3}>
                {/* <ItemControlButton onClick={() => editModalOpen(service)}> */}
                {/*  <img src={Edit} alt="Edit" /> */}
                {/* </ItemControlButton> */}
                {/* <ItemControlButton> */}
                {/*  <img src={Trash} alt="Delete" onClick={() => onDeleteService(service.serviceType.id)} /> */}
                {/* </ItemControlButton> */}
              </TableColRight>
            </TableRow>
          )
        })}
      </Table>

    </>
  )
}
export default BranchList
