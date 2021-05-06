import React, { useState } from 'react'
import styled from 'styled-components'
import { MediumButton } from '../../../../../components/UI'
import {
  Form,
} from '../../../../../components/FormField'
import { Row as RowUI } from '../../../../../components/Grid'
import { Box } from '../../../../../components/StyledElems'
import { ExpertsCreateModal, ExpertsList } from '../Experts'

const BoxUI = styled(Box)`
  padding: 25px;
`
const Label = styled.div`
  margin-bottom: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: ${props => props.theme.color.basic.default};
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const ConfirmStageChoiceExperts = ({ onSubmit, serviceList, serviceModal , application}) => {
  const [serviceModalItem, setServiceModalItem] = useState(false)
  const editModalOpen = (data) => {
    setServiceModalItem(data)
    serviceModal.onOpen()
  }
  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <ExpertsList branches={serviceList} serviceModal={serviceModal} editModalOpen={editModalOpen} />
              <ExpertsCreateModal {...serviceModal} initialValues={serviceModalItem} application={application} />

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageChoiceExperts
