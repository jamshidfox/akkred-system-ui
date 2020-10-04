import React, { useState } from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalStaticSelectField,
  UniversalSearchField,
  DateField,
  NoopFields
} from '../../../components/FormField'
import { ANSWER_LIST, APPLICATION_LIST, STANDART_LIST } from '../../../constants/backend'
import { Box } from '../../../components/StyledElems'
import * as API from '../../../constants/api'
import { BranchCreateModal, BranchList } from './Branch'
import ConfirmDialog from './ConfirmModal'

export const fields = [
  'address',
  'documentDate',
  'email',
  'fax',
  'fullName',
  'fullNameOrgan',
  'hasPartAnotherOrgan',
  'inn',
  'internalAudit',
  'legalName',
  'managementAnalysis',
  'managementSystem',
  'mfo',
  'ndsRegId',
  'oked',
  'paymentAccount',
  'phoneNumber',
  'proficiencyTestingProvider',
  'site',
  'swift',
  'title',
  'titleObject',
  'typeApplication',
  'typeStandard',
]

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
const ApplicationCreate = props => {
  const { onSubmit, initialValues, serviceModal, onCreateApplication, serviceList, onUpdateBranch, confirmModal } = props
  const [serviceModalItem, setServiceModalItem] = useState(false)
  const editModalOpen = (data) => {
    setServiceModalItem(data)
    serviceModal.onOpen()
  }
  const confirmModalOpen = () => {
    console.warn('confirmModalOpen')
    confirmModal.onOpen()
  }

  return (
    <BoxUI>
      <PageTitle name="Заявка" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onCreateApplication}
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
              <BranchList branches={serviceList} serviceModal={serviceModal} editModalOpen={editModalOpen} />
              <BranchCreateModal {...serviceModal} initialValues={serviceModalItem} onUpdateBranch={onUpdateBranch} />
              <ConfirmDialog  {...confirmModal} />

              {/* <div style={{ textAlign: 'right' }}> */}
              {/*  <MediumButton type={'submit'}>Сохранить</MediumButton> */}
              {/* </div> */}
              <div style={{ textAlign: 'right' }}>
                <MediumButton onClick={confirmModalOpen}>Confirm</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ApplicationCreate
