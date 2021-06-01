import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import { PageRowTitle } from '../../../../../components/UI'
import { documentPlanOrderType } from '../../../../../constants/backend'
import { Box } from '../../../../../components/StyledElems'
import { Table, TableRow } from '../../../../../components/Table'
import EImzoForm from '../../../../EImzoDialog/EImzoForm'
import { API_URL } from '../../../../../constants/api'

const BoxUI = styled(Box)`
  padding: 25px;
`

const statusColors = {
  process: 'green',
  confirm: 'green',
  wait: 'green',
  reject: 'red',
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`
const ConfirmStageChoiceExpertsSign = ({ onSuccess, serviceModal, initialValues }) => {
  const idAp = prop('id', initialValues)
  const plan = prop('plan', initialValues)

  // Plan
  const tablePlanList = plan.map(client => {
    const {
      id,
      status,

    } = client

    const statusText = documentPlanOrderType.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12} style={{
          color: '#0f22ff'
        }}><a style={{
            color: '#0f22ff'
          }} href={`${API_URL}/main/applications/${idAp}/plan`}>Reja</a></td>
        <td colSpan={12} ><Status color={statusColor}>
          {statusText}
        </Status> </td>
      </TableRow>
    )
  })
  const tablePlanHead =
    <TableRow header={true}>
      <th colSpan={12} >Hujjat </th>
      <th colSpan={12} >Status </th>

    </TableRow>
  const tablePlan =
    <Table
      isEmpty={isEmpty(plan)}
    >
      {tablePlanHead}
      {tablePlanList}
    </Table>

  return (

    <BoxUI >
      <PageRowTitle name="Reja" />
      {tablePlan}
      <EImzoForm text={'sad'} onSubmit={onSuccess} />
    </BoxUI>

  )
}

export default ConfirmStageChoiceExpertsSign
