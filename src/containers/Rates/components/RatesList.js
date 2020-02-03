import React from 'react'
import { Link } from 'react-router-dom'
import { prop, isEmpty } from 'ramda'
import { sprintf } from 'sprintf-js'
import styled from 'styled-components'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { RATES_UPDATE_URL } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'
import { Box } from '../../../components/StyledElems'
import dateFormat from '../../../utils/dateFormat'

const BoxUI = styled(Box)`
  padding: 25px;
`
const style = {
  color: '#FFF',
  textDecoration: 'none'
}
const RatesList = props => {
  const { list } = props

  const data = prop('results', list)
  return (
    <BoxUI>
      <PageTitle name="Тарифы и цены номерного фонда" >
        <Link style={style} to={`/finance/rates/create`} ><MediumButton >добавить</MediumButton></Link>
      </PageTitle>

      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true} >
          <TableCol span={6}>НАЗВАНИЕ ТАРИФА</TableCol>
          <TableCol span={6}>ПОДКАТЕГОРИЯ</TableCol>
          <TableCol span={5}>ДАТА НАЧАЛО</TableCol>
          <TableCol span={5}>ДАТА ОКОНЧАНИЕ</TableCol>
          <TableCol span={1} />
          <TableCol span={1} />

        </TableRow>
        {data.map(rates => (
          <TableRow>
            <TableCol span={6}>{rates.name}</TableCol>
            <TableCol span={6}>{rates.roomCategory.name}</TableCol>
            <TableCol span={5} >{dateFormat(rates.fromDate)}</TableCol>
            <TableCol span={5} >{dateFormat(rates.toDate)}</TableCol>
            <TableCol span={1}>
              <Link style={style} to={sprintf(RATES_UPDATE_URL, rates.id)} ><img src={Edit} alt="Edit" /></Link>
            </TableCol>
            <TableCol span={1}>
              <Link style={style} to={''} ><img src={Trash} alt="Edit" /></Link>
            </TableCol>
          </TableRow>
        ))}

      </Table>
    </BoxUI>
  )
}

export default RatesList
