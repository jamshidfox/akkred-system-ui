import React from 'react'
import { prop } from 'ramda'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { PageTitle, MediumButton, InputLabel } from '../../../components/UI'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  UniversalSearchField,
  UniversalStaticSelectField,
  DateField
} from '../../../components/FormField'
import { GENDER_LIST } from '../../../constants/backend'
import * as API from '../../../constants/api'
import ServicesDialog from '../../Register/components/ServicesDialog'
import Register from '../../Register/components/Register'
import FacilitiesDialog from './FacilitiesDialog'

export const fields = [
  'roomCategory',
  'detail',
  'floor',
  'area',
  'capacity',
  'additionalCapacity',
  'roomNumber',
  'facilities'

]

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
const RoomCreate = props => {
  const { onSubmit, initialValues, serviceModal } = props
  return (
    <>
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
                  <Field
                    name="roomCategory"
                    label="Тип номера"
                    component={UniversalSearchField}
                    api={API.ROOM_TYPE_LIST} />
                </Col>
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

                <Col span={24}>

                  <FacilitiesDialog
                    serviceTypes={values.facilities}
                    onServiceCancel={onServiceCancel}
                    {...serviceModal} />
                </Col>

              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton>Сохранить</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </>
  )
}
RoomCreate.propTypes = {
  onSubmit: PropTypes.func,
  hotelData: PropTypes.object,
  serviceModal: PropTypes.object,
  initialValues: PropTypes.object,
}

export default RoomCreate
