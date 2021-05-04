import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import {
  Field,
  Form, UniversalStaticSelectField,
} from '../../../components/FormField'
import { Box } from '../../../components/StyledElems'
import { MediumButton, PageTitle } from '../../../components/UI'

import { Table, TableRow } from '../../../components/Table'
import { APPLICATION_LIST, historyStatus, STANDART_LIST } from '../../../constants/backend'
import { Col, Row } from '../../../components/Grid'
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

const PassButton = styled('div')`
  margin-top: 5px;
`

const Phase = props => {
  const { id, stage, historyStage, isExpertise } = props

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
      <Form
        keepDirtyOnReinitialize={true}
        onSubmit={onCreateApplication}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>

              <div style={{
                display: 'flex',
                marginBottom: '20px',
              }}>

                {stage === 'stage_39' && (

                  <PassButton >
                    <MediumButton style={{
                      background: '#83bc15'
                    }} >Ariza Yopildi</MediumButton>
                  </PassButton>
                )}
                {(isExpertise === false && stage === 'stage_14') ? (

                  <PassButton >
                    <MediumButton style={{
                      background: '#a425ff'
                    }} onClick={waitModalOpen()}> Ekspertiza</MediumButton>
                  </PassButton>
                ) : (

                  <div>
                    {stage === 'stage_8' || stage === 'stage_18' || stage === 'stage_25' || stage === 'stage_34'
                      ? (<PassButton >
                        <MediumButton style={{
                          background: '#2541ff'
                        }} onClick={waitModalOpen()}>Buyurtmachini javobini kutish</MediumButton>
                      </PassButton>)
                      : (<div style={{
                        display: 'flex'

                      }}>

                        {id && (

                          <PassButton>

                            <PermissionButton stage={stage} id={id} />

                          </PassButton>

                        )}

                      </div>)
                    }
                  </div>

                )}

                <PassButton>
                  <MediumButton style={{
                    background: '#ff2558'
                  }} onClick={waitModalOpen()}>Rad etish</MediumButton>
                </PassButton>

              </div>

              <Row gutter={24}>

                <Col span={24}>
                  <PageTitle name="Ariza Bosqichlari" />
                  {tableDoc}

                </Col>
                {/*<Col span={6}>*/}
                {/*  <PageTitle name="Reject Bosqichlari" />*/}
                {/*  {tableDoc}*/}

                {/*</Col>*/}
              </Row>

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
