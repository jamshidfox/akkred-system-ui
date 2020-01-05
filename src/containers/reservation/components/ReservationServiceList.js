import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, TableCol, TableRow, TableColRight } from '../../../components/Table'
import { MediumButton, SecondarySmallButton } from '../../../components/UI'

const AddBtn = styled(SecondarySmallButton)`
  padding-left: 0;
`
const ButtonRight = styled.div`
  text-align: right;
  margin-top: 20px;
`
const emptyText = 'Пожалуйста, добавьте услугу для дальнейших дейсвий в системе'
const ReservationClientList = props => {
  const {
    services,
    onServiceOpen,
    onTabChange
  } = props
  const emptyService = isEmpty(services)
  return (
    <>
      <Table isEmpty={false}>
        <TableRow header={true} gutter={10} align={'center'}>
          <TableCol span={5}>
            <AddBtn onClick={onServiceOpen}>+ добавить услугу </AddBtn>
          </TableCol>
          <TableCol span={5}>темп начисления</TableCol>
          <TableCol span={4}>цена</TableCol>
          <TableCol span={3}>кол-во</TableCol>
          <TableCol span={4}>Общая сумма</TableCol>
          <TableColRight span={3}>действие</TableColRight>
        </TableRow>
      </Table>
      <Table isEmpty={emptyService} loading={false} emptyText={emptyText}>
        {services.map(service => {
          const serviceClientsCount = prop('serviceClientsCount', service)
          const name = path(['serviceType', 'name'], service)
          const type = path(['type', 'name'], service)
          return (
            <TableRow key={service.id} gutter={10}>
              <TableCol span={5}>{name}</TableCol>
              <TableCol span={5}>{type}</TableCol>
              <TableCol span={4}>{0}</TableCol>
              <TableCol span={3}>{serviceClientsCount}</TableCol>
              <TableCol span={4}>{0}</TableCol>
              <TableColRight span={3}>-</TableColRight>
            </TableRow>
          )
        })}
      </Table>
      {!emptyService && (
        <ButtonRight>
          <MediumButton onClick={onTabChange}>продолжить</MediumButton>
        </ButtonRight>
      )}
    </>

  )
}

ReservationClientList.propTypes = {
  onServiceOpen: PropTypes.func,
  onTabChange: PropTypes.func,
  services: PropTypes.array,
}
export default ReservationClientList
