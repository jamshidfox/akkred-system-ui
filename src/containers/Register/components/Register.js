import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { prop } from 'ramda'
import ServicesDialog from './ServicesDialog'
import AttractionsDialog from './AttractionsDialog'
import BoxUI from '~/components/StyledElems/Box'
import DisplayFlex from '~/components/StyledElems/DisplayFlex'
import { MediumButton, IconButton as IconButtonUI, TinyButton } from '~/components/UI'
import {
  InputField,
  UniversalSearchField,
  ImageFieldArray,
  CheckboxGroupField
} from '~/components/FormField'
import { Row as RowUI, Col } from '~/components/Grid'
import Map from '~/icons/Map'
import * as API from '~/constants/api'

const IconButton = styled(IconButtonUI)`
  margin-top: 24px;
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`

const Box = styled(BoxUI)`
  padding: 24px;
`

const Header = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #8F9BB3;
`

export const fields = [
  'hotelType',
  'title',
  'point',
  'address',
  'phoneNumber',
  'additionalPhoneNumber',
  'email',
  'entranceTime',
  'leaveTime',
  'services',
  'photos'
]

const Register = props => {
  const {
    onSubmit,
    hotelData,
    isCreated,
    editData,
    serviceModal,
    attractionsModal
  } = props

  const { isEdit } = editData
  const initialValues = prop('initialValues', hotelData)

  return (
    <Box>
      <DisplayFlex justify={'space-between'} style={{ marginBottom: '34px' }}>
        <Header>Информация о вашем объекте</Header>
        <div>
          {!isEdit && <TinyButton style={{ marginRight: '10px' }} onClick={editData.onEdit}>Редактировать</TinyButton>}
        </div>
      </DisplayFlex>
      <Form
        initialValues={initialValues}
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={isEdit ? editData.onSubmit : onSubmit}
        render={({ handleSubmit, values, form }) => {
          const onServiceCancel = () => {
            form.change('services', {})
            serviceModal.onClose()
          }
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label={'тип'}
                    name={'hotelType'}
                    api={API.HOTEL_TYPE_LIST}
                    placeholder={'К какой из категорий ниже больше всего подходит ваш объект?'}
                    component={UniversalSearchField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label={'название'}
                    placeholder={'Как называется ваша гостиница?'}
                    name={'title'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label={'звездность'}
                    name={'point'}
                    placeholder={'Сколько звезд у вашей гостиницы?'}
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <DisplayFlex justify={'space-between'}>
                    <Field
                      disabled={!isEdit}
                      label={'адрес'}
                      placeholder={'Где находится ваша гостиница?'}
                      name={'address'}
                      width={'calc(100% - 68px)'}
                      component={InputField}
                    />
                    <IconButton size={'large'} icon={Map} type={'button'} />
                  </DisplayFlex>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'номер телефона'}
                    name={'phoneNumber'}
                    placeholder={'Введите номер телефона '}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'доп номер телефона'}
                    placeholder={'Введите дополнительный номер телефона'}
                    name={'additionalPhoneNumber'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'email (не обязательно)'}
                    placeholder={'Введите Email'}
                    name={'email'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'Время заезда'}
                    name={'entranceTime'}
                    placeholder={'Например: 08:00'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'Время выезда'}
                    placeholder={'Например: 18:00'}
                    name={'leaveTime'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'форма оплаты'}
                    placeholder={'Какие способы оплаты вы принимаете?'}
                    name={'paymentTypes'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <ServicesDialog
                    isEdit={isEdit}
                    serviceTypes={values.services}
                    onServiceCancel={onServiceCancel}
                    {...serviceModal}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <AttractionsDialog
                    isEdit={isEdit}
                    {...attractionsModal}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FieldArray
                    name={'photos'}
                    component={ImageFieldArray}
                  />
                </Col>
              </Row>
              <div style={{ textAlign: 'right' }}>
                {(!isCreated || isEdit) && <MediumButton type="submit">Сохранить</MediumButton>}
              </div>
            </form>
          )
        }}
      />
    </Box>
  )
}

Register.propTypes = {
  onSubmit: PropTypes.func,
  editData: PropTypes.object,
  hotelData: PropTypes.object,
  serviceModal: PropTypes.object,
  attractionsModal: PropTypes.object,
  isCreated: PropTypes.bool
}
export default Register
