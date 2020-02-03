import React from 'react'
import { Link } from 'react-router-dom'
import { sprintf } from 'sprintf-js'
import { prop, isEmpty } from 'ramda'
import styled from 'styled-components'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import dateFormat from '../../../utils/dateFormat'
import { SETTING_RULE_GROUP_CREATE_URL, SETTING_RULE_GROUP_UPDATE_PATH } from '../../../constants/routes'
import Edit from '../../../images/edit.svg'
import Trash from '../../../images/trash-2.svg'

const BoxUI = styled(Box)`
  padding: 25px;
`
const style = {
  color: '#FFF',
  textDecoration: 'none'
}

const RuleGroupList = props => {
  const { list, } = props

  const data = prop('results', list)
  return (
    <BoxUI>
      <PageTitle name="Правила раннего заезда и позднего выезда">
        <Link style={style} to={`${SETTING_RULE_GROUP_CREATE_URL}`}><MediumButton>добавить</MediumButton></Link>
      </PageTitle>

      <Table isEmpty={isEmpty(data)}>
        <TableRow header={true}>
          <TableCol span={8}>сумма</TableCol>
          <TableCol span={6}>дата начало</TableCol>
          <TableCol span={6}>дата окончание</TableCol>
          <TableCol span={2} />
          <TableCol span={2} />
        </TableRow>
        {data.map(group => {
          const id = prop('id', group)
          const name = prop('name', group)
          const fromDate = dateFormat(prop('fromDate', group))
          const toDate = dateFormat(prop('toDate', group))

          return (
            <TableRow key={id}>
              <TableCol span={8}>{name}</TableCol>
              <TableCol span={6}>{fromDate}</TableCol>
              <TableCol span={6}>{toDate}</TableCol>
              <TableCol span={2}><Link style={style} to={sprintf(SETTING_RULE_GROUP_UPDATE_PATH, id)}><img
                src={Edit} alt="Edit" /></Link>
              </TableCol>
              <TableCol span={2}>
                <Link style={style} to={''}><img src={Trash} alt="Edit" /></Link>
              </TableCol>
            </TableRow>
          )
        })}

      </Table>
    </BoxUI>

  )
}

export default RuleGroupList
