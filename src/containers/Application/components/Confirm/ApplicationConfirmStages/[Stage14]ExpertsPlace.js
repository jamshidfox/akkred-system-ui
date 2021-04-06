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
import { Box, FieldWrapper } from '../../../../../components/StyledElems'
import { ExpertsCreateModal, ExpertsList } from '../ExpertsPlace'
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'

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
const ConfirmStageChoiceExpertsPlace = ({ onSubmit, serviceList, serviceModal }) => {
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

              <Label>Reja</Label>

              <Row gutter={24}>

                <Col span={12}>
                  <Field
                    name="plan"
                    label="Reja"
                    component={FileUploadField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="notice"
                    label="Xabarnoma"
                    component={FileUploadField}
                  />
                </Col>
              </Row>

              <Label>Joyiga chiqib o’rganish muddati</Label>

              <Row gutter={24}>

                <Col span={12}>
                  <Field
                    name="from_date"
                    label="dan"
                    component={DateField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="to_date"
                    label="gacha"
                    component={DateField}
                  />
                </Col>
              </Row>
              <ExpertsList branches={serviceList} serviceModal={serviceModal} editModalOpen={editModalOpen} />
              <ExpertsCreateModal {...serviceModal} initialValues={serviceModalItem} />

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Сохранить</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageChoiceExpertsPlace
