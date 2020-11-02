import React from 'react'
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
const ConfirmStageChoiceExperts = ({ onSubmit }) => {
  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Label>Основная информация</Label>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="experts"
                    label="experts"
                    parent={parent}
                    // params={{ children_only: false }}
                    api={API.EMPLOYEES_LIST}
                    component={UniversalMultiSelectField}
                  />
                </Col>

              </Row>

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

export default ConfirmStageChoiceExperts