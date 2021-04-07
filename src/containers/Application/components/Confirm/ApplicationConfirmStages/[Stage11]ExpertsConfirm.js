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
import { ExpertsCreateModal, ExpertsListConfirm } from '../Experts'
import {prop} from "ramda";

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
const ConfirmStageChoiceExpertsConfirm = ({ onSubmit, serviceList, serviceModal, initialValues }) => {
    const expertsPlace = prop('expertsPlace', initialValues)
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
              <Label>Ekspertlar</Label>
              <ExpertsListConfirm branches={expertsPlace} serviceModal={serviceModal} editModalOpen={editModalOpen} />

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

export default ConfirmStageChoiceExpertsConfirm
