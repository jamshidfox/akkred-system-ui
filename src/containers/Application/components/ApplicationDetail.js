import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { prop, equals, includes } from 'ramda'
import { PageTitle } from '../../../components/UI'
import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalStaticSelectField,
} from '../../../components/FormField'
import { ANSWER_LIST, ANSWER_MONTH_LIST, APPLICATION_LIST, STANDART_LIST } from '../../../constants/backend'
import { Box } from '../../../components/StyledElems'

import { BranchList } from './Branch'
import { MobileComplexList } from './MobileComplex'
import { StaffList } from './Staff'
import { OfficeList } from './Office'
import { ActivityList } from './Activity'

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
    additionalActivityList,
    officeList,
    staffList,
    mobileList,
  } = props

  const typeStandard = prop('typeStandard', initialValues)

  return (
    <BoxUI>

      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onCreateApplication}
        render={({ handleSubmit, ...formikProps }) => {
          const values = prop('values', formikProps)

          // const typeStandard = path(['typeStandard', 'id'], values)

          const show17024Fields = equals(typeStandard, '17024')

          const show17065Fields = equals(typeStandard, '17065')

          const BranchOfficeDisplayList = ['17020', '17021', '17024', '17025', '17065']
          const showBranchOffice = includes(typeStandard, BranchOfficeDisplayList)

          const MobileComplexDisplayList = ['17020', '17025']
          const showMobileComplex = includes(typeStandard, MobileComplexDisplayList)

          const StaffDisplayList = ['17020', '17024', '17025', '17065']
          const showStaff = includes(typeStandard, StaffDisplayList)

          const ActivityCertificationDisplayList = ['17021', '17024', '17065']
          const showActivityCertification = includes(typeStandard, ActivityCertificationDisplayList)

          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>

                <Col span={12}>
                  <Field
                    name="typeApplication"
                    label="Ariza turi"
                    component={UniversalStaticSelectField}
                    list={APPLICATION_LIST}
                  />

                </Col>
                <Col span={12}>
                  <Field
                    name="typeStandard"
                    label="Muvofiqlikni baholash organi turi"
                    component={UniversalStaticSelectField}
                    list={STANDART_LIST}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="managementAnalysis"
                    label="Rahbariyat tomonidan tahlil qilinganmi?"
                    component={UniversalStaticSelectField}
                    list={ANSWER_LIST}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="managementSystem"
                    label="menejment tizimi qancha muddat ilgari joriy etilgan?"
                    component={UniversalStaticSelectField}
                    list={ANSWER_MONTH_LIST}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="internalAudit"
                    label="Ichki audit oʻtkazilganmi?"
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

              <FieldWrapper style={getDisplayStyle(showActivityCertification)}>
                <Row gutter={24}>
                  <Col span={20}>
                    <Field
                      name="certificationAccreditation"
                      component={InputField}
                      label="Sertifikatlashtirish organi boshqa akkreditatsiya organi,
                      shu jumladan chet el akkreditatsiyadan oʻtkazish organlari tomonidan akkreditatsiyadan oʻtkazilganmi?
                      Agarda ha boʻlsa, organ nomini koʻrsating"
                    />
                  </Col>

                </Row>

              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showActivityCertification)}>
                <Row gutter={24}>
                  <Col span={20}>
                    <Field
                      name="certificationField"
                      component={InputField}
                      label="Ariza berilgan soha boʻyicha sertifikatlashtirish ishlari olib borilganmi?
                       Agarda ha boʻlsa, taqdim etilgan sertifikatlar miqdori (har bir ariza berilgan soha uchun):"
                    />
                  </Col>

                </Row>
              </FieldWrapper>

              <FieldWrapper style={getDisplayStyle(showActivityCertification)}>
                <Row gutter={24}>
                  <Col span={24}>
                    <Field
                      label="Ariza berilgan sohalarning qaysi biri boshqa
                     (chet el) akkreditatsiyadan oʻtkazish organlari tomonidan akkreditatsiyadan oʻtkazilganmi?
                     Agarda ha boʻlsa, taqdim etilgan sertifikatlar miqdori (har bir ariza berilgan soha uchun):
                      "
                      name="accreditedByAnother"
                      component={InputField}
                    />
                  </Col>
                </Row>
              </FieldWrapper>

              <Label>Asosiy ma’lumotlar</Label>

              <Row gutter={24}>

                <Col span={24}>
                  <Field
                    name="consultingService"
                    label="Akkreditatsiyaga tayyorgarlik koʻrish uchun laboratoriya konsalting xizmatidan foydalanganmi?
                    Agarda ha boʻlsa, iltimos konsalting kompaniyasi yoki maslahatchi nomini yozing.
                    "
                    component={InputField}
                  />
                </Col>

              </Row>

              <Label>Akkreditatsiya toʻgʻrisidagi guvohnoma haqida ma’lumot (qoʻllash mumkin boʻlsa)</Label>

              <Row gutter={24}>

                <Col span={24}>
                  <Field
                    name="certificateNumber"
                    label={'Roʻyxatdan oʻtish raqami '}
                    component={InputField}
                  />
                </Col>

              </Row>

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

                {additionalActivityList.length > 0 && (
                  <div>
                    <PageTitleNew name="Boshqa faoliyat turi" />
                    <ActivityList branches={additionalActivityList} />
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

              <FieldWrapper style={getDisplayStyle(showMobileComplex)}>

                {mobileList.length > 0 && (

                  <div>
                    <PageTitleNew name="Mobil majmua" />
                    <MobileComplexList branches={mobileList} />
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
