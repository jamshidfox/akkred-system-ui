import React from 'react'
import styled from 'styled-components'
import { MediumButton } from '../../../../../components/UI'
import {
  Field,
  Form, UniversalStaticSelectField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import { Box } from '../../../../../components/StyledElems'
import { ANSWER_LIST, APPLICATION_LIST } from '../../../../../constants/backend'

const BoxUI = styled(Box)`
  padding: 25px;
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const NewCreateAnalysisApplication = ({ onSubmit }) => {
  return (

    <BoxUI >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    name="typeApplication"
                    label="Ariza turi"
                    component={UniversalStaticSelectField}
                    list={APPLICATION_LIST}
                  />

                </Col>
                <Col span={8}>
                  <Field
                    name="completedIn"
                    label="Belgilangan shaklga muvofiq to’liq to’ldirilganligi"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="orderSignedByRelevantPersons"
                    label="Buyurtma va majburiyat tegishli shaxslar tomonidan imzolanganligi"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    name="accreditationProject"
                    label="Akkreditatsiya sohasi loyihasi"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="msDocumentation"
                    label="Menejment tizimi hujjatlari"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />

                </Col>
                <Col span={8}>
                  <Field
                    name="accreditationInfo"
                    label="Akkreditasiya obyekti to’g’risida tegishli (O`ZAK.Y-02) ma’lumotlar"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
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

export default NewCreateAnalysisApplication
