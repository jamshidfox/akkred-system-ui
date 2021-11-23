import React from 'react'
import styled from 'styled-components'
import { MediumButton, PageRowTitle } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Box } from '../../../../../components/StyledElems'
import { CommissionCreateModal, CommissionList } from '../Commissions'

const BoxUI = styled(Box)`
  padding: 25px;
`

const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
`
const CommissionSendParticipants = ({ onSubmit, commissionList, commissionModal, onDeleteCommission }) => {
  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>

              <PageRowTitle name="Kommisiayni qo`shish" />

              <CommissionList branches={commissionList} serviceModal={commissionModal} onDeletePlace={onDeleteCommission} />
              <CommissionCreateModal {...commissionModal} />

              <DivButton>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </DivButton>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default CommissionSendParticipants
