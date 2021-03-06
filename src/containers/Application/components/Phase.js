import React from 'react'
import styled from 'styled-components'
import { isEmpty, prop } from 'ramda'
import {
  Form,
} from '../../../components/FormField'
import { Box } from '../../../components/StyledElems'
import { MediumButton, PageTitle } from '../../../components/UI'

import { Table, TableRow } from '../../../components/Table'
import { historyStatus, stepName, stageName } from '../../../constants/backend'
import { Col, Row } from '../../../components/Grid'
import PermissionButton from './PermissionButton'
import RejectCreateModal from './RejectCreateModal'
import ApplicationPhaseDetail from './ApplicationPhaseDetail'

const BoxUI = styled(Box)`
  padding: 25px;
`
const statusColors = {
  closed:'green',
  pros:'blue',
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
  display: flex;
`
const WaitButton = styled(MediumButton)`
  background: #668edd;
  pointer-events: none
`

const Phase = props => {
  const { id, stage, historyStage, initialValues, rejectModal, histories, clientInfo } = props
  const status = prop('status', initialValues)
  const executor = prop('executor', initialValues)
  const deadlineDate = prop('deadlineDate', initialValues)
  const stepText = stageName.object[stage]

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
        <td colSpan={8}>
          {status !== 'open' && (
            <Status color={statusColor}>
              {statusText}
            </Status>
          )}
        </td>

      </TableRow>
    )
  })
  const tableDoc =
    <Table
      isEmpty={isEmpty(historyStage)}
    >
      <PageTitle name="Arizani ijro etish bosqichlari" />
      {tableHeadDoc}
      {tableDocList}
    </Table>
    // History Reject
  const tableHeadHistoryReject =
    <TableRow header={true}>
      <th colSpan={8} >Javobgar </th>
      <th colSpan={8} >Sabab </th>
      <th colSpan={8} >Sana </th>
    </TableRow>

  const tableHistoryRejectList = histories.map(client => {
    const {
      id,
      comment,
      user,
      createdDate,

    } = client

    // Render
    return (
      <TableRow
        key={id}
      >
        <td colSpan={8}>{user.username}</td>
        <td colSpan={8}>{comment}</td>
        <td colSpan={8}>{createdDate}</td>

      </TableRow>
    )
  })
  const tableHistoryReject =
    <Table
      isEmpty={isEmpty(histories)}
    >
      {tableHeadHistoryReject}
      {tableHistoryRejectList}
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
                {(status === 'expertise') ? (

                  <PassButton >
                    <WaitButton onClick={waitModalOpen()}>Ekspertiza</WaitButton>
                  </PassButton>
                ) : (

                  <div>
                    {stage === 'new_sign_by_client' || stage === 'expertise_sign_contract_audit_client' || stage === 'audit_sign_plan_client' || stage === 'commission_vote_participants' || stage === 'post_sign_post_client' || stage === 'new_pay_by_client' || stage === 'expertise_pay_contract_audit_client'
                      ? (<PassButton >
                        <WaitButton onClick={waitModalOpen()}>{stepText}</WaitButton>
                      </PassButton>)
                      : (<div style={{
                        display: 'flex'
                      }}>

                        {id && (

                          <PassButton>
                            <PermissionButton stage={stage} id={id} onClick={() => rejectModal.onOpen()} />
                            <RejectCreateModal {...rejectModal} />
                          </PassButton>

                        )}

                      </div>)
                    }
                  </div>

                )}

              </div>

              <Row gutter={24}>

                <Col span={18}>

                  <ApplicationPhaseDetail executor={executor} clientInfo={clientInfo} initialValues={initialValues} />
                  {tableDoc}

                </Col>
                {histories.length > 0 && (
                  <Col span={6}>
                    <PageTitle name="Rad sabablari" />
                    {tableHistoryReject}

                  </Col>

                )}

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
  histories: [],
}

export default Phase
