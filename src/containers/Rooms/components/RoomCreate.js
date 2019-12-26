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
  UniversalSearchField,
} from '../../../components/FormField'
import { GENDER_LIST } from '../../../constants/backend'
import * as API from '../../../constants/api'
import FacilitiesDialog from './FacilitiesDialog'
import {Box} from "../../../components/StyledElems";

export const fields = [
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

const BoxUI = styled(Box)`
  padding: 25px;
`

const RoomCreate = props => {
  const { onSubmit, initialValues, serviceModal, parent } = props
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
