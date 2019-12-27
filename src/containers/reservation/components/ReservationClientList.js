import React from 'react'
import { path, prop } from 'ramda'
import PropTypes from 'prop-types'
import { Table, TableCol, TableRow } from '../../../components/Table'
import { InputLabel, SecondarySmallButton } from '../../../components/UI'
import { DisplayFlex } from '../../../components/StyledElems'
import { GENDER } from '../../../constants/backend'

const ReservationClientList = props => {
  const { onOpen, results, loading } = props
  return (
    <div>
      <DisplayFlex justify="space-between" align="center">
        <InputLabel>Основная информация</InputLabel>
        <div>
          <SecondarySmallButton >+ Добавить из базы </SecondarySmallButton>
          <SecondarySmallButton onClick={onOpen} >+ Добавить гостя</SecondarySmallButton>
        </div>
      </DisplayFlex>
      <Table isEmpty={false} loading={loading}>
        <TableRow header={true}>
          <TableCol span={3}>фамилия</TableCol>
          <TableCol span={3}>имя</TableCol>
          <TableCol span={3}>пол</TableCol>
          <TableCol span={5}>паспорт</TableCol>
          <TableCol span={5}>гражданство</TableCol>
          <TableCol span={5}>действие</TableCol>
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
              <TableCol span={3}>{surname}</TableCol>
              <TableCol span={3}>{name}</TableCol>
              <TableCol span={3}>{GENDER[gender]}</TableCol>
              <TableCol span={5}>{passport}</TableCol>
              <TableCol span={5}>{citizenship}</TableCol>
              <TableCol span={5}>-</TableCol>
            </TableRow>
          )
        })}
      </Table>
    </div>

  )
}

ReservationClientList.propTypes = {
  onOpen: PropTypes.func,
  results: PropTypes.array,
  loading: PropTypes.bool
}
export default ReservationClientList
