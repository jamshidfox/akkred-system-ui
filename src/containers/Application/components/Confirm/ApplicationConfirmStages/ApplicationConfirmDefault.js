
import React, { useState } from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { Box } from '../../../../../components/StyledElems'
import {
  Field, Form,
  InputField,
  NoopFields,
  UniversalSearchField,
  UniversalStaticSelectField
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import * as API from '../../../../../constants/api'
import { ANSWER_LIST, APPLICATION_LIST, STANDART_LIST } from '../../../../../constants/backend'
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'
import { MediumButton } from '../../../../../components/UI/Buttons'

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
const ApplicationConfirmDefault = props => {
  const { onSubmit } = props
  return (
    <BoxUI>
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <NoopFields names={['docId', 'arrId']} />
              <Label>Основная информация</Label>

              <Row gutter={24}>
                <Col span={6}>
                  <Field
                    name="client"
                    label="client"
                    component={UniversalSearchField}
                    api={API.CLIENT_LIST}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    name="typeApplication"
                    label="Тип заявки"
                    component={UniversalStaticSelectField}
                    list={APPLICATION_LIST}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="typeStandard"
                    label="тип стандарта"
                    component={UniversalStaticSelectField}
                    list={STANDART_LIST}
                  />
                </Col>
              </Row>

              <Label>Информация о документа</Label>

              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="proficiencyTestingProvider"
                    label="Принимала ли лаборатория участие в Проверке Квалификации/Межлабораторных сличительных испытаниях?"
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="managementAnalysis"
                    label="Был ли проведен анализ со стороны руководства? "
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="managementSystem"
                    label="Как давно в лаборатории внедрена система менеджмента?"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="hasPartAnotherOrgan"
                    label="hasPartAnotherOrgan"
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="internalAudit"
                    label="Был ли проведен внутренний аудит?"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    component={FileUploadField}
                    name={'file'}
                    label={'File 1'}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    component={FileUploadField}
                    name={'no-file'}
                    label={'File 2'}
                  />
                </Col>
              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type={'submit'}>Сохранить</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ApplicationConfirmDefault
