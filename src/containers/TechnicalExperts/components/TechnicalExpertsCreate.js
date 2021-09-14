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
  DateField,
} from '../../../components/FormField'
import UniversalMultiSelectField from '../../../components/FormField/Select/UniversalMultiSelectField'
import * as API from '~/constants/api'

export const fields = [
  'email',
  'password',
  'middleName',
  'lastName',
  'firstName',
  'email',
  'phoneNumber',
  'genderType',
  'dateOfBirth',
  'job',
  'codes',
  'conflictOfInterests',
  'typeStandard',
]

const BoxUI = styled(Box)`
  padding: 25px;
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
              {/* <Row gutter={24}> */}

              {/* <Col span={12}> */}
              {/*   <Field name="email" label="Login" component={InputField} /> */}
              {/* </Col> */}
              {/* <Col span={12}> */}
              {/*   <Field name="password" label="Parol" component={InputField} /> */}
              {/* </Col> */}
              {/* </Row> */}

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
                  <Field name="phoneNumber" label="Telefon raqami" component={InputField} />
                </Col>

                <Col span={8}>
                  <Field name="genderType" label="Jinsi" component={InputField} />
                </Col>

                <Col span={8}>
                  <Field name="dateOfBirth" label="Tug'ilgan kun" component={DateField} />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field name="job" label="Ish joyi" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="codes" label="Kodlar" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="conflictOfInterests" label="Manfaatlar to'qnashuvi" component={InputField} />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    name="typeStandard"
                    label="Akkreditatsiya sxemasi"
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
