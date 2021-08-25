import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { PageRowTitle, MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalSearchField,
} from '../../../components/FormField'
import TextArea from '../../../components/UI/TextArea/TextArea'
import FileUploadField from '../../../components/FormField/File/FileUploadField'
import * as API from '~/constants/api'
import UniversalMultiSelectField from '../../../components/FormField/Select/UniversalMultiSelectField'
import { TYPE_STANDARD_LIST } from '../../../constants/api'

export const fields = [
  'username',
  'password',
  'fullName',
  'email',
  'phoneNumber',
  'lastName',
  'firstName',
  'middleName',
  'role',
  'resume',
  'typeStandard',
]

const BoxUI = styled(Box)`
  padding: 25px;
`
const Label = styled.div`
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
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

const ReservationCreate = props => {
  const { onSubmit, initialValues } = props

  return (
    <BoxUI>
      <PageRowTitle name="Xodimni qo'shish" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>

                <Col span={8}>
                  <Field name="username" label="Login" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="role" label="Lavozim"
                    api={API.ROLE_LIST}
                    component={UniversalSearchField}
                  />
                </Col>
                <Col span={8}>
                  <Field name="password" label="Parol" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="email" label="Pochta" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="phoneNumber" label="Telefon raqami" component={InputField} />
                </Col>

                <Col span={8}>
                  <Field name="resume" label="Resume" component={FileUploadField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field name="lastName" label="Familiya" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="firstName" label="Ism" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="middleName" label="Otasini ismi" component={InputField} />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="typeStandard"
                    label="Подкатегория"
                    api={API.TYPE_STANDARD_LIST}
                    component={UniversalMultiSelectField}
                  />
                </Col>
              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type={'submit'}>Saqlash</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}
ReservationCreate.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
}

export default ReservationCreate
