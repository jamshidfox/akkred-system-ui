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
  const { id, stage, historyStage } = props

  const onCreateApplication = () => {

  }

  const waitModalOpen = () => {
  }

  const tableHeadDoc =
    <TableRow header={true}>
      <th colSpan={8} >Bosqich </th>
      <th colSpan={8} >Javobgar </th>
      <th colSpan={8} >Status </th>
    </TableRow>

  const tableDocList = historyStage.map(client => {
    const {
      id,
      name,
      status,
      role,

    } = client

    const statusText = historyStatus.object[status]
    const statusColor = statusColors[status]

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={8}>{name}</td>
        <td colSpan={8}>{role}</td>
        <td colSpan={8}> <Status color={statusColor}>
          {statusText}
        </Status> </td>

      </TableRow>
    )
  })
  const tableDoc =
    <Table
      isEmpty={isEmpty(historyStage)}
    >
      {tableHeadDoc}
      {tableDocList}
    </Table>

  return (

    <BoxUI>
      <PageTitle name="Ariza Bosqichlari" />
      {tableDoc}
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
                {stage === 'stage_8' || stage === 'stage_18' || stage === 'stage_25' || stage === 'stage_34'
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
  historyStage: [],
  historyPay: [],
}

export default Phase
