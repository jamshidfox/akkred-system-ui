import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { isEmpty, propOr, length, prop, path } from 'ramda'
import { sprintf } from 'sprintf-js'

import { TableCol, Table, TableRow } from '../../../../components/Table'
import { MediumButton, PageTitle } from '../../../../components/UI'
import { PLACING_UPDATE_URL, RESERVATION_CREATE_URL } from '../../../../constants/routes'
import numberFormat from '../../../../utils/numberFormat'
import Edit from '../../../../images/edit.svg'
import Trash from '../../../../images/trash-2.svg'
import { Box } from '../../../../components/StyledElems'

const style = {
  color: '#FFF',
  textDecoration: 'none'
}

const EMP_ARR = []
const PlacingList = props => {
  const { data: list } = props

  const data = propOr(EMP_ARR, 'results', list)
  return (
    <Box padding={'25px'}>
      <PageTitle name="Служба приема" >
        <Link style={style} to={RESERVATION_CREATE_URL} ><MediumButton >добавить</MediumButton></Link>
      </PageTitle>

      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} gutter={10} >
          <TableCol span={2}>КОЛ. ГОСТЕЙ</TableCol>
          <TableCol span={2}>категория</TableCol>
          <TableCol span={2}>подкатегория</TableCol>
          <TableCol span={2}>номер</TableCol>
          <TableCol span={4}>к оплате</TableCol>
          <TableCol span={4}>статус оплаты</TableCol>
          <TableCol span={3}>дата заезда</TableCol>
          <TableCol span={3}>дата выезда</TableCol>
          <TableCol span={1} />
          <TableCol span={1} />

        </TableRow>
        {data.map(placing => {
          const id = prop('id', placing)
          const clients = prop('clients', placing)
          const price = numberFormat(prop('actualPrice', placing))
          const enterDatetime = numberFormat(prop('enterDatetime', placing))
          const leaveDatetime = numberFormat(prop('leaveDatetime', placing))
          const roomNumber = path(['room', 'roomNumber'], placing)
          const roomType = path(['room', 'type', 'name'], placing)
          const roomTypeParent = path(['room', 'typeParent', 'name'], placing)
          return (
            <TableRow gutter={10} key={id}>
              <TableCol span={2}>{length(clients)}</TableCol>
              <TableCol span={2}>{roomTypeParent}</TableCol>
              <TableCol span={2} >{roomType}</TableCol>
              <TableCol span={2} >{roomNumber}</TableCol>
              <TableCol span={4} >{price}</TableCol>
              <TableCol span={4} >''</TableCol>
              <TableCol span={3} >{enterDatetime}</TableCol>
              <TableCol span={3} >{leaveDatetime}</TableCol>
              <TableCol span={1}>
                <Link style={style} to={sprintf(PLACING_UPDATE_URL, placing.id)} ><img src={Edit} alt="Edit" /></Link>
              </TableCol>
              <TableCol span={1}>
                <Link style={style} to={sprintf(PLACING_UPDATE_URL, placing.id)} ><img src={Trash} alt="Edit" /></Link>

              </TableCol>
            </TableRow>
          )
        })}

      </Table>
    </Box>
  )
}

PlacingList.propTypes = {
  data: PropTypes.object
}
export default PlacingList
