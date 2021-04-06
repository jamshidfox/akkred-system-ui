import React, { useState } from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { prop, path, equals, includes } from 'ramda'

import { sprintf } from 'sprintf-js'
import FileUploadField from 'components/FormField/File/FileUploadField'
import { Link } from 'react-router-dom'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalStaticSelectField,
  UniversalSearchField,
  NoopFields
} from '../../../components/FormField'
import { ANSWER_LIST, ANSWER_MONTH_LIST, APPLICATION_LIST, STANDART_LIST } from '../../../constants/backend'
import { Box } from '../../../components/StyledElems'
import * as API from '../../../constants/api'
import * as ROUTES from '../../../constants/routes'
import Perms from '../../../components/Perms/Perms'

import { BranchCreateModal, BranchList } from './Branch'
import { MobileComplexCreateModal, MobileComplexList } from './MobileComplex'
import { StaffCreateModal, StaffList } from './Staff'
import { OfficeCreateModal, OfficeList } from './Office'
import { DocumentCreateModal, DocumentList } from './Document'
import { AccreditationCreateModal, AccreditationList } from './Accreditation'
import { ActivityCreateModal, ActivityList } from './Activity'
import PermissionButton from './PermissionButton'

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
const FieldWrapper = styled.div`
`

const getDisplayStyle = condition => ({
  display: condition ? 'block' : 'none'
})
const ApplicationUpdate = props => {
  const { initialValues,
    serviceModal,
    onCreateApplication,
    serviceList,
    documentModal,
    documentList,
    officeModal,
    officeList,
    staffModal,
    staffList,
    mobileList,
    mobileModal,
    documentTwoList,
    documentTwoModal,
    documentThreeList,
    documentThreeModal,
    documentFourList,
    documentFourModal,
    onDeleteDocument,
    onDeleteDocumentTwo,
    onDeleteDocumentThree,
    onDeleteDocumentFour,
    onDeleteOffice,
    accreditationList,
    accreditationModal,
    onDeleteAccreditation,
    activityList,
    activityModal,
    onDeleteActivity,
    update
  } = props
  const [serviceModalItem, setServiceModalItem] = useState(false)
  const [officeItem, setOfficeModalItem] = useState(false)
  const [staffItem, setStaffModalItem] = useState(false)
  const [mobileItem, setMobileModalItem] = useState(false)
  const editModalOpen = (data) => {
    setServiceModalItem(data)
    serviceModal.onOpen()
  }

  const editMobileModalOpen = (data) => {
    setMobileModalItem(data)
    mobileModal.onOpen()
  }
  const editOfficeModalOpen = (data) => {
    setOfficeModalItem(data)
    officeModal.onOpen()
  }

  const editStaffModalOpen = (data) => {
    setStaffModalItem(data)
    staffModal.onOpen()
  }
  const stage = prop('stage', initialValues)
  const id = prop('id', initialValues)
  const typeStandard = prop('typeStandard', initialValues)

  const waitModalOpen = () => {
  }

  return (
    <BoxUI>
      <PageTitle name="Ariza" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onCreateApplication}
        render={({ handleSubmit, ...formikProps }) => {
          const values = prop('values', formikProps)
          // // const typeStandard = path(['typeStandard', 'id'], values) || typeStandardOld
          // const typeStandard = typeStandardOld

          const show17024Fields = equals(typeStandard, '17024')

          const BranchOfficeDisplayList = ['17020', '17021', '17024', '17025']
          const showBranchOffice = includes(typeStandard, BranchOfficeDisplayList)

          const StaffDisplayList = ['17020', '17024', '17025']
          const showStaff = includes(typeStandard, StaffDisplayList)

          const MobileComplexDisplayList = ['17020', '17025']
          const showMobileComplex = includes(typeStandard, MobileComplexDisplayList)

          const ActivityCertificationDisplayList = ['17021', '17024']
          const showActivityCertification = includes(typeStandard, ActivityCertificationDisplayList)

          const AccreditationByOtherDisplayList = ['17021', '17024']
          const showAccreditationByOther = includes(typeStandard, AccreditationByOtherDisplayList)

          return (
            <form onSubmit={handleSubmit}>
              <NoopFields names={['docId', 'arrId']} />
              <Label>Основная информация</Label>

              <Row gutter={24}>

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

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="managementAnalysis"
                    label="Был ли проведен анализ со стороны руководства? "
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="managementSystem"
                    label="Как давно в лаборатории внедрена система менеджмента?"
                    component={UniversalStaticSelectField}
                    list={ANSWER_MONTH_LIST}
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

                <Col span={24}>
                  <Field
                    name="question"
                    label="Принимала ли лаборатория участие в Проверке Квалификации/Межлабораторных сличительных испытаниях? Если да укажите имя провайдера"
                    component={InputField}
                  />
                </Col>

              </Row>

              <FieldWrapper style={getDisplayStyle(show17024Fields)}>
                <Row gutter={24}>
                  <Col span={6}>
                    <Field
                      name="assessmentAgency"
                      label="Где проводится ваша оценка? "
                      component={InputField}
                    />
                  </Col>

                  <Col span={6}>
                    <Field
                      name="certificateAgency"
                      label="В органе по сертификации?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                  <Col span={6}>
                    <Field
                      name="educationalInstitution"
                      label="В образовательном учреждении?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                  <Col span={6}>
                    <Field
                      name="inManufacture"
                      label="На производстве?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                </Row>

                <Row gutter={24}>
                  <Col span={6}>
                    <Field
                      name="anotherPlace"
                      label="В других местах?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                  <Col span={6}>
                    <Field
                      name="howOftenExam"
                      label="Как часто проводится экзамен, если это применимо?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                  <Col span={6}>
                    <Field
                      name="attractedPerson"
                      label="# Имеет ли орган по сертификации привлеченный персонал?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                  <Col span={6}>
                    <Field
                      name="accreditationCertificate"
                      label="Имеет ли орган по сертификации другие сертификаты о признании?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                </Row>

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showBranchOffice)}>
                <Row gutter={24}>
                  <Col span={12}>
                    <Field
                      name="isBranch"
                      label="Имеется ли у представительства? "
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>
                </Row>

                <div>
                  <BranchList branches={serviceList} serviceModal={serviceModal} editModalOpen={editModalOpen} update={update} />
                  <BranchCreateModal {...serviceModal} initialValues={serviceModalItem} />
                </div>

                <Row gutter={24}>
                  <Col span={12}>
                    <Field
                      name="isOffice"
                      label="Имеются ли у Вас другие офисы / представительства?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>
                </Row>

                <div>
                  <OfficeList branches={officeList} serviceModal={officeModal} editModalOpen={editOfficeModalOpen} update={update} onDeleteOffice={onDeleteOffice} />
                  <OfficeCreateModal {...officeModal} initialValues={officeItem} />
                </div>

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showMobileComplex)}>
                <Row gutter={24}>
                  <Col span={24}>
                    <Field
                      name="isMobileComplex"
                      label="Имеется ли у Вас мобильный испытательный комплекс? "
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>
                </Row>

                <div>
                  <MobileComplexList branches={mobileList} serviceModal={mobileModal} editModalOpen={editMobileModalOpen} update={update} />
                  <MobileComplexCreateModal {...mobileModal} initialValues={mobileItem} />
                </div>

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showStaff)}>
                <Row gutter={24}>
                  <Col span={24}>
                    <Field
                      name="isStaff"
                      label="Имеется ли у Вас удаленный персонал?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>
                </Row>

                <div>
                  <StaffList branches={staffList} serviceModal={staffModal} editModalOpen={editStaffModalOpen} update={update} />
                  <StaffCreateModal {...staffModal} initialValues={staffItem} />
                </div>

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showAccreditationByOther)}>
                <Row gutter={24}>
                  <Col span={24}>
                    <Field
                      name="isAccreditation"
                      label="Аккредитован ли орган по сертификации другим органом по аккредитации, включая зарубежные органы по аккредитации?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>
                </Row>

                <div>
                  <AccreditationList branches={accreditationList} serviceModal={accreditationModal} onDelete={onDeleteAccreditation} update={update} />
                  <AccreditationCreateModal {...accreditationModal} />
                </div>

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showActivityCertification)}>
                <Row gutter={24}>
                  <Col span={24}>
                    <Field
                      name="isActivity"
                      label="Проводилась ли какая-нибудь сертификационная деятельность в заявленной области?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>
                </Row>

                <div>
                  <ActivityList branches={activityList} serviceModal={activityModal} onDelete={onDeleteActivity} update={update} />
                  <ActivityCreateModal {...activityModal} />
                </div>

              </FieldWrapper>

              <div>

                {stage === 'stage_9' || stage === 'stage_19' || stage === 'stage_25'
                  ? (<div >
                    <MediumButton style={{
                      background: '#2541ff'
                    }} onClick={waitModalOpen()}>Буйуртмачини жавобини кутиш</MediumButton>
                  </div>)
                  : (<div style={{
                    display: 'flex'

                  }}>

                    {id && (

                      <div>

                        <PermissionButton stage={stage} id={id} />

                      </div>

                    )}

                    <div >
                      <MediumButton style={{
                        background: '#ff3454'
                      }} >Отклонить</MediumButton>
                    </div>

                  </div>)
                }
              </div>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ApplicationUpdate
