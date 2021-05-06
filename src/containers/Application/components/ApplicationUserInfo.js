import React from 'react'
import arrayMutators from 'final-form-arrays'
import styled from 'styled-components'
import FileUploadField from 'components/FormField/File/FileUploadField'
import {
  Field,
  Form,
  InputField,
  DateField
} from '../../../components/FormField'
import { Col, Row as RowUI } from '../../../components/Grid'
import { Box } from '../../../components/StyledElems'

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

const ApplicationUserInfo = props => {
  const { clientInfo } = props
  const onCreateApplication = () => {

  }
  return (

    <BoxUI>
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={clientInfo}
        onSubmit={onCreateApplication}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    label="Yuridik shaxsning to‘liq nomi"
                    name={'legalEntityFullName'}
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    label="Akkreditatsiya obyektining to‘liq nomi"
                    name={'objectFullName'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>

                <Col span={12}>
                  <Field
                    label="Yuridik manzili"
                    name={'objectLegalAddress'}
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    label="Fakt manzili"
                    name={'objectFactAddress'}
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={12}>
                  <Field
                    label={'Tashkilotning inn'}
                    name={'objectInn'}
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    name={'objectPhoneNumber'}
                    label="Tashkilotning telefon raqami"
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name={'objectSite'}
                    label="Tashkilotning veb-sayti"
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    label={'Tashkilotning email'}
                    name={'objectEmail'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    label={'Rahbar yuridik shaxsining F.I.Sh.'}
                    name={'legalEntityFullName'}
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    label={'Rahbar yuridik shaxsining email'}
                    name={'legalEntityEmail'}
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    label={'Rahbar Telefon raqami'}
                    name={'legalEntityPhoneNumber'}
                    component={InputField}
                  />
                </Col>

              </Row>

              <Label>Bank rekvizitlari</Label>

              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    label={'Bank nomi'}
                    name={'bankName'}
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    label={'SH/h '}
                    name={'paymentAccount'}
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    label={'OKED'}
                    name={'oked'}
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>


                <Col span={12}>
                  <Field
                    label={'Banki MFO '}
                    name={'bankMfo'}
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    label={'SOGU'}
                    name={'soogu'}
                    component={InputField}
                  />
                </Col>

              </Row>

            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ApplicationUserInfo
