import React from 'react'
import { prop } from 'ramda'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { Table, TableCol, TableRow } from '../../../components/Table'
import { InputLabel } from '../../../components/UI'
import { DisplayFlex } from '../../../components/StyledElems'
import { CLIENT_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import numberFormat from '../../../utils/numberFormat'

const style = {
  color: '#ffffff',
  textDecoration: 'none'
}
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
          <TableCol span={6}>Тариф</TableCol>
          <TableCol span={2} />
          <TableCol span={2} />
        </TableRow>
        {rules && rules.map(rule => {
          const id = prop('id', rule)
          const percent = numberFormat(prop('percent', rule))
          const fromTime = prop('fromTime', rule)
          const toTime = prop('toTime', rule)
          return (
            <TableRow key={id}>
              <TableCol span={7}>с {fromTime} до {toTime}</TableCol>
              <TableCol span={7}>Процент от стоимости за ночь</TableCol>
              <TableCol span={6}>{percent}%</TableCol>
              <TableCol span={2}>
                <Link style={style} to={sprintf(CLIENT_UPDATE_URL, id)}><img src={Edit} alt="Edit" /></Link>
              </TableCol>
              <TableCol span={2}>
                <Link style={style} to={sprintf(CLIENT_UPDATE_URL, id)}><img src={Trash} alt="Edit" /></Link>
              </TableCol>
            </TableRow>
          )
        })
        }
      </Table>
    </div>

  )
}
export default RuleTimeList
