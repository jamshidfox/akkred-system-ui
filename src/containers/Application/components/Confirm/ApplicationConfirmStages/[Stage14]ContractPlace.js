import React from 'react'
import styled from 'styled-components'
import { MediumButton } from '../../../../../components/UI'
import {
  Field,
  Form,
  InputField,
  UniversalStaticSelectField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import { Box } from '../../../../../components/StyledElems'
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
const ConfirmStageContractPlace = ({ onSubmit }) => {
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
                    name="file"
                    label="Umumlashtirish"
                    component={FileUploadField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="rate"
                    label="rate"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="price"
                    label="price"
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="count"
                    label="count"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="total_amount"
                    label="total_amount"
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
    </BoxUI>

  )
}

export default ConfirmStageContractPlace
