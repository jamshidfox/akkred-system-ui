import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import { MediumButton, PageTitle } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import { Table, TableRow } from '../../../../../components/Table'
import { documentPlanOrderType } from '../../../../../constants/backend'
import { API_URL } from '../../../../../constants/api'

const BoxUI = styled(Box)`
  padding: 25px;
`

const PageTitleNew = styled(PageTitle)`
  color: #2C3A50;

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
const ConfirmPlanNotice = ({ onSubmit, text, initialValues }) => {
  const plan = prop('plan', initialValues)
  const idAp = prop('id', initialValues)


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
      <PageTitleNew name="Reja" />
      {tablePlanHead}
      {tablePlanList}
    </Table>

  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              {tablePlan}

              <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmPlanNotice
