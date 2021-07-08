import React from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MediumButton } from '../../../../../components/UI'
import {
  Field,
  Form, UniversalStaticSelectField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import { Box } from '../../../../../components/StyledElems'
import { ANSWER_LIST, STANDART_LIST } from '../../../../../constants/backend'
import Analysis from '../../ApplicationGenerateDocs/Analysis'

const BoxUI = styled(Box)`
  padding: 25px;
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const NewFillUpAnalysisApplication = ({ onSubmit, initialValues }) => {
  const analysis = prop('analysis', initialValues)
  const idAp = prop('id', initialValues)

  return (

    <BoxUI >
      <Analysis analysis={analysis} idAp={idAp} />

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>

              <Row gutter={24}>
                <Col span={6}>
                  <Field
                    name="typeStandard"
                    label="Baholash organi turi"
                    component={UniversalStaticSelectField}
                    list={STANDART_LIST}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="qOne"
                    label="Akkreditatsiya ob’ektining akkreditatsiya sohasi, Markazning akkreditatsiya sohasiga mosmi"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="qTwo"
                    label="Markazda, muvofiq, baholashni amalga oshirish uchun baholovchilarni mavjudligi"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={24}>
                  <Field
                    name="qThree"
                    label="Markazda, ariza beruvchi/akkreditatsiya obʼekti tomonidan taqdim etilgan akkreditatsiya sohasiga muvofiq, baholashni amalga oshirish uchun texnik ekspertlarni mavjudligi"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={24}>
                  <Field
                    name="qFour"
                    label="Markazda, ariza beruvchi/akkreditatsiya obʼekti tomonidan taqdim etilgan akkreditatsiya sohasiga muvofiq, baholashni amalga oshirish uchun mutaxassislar va texnik ekspertlikka nomzodlar mavjudligi (maxsus yoʼnalishlar uchun toʼldiriladi)."
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    name="resultsAnalysis"
                    label="Buyurtmaniyu tahlil natijalari"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="resourceAnalysis"
                    label="Resurslarning tahlil natijalari"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="resultAccept"
                    label="Buyurtma qabul qilinib, keyingi bosqichlarga yubriladi"
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

export default NewFillUpAnalysisApplication
