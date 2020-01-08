import React from 'react'
import { isEmpty, path, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, TableCol, TableRow, TableColRight } from '../../../../components/Table'
import { InputLabel, SecondarySmallButton, MediumButton } from '../../../../components/UI'
import { DisplayFlex } from '../../../../components/StyledElems'
import { GENDER } from '../../../../constants/backend'

const ButtonRight = styled.div`
  text-align: right;
  margin-top: 20px;
`

const emptyText = 'Пожалуйста, добавьте гостя для дальнейших дейсвий в системе'
const ReservationClientList = props => {
  const {
    onOpen,
    results,
    loading,
    onTabChange,
    onExistingOpen
  } = props
  const emptyClients = isEmpty(results)
  return (
    <div>
      <DisplayFlex justify="space-between" align="center">
        <InputLabel>Основная информация</InputLabel>
        <div>
          <SecondarySmallButton onClick={onExistingOpen}>+ Добавить из базы </SecondarySmallButton>
          <SecondarySmallButton onClick={onOpen} >+ Добавить гостя</SecondarySmallButton>
        </div>
      </DisplayFlex>
      <Table isEmpty={emptyClients} loading={loading} emptyText={emptyText}>
        <TableRow header={true}>
          <TableCol span={5}>фамилия</TableCol>
          <TableCol span={5}>имя</TableCol>
          <TableCol span={3}>пол</TableCol>
          <TableCol span={5}>паспорт</TableCol>
          <TableCol span={3}>гражданство</TableCol>
          <TableColRight span={3}>действие</TableColRight>
        </TableRow>
        {results.map(client => {
          const name = prop('name', client)
          const surname = prop('surname', client)
          const gender = prop('gender', client)
          const series = path(['clientDocument', 'series'], client)
          const number = path(['clientDocument', 'number'], client)
          const citizenship = path(['citizenship', 'name'], client)
          const passport = series + number
          return (
            <TableRow key={client.id}>
              <TableCol span={5}>{surname}</TableCol>
              <TableCol span={5}>{name}</TableCol>
              <TableCol span={3}>{GENDER[gender]}</TableCol>
              <TableCol span={5}>{passport}</TableCol>
              <TableCol span={3}>{citizenship}</TableCol>
              <TableColRight span={3}>-</TableColRight>
            </TableRow>
          )
        })}
      </Table>
      {!emptyClients && (
        <ButtonRight>
          <MediumButton onClick={onTabChange}>продолжить</MediumButton>
        </ButtonRight>
      )}
    </div>

  )
}

ReservationClientList.propTypes = {
  onOpen: PropTypes.func,
  onExistingOpen: PropTypes.func,
  onTabChange: PropTypes.func,
  results: PropTypes.array,
  loading: PropTypes.bool
}
export default ReservationClientList
