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
import { paymentTypes, rateTypes } from '../../../../../constants/backend'

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

const ConfirmStageContract = ({ onSubmit }) => {
  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    name="name"
                    label="Tovar (ish, xizmat)lar nomi"
                    component={InputField}

                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="count"
                    label="Miqdori"
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="rate"
                    label="Stavkasi"
                    component={UniversalStaticSelectField}
                    list={rateTypes}

                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="paymentType"
                    label="To’lov turi"
                    component={UniversalStaticSelectField}
                    list={paymentTypes}

                  />
                </Col>

              </Row>

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

export default ConfirmStageContract
