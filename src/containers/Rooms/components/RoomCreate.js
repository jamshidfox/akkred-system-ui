import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  NoopFields
} from '../../../components/FormField'
import { GENDER_LIST } from '../../../constants/backend'
import { Box } from '../../../components/StyledElems'
import FacilitiesDialog from './FacilitiesDialog'

export const fields = [
  'detail',
  'floor',
  'area',
  'capacity',
  'additionalCapacity',
  'roomNumber',
  'facilities',
  'roomCategory'
]

const Row = styled(RowUI)`
  margin-bottom: 40px;
`

const BoxUI = styled(Box)`
  padding: 25px;
`

const RoomCreate = props => {
  const { onSubmit, initialValues, serviceModal } = props
  return (
    <BoxUI>
      <PageTitle name="Общая информация" />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, values, form, ...formikProps }) => {
          const onServiceCancel = () => {
            form.change('facilities', {})
            serviceModal.onClose()
          }
          return (
            <form onSubmit={handleSubmit}>

              <Row gutter={24}>

                <Col span={8}>
                  <Field name="detail" label="Описание" component={InputField} />
                </Col>
                <Col span={8}>
                  <Field name="floor" label="Этажность" component={InputField} />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={6}>
                  <Field name="area" label="Площадь" component={InputField} />
                </Col>
                <Col span={6}>
                  <Field name="capacity" label="Основные места" component={InputField} list={GENDER_LIST} />
                </Col>
                <Col span={6}>
                  <Field name="additionalCapacity"
                    label="Дополнитеоьные  места " component={InputField} />
                </Col>
                <Col span={6}>
                  <Field name="roomNumber"
                    label="Номер" component={InputField} />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={16}>
                  <FacilitiesDialog
                    serviceTypes={values.facilities}
                    onServiceCancel={onServiceCancel}
                    {...serviceModal} />
                </Col>
                <Col span={8}>
                  <NoopFields names={['roomCategory']} label="Описание" />
                </Col>

              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Сохранить</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}
RoomCreate.propTypes = {
  onSubmit: PropTypes.func,
  hotelData: PropTypes.object,
  serviceModal: PropTypes.object,
  initialValues: PropTypes.object,
}

export default RoomCreate
