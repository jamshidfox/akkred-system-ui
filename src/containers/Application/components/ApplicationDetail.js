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
const PageTitleNew = styled(PageTitle)`
  color: #2C3A50;
  margin-bottom: 5px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
`

const getDisplayStyle = condition => ({
  display: condition ? 'block' : 'none'
})
const ApplicationDetail = props => {
  const { initialValues,
    onCreateApplication,
    serviceList,
    officeList,
    staffList,
    mobileList,
    accreditationList,
    activityList,
  } = props

  const stage = prop('stage', initialValues)
  const id = prop('id', initialValues)
  const typeStandard = prop('typeStandard', initialValues)

  const waitModalOpen = () => {
  }

  return (
    <BoxUI>
      {/* <PageTitle name="Заявка" /> */}
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onCreateApplication}
        render={({ handleSubmit, ...formikProps }) => {
          const show17024Fields = equals(typeStandard, '17024')

          const show17065Fields = equals(typeStandard, '17065')

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

              <FieldWrapper style={getDisplayStyle(show17065Fields)}>
                <Row gutter={24}>
                  <Col span={12}>
                    <Field
                      name="labaratoriya"
                      label="Sertifikatlashtirish organi xususiy laboratoriyaga egami?"
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                  <Col span={12}>
                    <Field
                      name="outsource"
                      label="Sertifikatlashtirish organi jalb etilgan xodimlarga egami? "
                      component={UniversalStaticSelectField}
                      list={ANSWER_LIST}
                    />
                  </Col>

                </Row>

                <Row gutter={24}>

                  <Col span={24}>
                    <Field
                      name="isAkkred"
                      label="Laboratoriya akkreditatsiyadan oʻtganmi? Agarda ha boʻlsa, akkreditatsiya toʻgʻrisidagi guvohnoma raqamini korsating "
                      component={InputField}
                    />
                  </Col>

                </Row>

              </FieldWrapper>

              {/* <Row gutter={24}> */}

              {/*  <Col span={24}> */}
              {/*    <Field */}
              {/*      name="question" */}
              {/*      label="Принимала ли лаборатория участие в Проверке Квалификации/Межлабораторных сличительных испытаниях?" */}
              {/*      component={InputField} */}
              {/*    /> */}
              {/*  </Col> */}

              {/* </Row> */}

              {/* <FieldWrapper style={getDisplayStyle(show17024Fields)}> */}
              {/*  <Row gutter={24}> */}
              {/*    <Col span={6}> */}
              {/*      <Field */}
              {/*        name="assessmentAgency" */}
              {/*        label="Где проводится ваша оценка? " */}
              {/*        component={InputField} */}
              {/*      /> */}
              {/*    </Col> */}

              {/*    <Col span={6}> */}
              {/*      <Field */}
              {/*        name="certificateAgency" */}
              {/*        label="В органе по сертификации?" */}
              {/*        component={UniversalStaticSelectField} */}
              {/*        list={ANSWER_LIST} */}
              {/*      /> */}
              {/*    </Col> */}

              {/*    <Col span={6}> */}
              {/*      <Field */}
              {/*        name="educationalInstitution" */}
              {/*        label="В образовательном учреждении?" */}
              {/*        component={UniversalStaticSelectField} */}
              {/*        list={ANSWER_LIST} */}
              {/*      /> */}
              {/*    </Col> */}

              {/*    <Col span={6}> */}
              {/*      <Field */}
              {/*        name="inManufacture" */}
              {/*        label="На производстве?" */}
              {/*        component={UniversalStaticSelectField} */}
              {/*        list={ANSWER_LIST} */}
              {/*      /> */}
              {/*    </Col> */}

              {/*  </Row> */}

              {/*  <Row gutter={24}> */}
              {/*    <Col span={6}> */}
              {/*      <Field */}
              {/*        name="anotherPlace" */}
              {/*        label="В других местах?" */}
              {/*        component={UniversalStaticSelectField} */}
              {/*        list={ANSWER_LIST} */}
              {/*      /> */}
              {/*    </Col> */}

              {/*    <Col span={6}> */}
              {/*      <Field */}
              {/*        name="howOftenExam" */}
              {/*        label="# Как часто проводится экзамен, если это применимо?" */}
              {/*        component={UniversalStaticSelectField} */}
              {/*        list={ANSWER_LIST} */}
              {/*      /> */}
              {/*    </Col> */}

              {/*    <Col span={6}> */}
              {/*      <Field */}
              {/*        name="attractedPerson" */}
              {/*        label="# Имеет ли орган по сертификации привлеченный персонал?" */}
              {/*        component={UniversalStaticSelectField} */}
              {/*        list={ANSWER_LIST} */}
              {/*      /> */}
              {/*    </Col> */}

              {/*    <Col span={6}> */}
              {/*      <Field */}
              {/*        name="accreditationCertificate" */}
              {/*        label="Имеет ли орган по сертификации другие сертификаты о признании?" */}
              {/*        component={UniversalStaticSelectField} */}
              {/*        list={ANSWER_LIST} */}
              {/*      /> */}
              {/*    </Col> */}

              {/*  </Row> */}

              {/* </FieldWrapper> */}

              {/* <FieldWrapper style={getDisplayStyle(showBranchOffice)}> */}

              {/*  {serviceList.length > 0 && ( */}
              {/*    <BranchList branches={serviceList} /> */}
              {/*  )} */}

              {/*  {officeList.length > 0 && ( */}
              {/*    <OfficeList branches={officeList} /> */}
              {/*  )} */}

              {/* </FieldWrapper> */}

              {/* <FieldWrapper style={getDisplayStyle(showMobileComplex)}> */}

              {/*  {mobileList.length > 0 && ( */}
              {/*    <MobileComplexList branches={mobileList} /> */}
              {/*  )} */}

              {/* </FieldWrapper> */}

              {/* <FieldWrapper style={getDisplayStyle(showStaff)}> */}

              {/*  {staffList.length > 0 && ( */}
              {/*    <StaffList branches={staffList} /> */}
              {/*  )} */}

              {/* </FieldWrapper> */}

              {/* <FieldWrapper style={getDisplayStyle(showAccreditationByOther)}> */}

              {/*  {accreditationList.length > 0 && ( */}
              {/*    <AccreditationList branches={accreditationList} /> */}
              {/*  )} */}

              {/* </FieldWrapper> */}

              {/* <FieldWrapper style={getDisplayStyle(showActivityCertification)}> */}

              {/*  {activityList.length > 0 && ( */}
              {/*    <ActivityList branches={activityList} /> */}
              {/*  )} */}

              {/* </FieldWrapper> */}

              <FieldWrapper style={getDisplayStyle(showBranchOffice)}>
                {serviceList.length > 0 && (

                  <div>
                    <PageTitleNew name="Filiallar" />
                    <BranchList branches={serviceList} />
                  </div>

                )}

                {officeList.length > 0 && (

                  <div>
                    <PageTitleNew name="Ofis/vakolatxonalar" />
                    <OfficeList branches={officeList} />
                  </div>

                )}

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showStaff)}>
                {staffList.length > 0 && (

                  <div>
                    <PageTitleNew name="Xodimlar" />
                    <StaffList branches={staffList} />
                  </div>

                )}

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showAccreditationByOther)}>
                {accreditationList.length > 0 && (

                  <div>
                    <PageTitleNew name="Sertifikatlashtirish organi boshqa akkreditatsiya organi, shu jumladan chet el akkreditatsiyadan oʻtkazish organlari tomonidan akkreditatsiyadan oʻtkazilganmi?" />
                    <AccreditationList branches={accreditationList} />
                  </div>

                )}

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showActivityCertification)}>

                {activityList.length > 0 && (

                  <div>
                    <PageTitleNew name="Sertifikatlashtirish ishlari" />
                    <ActivityList branches={activityList} />
                  </div>

                )}

              </FieldWrapper>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ApplicationDetail
