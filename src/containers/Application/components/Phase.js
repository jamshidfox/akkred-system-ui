import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import {
  Form,
} from '../../../components/FormField'
import { Box } from '../../../components/StyledElems'
import { MediumButton, PageTitle } from '../../../components/UI'

import { Table, TableRow } from '../../../components/Table'
import { historyStatus } from '../../../constants/backend'
import PermissionButton from './PermissionButton'

const BoxUI = styled(Box)`
  padding: 25px;
`
const statusColors = {
  closed:'green',
  pros:'blue',
  open:'red'
}

const Status = styled('div')`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid;
  color: ${props => props.color};
  display: inline-block;
  line-height: 16px;
  padding: 3px 12px;
`

const Phase = props => {
  const { id, stage, initialValues } = props

  const history = prop('history', initialValues)
  const historyPay = prop('historyPay', initialValues)
  console.warn(initialValues)
  const onCreateApplication = () => {

  }

  const waitModalOpen = () => {
  }

  const tableHeadDoc =
    <TableRow header={true}>
      <th colSpan={12} >Наименование </th>
      <th colSpan={12} >Статус </th>
    </TableRow>

  const tableDocList = history.map(client => {
    const {
      id,
      name,
      status

    } = client

    const statusText = historyStatus.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}>{name}</td>
        <td colSpan={12}>  <Status color={statusColor}>
          {statusText}
        </Status> </td>

      </TableRow>
    )
  })
  const tableDoc =
    <Table
      isEmpty={isEmpty(history)}
    >
      {tableHeadDoc}
      {tableDocList}
    </Table>



  const tableHead =
    <TableRow header={true}>
      <th colSpan={12} >Наименование </th>
      <th colSpan={12} >Статус </th>
    </TableRow>

  const tableList = historyPay.map(client => {
    const {
      id,
      name,
      text,
      status

    } = client

    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={12}>{name}</td>
        <td colSpan={12}>  <Status color={statusColor}>
          {text}
        </Status> </td>

      </TableRow>
    )
  })
  const table =
    <Table
      isEmpty={isEmpty(historyPay)}
    >
      <PageTitle name="Ariza " />
      {tableHead}
      {tableList}
    </Table>

  return (

    <BoxUI>
      <PageTitle name="Ariza Bosqichi" />
      {tableDoc}
      {table}
      <Form
        keepDirtyOnReinitialize={true}
        onSubmit={onCreateApplication}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>

              {stage === 'stage_39' && (

                <div >
                  <MediumButton style={{
                    background: '#83bc15'
                  }} >Ariza Yopildi</MediumButton>
                </div>
              )}

              <div>
                {stage === 'stage_9' || stage === 'stage_19' || stage === 'stage_25'
                  ? (<div >
                    <MediumButton style={{
                      background: '#2541ff'
                    }} onClick={waitModalOpen()}>Buyurtmachini javobini kutish</MediumButton>
                  </div>)
                  : (<div style={{
                    display: 'flex'

                  }}>

                    {id && (

                      <div>

                        <PermissionButton stage={stage} id={id} />

                      </div>

                    )}

                    {/* <div > */}
                    {/*  <MediumButton style={{ */}
                    {/*    background: '#ff3454' */}
                    {/*  }} >Отклонить</MediumButton> */}
                    {/* </div> */}

                  </div>)
                }
              </div>

            </form>
          )
        }}
      />
    </BoxUI>

  )
}

Phase.defaultProps = {
  history: [],
  historyPay: [],
}

export default Phase
