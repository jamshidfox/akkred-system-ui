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
              <Label>Основная информация</Label>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="fullName"
                    label="fullName"
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="fullNameOrgan"
                    label="fullNameOrgan"
                    component={InputField}
                  />
                </Col>

              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="swift"
                    label="swift"
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="title"
                    label="title"
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="phoneNumber"
                    label="phoneNumber"
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="site"
                    label="site"
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="oked"
                    label="oked"
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="paymentAccount"
                    label="paymentAccount"
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="mfo"
                    label="mfo"
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="ndsRegId"
                    label="ndsRegId"
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="inn"
                    label="inn"
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="legalName"
                    label="legalName"
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="address"
                    label="address"
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="documentDate"
                    label="documentDate"
                    component={DateField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="email"
                    label="email"
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="fax"
                    label="fax"
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
