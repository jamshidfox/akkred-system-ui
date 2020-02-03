import React from 'react'
import { prop } from 'ramda'
import { Table, TableCol, TableRow } from '../../../components/Table'
import { InputLabel } from '../../../components/UI'
import { DisplayFlex } from '../../../components/StyledElems'

const RuleTimeList = props => {
  const {
    rules
  } = props
  return (
    <div>
      <DisplayFlex justify="space-between" align="center">
        <InputLabel>Основная информация</InputLabel>
      </DisplayFlex>
      <Table >
        <TableRow header={true}>
          <TableCol span={7}>Время</TableCol>
          <TableCol span={7}>Способ расчета доплаты</TableCol>
          <TableCol span={7}>Тариф</TableCol>
          <TableCol span={2}>действие</TableCol>
          <TableCol span={1}>действие</TableCol>
        </TableRow>
        {rules && rules.map(rule => {
          const id = prop('id', rule)
          const percent = prop('percent', rule)
          const fromTime = prop('fromTime', rule)
          const toTime = prop('toTime', rule)
          return (
            <TableRow key={id}>
              <TableCol span={7}>{fromTime}-{toTime}</TableCol>
              <TableCol span={7}>Процент от стоимости за ночь</TableCol>
              <TableCol span={7}>{percent}</TableCol>
              <TableCol span={2}>редактировать</TableCol>
              <TableCol span={1} />
            </TableRow>
          )
        })
        }
      </Table>
    </div>

  )
}
export default RuleTimeList
