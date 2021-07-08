import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField, UniversalStaticSelectField
} from '../../../components/FormField'
import FileUploadField from '../../../components/FormField/File/FileUploadField'
import { TEMPLATE_DOCUMENT_TYPE_LIST } from '../../../constants/backend'

export const fields = [
  'name',
  'file',
  'type',
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
                  <Field name="file" label="Hujjat" component={FileUploadField} />
                </Col>
                <Col span={8}>
                  <Field name="name" label="Hujjat nomi" component={InputField} />
                </Col>
                <Col span={8}>

                  <Field
                    component={UniversalStaticSelectField}
                    list={TEMPLATE_DOCUMENT_TYPE_LIST}

                    name="type"
                    label="Hujjat turi"
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
