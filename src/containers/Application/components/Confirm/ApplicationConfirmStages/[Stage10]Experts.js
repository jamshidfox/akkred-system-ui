import React, { useState } from 'react'
import styled from 'styled-components'
import { MediumButton, Modal } from '../../../../../components/UI'
import {
  DateField,
  Field,
  Form,
  InputField,
  UniversalSearchField,
  UniversalStaticSelectField,
  ImageUploadField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import * as API from '../../../../../constants/api'
import { RESULT_LIST } from '../../../../../constants/backend'
import UniversalMultiSelectField from '../../../../../components/FormField/Select/UniversalMultiSelectField'
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
              <Label>Основная информация</Label>
              <ExpertsList branches={serviceList} serviceModal={serviceModal} editModalOpen={editModalOpen} />
              <ExpertsCreateModal {...serviceModal} initialValues={serviceModalItem} application={application} />

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Tanlanash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageChoiceExperts
