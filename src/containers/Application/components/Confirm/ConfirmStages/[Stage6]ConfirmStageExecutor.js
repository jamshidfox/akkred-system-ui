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

const Row = styled(RowUI)`
  margin-bottom: 40px;
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

const listDocument = [

  {
    id:'one',
    name:'100',
  },
  {
    id:'two',
    name:'15/85',
  }

]
const ConfirmStageExecutor = ({ onClose, onSubmit, open }) => {
  return (

    <Modal onClose={onClose} open={open} width={'1000px'}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Label>Основная информация</Label>
              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    name="Shartnoma maqsadi"
                    label="Shartnoma maqsadi"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="Dannie"
                    label="Dannie"
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="To’lov olchami (xodim/kun)"
                    label="To’lov olchami (xodim/kun)"
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="To’lov turi"
                    label="To’lov turi"
                    component={UniversalStaticSelectField}
                    list={listDocument}
                  />
                </Col>

              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Shartnoma rasmiylashtirish</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>

  )
}

export default ConfirmStageExecutor
