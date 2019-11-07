import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import BoxUI from '../../../components/StyledElems/Box'
import DisplayFlex from '../../../components/StyledElems/DisplayFlex'
import { MediumButton, IconButton as IconButtonUI } from '../../../components/UI'
import { InputField, UniversalSearchField } from '../../../components/FormField'
import { Row as RowUI, Col } from '../../../components/Grid'
import Map from '../../../icons/Map'
import * as API from '../../../constants/api'

const IconButton = styled(IconButtonUI)`
  margin-top: 24px;
`
const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const Box = styled(BoxUI)`
  padding: 24px;
`

const Stepper = styled(BoxUI)`
  margin-bottom: 24px;
  height: 54px;
`
const Register = props => {
  const { onSubmit } = props

  return (
    <div>
      <Stepper />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <Box>
              <form onSubmit={handleSubmit}>
                <Row gutter={24}>
                  <Col span={12}>
                    <Field
                      label={'тип'}
                      name={'hotelType'}
                      api={API.HOTEL_TYPE_LIST}
                      placeholder={'К какой из категорий ниже больше всего подходит ваш объект?'}
                      component={UniversalSearchField} />
                  </Col>
                  <Col span={12}>
                    <Field
                      label={'название'}
                      placeholder={'Как называется ваша гостиница?'}
                      name={'title'}
                      component={InputField} />
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={12}>
                    <Field
                      label={'звездность'}
                      name={'point'}
                      placeholder={'Сколько звезд у вашей гостиницы?'}
                      component={InputField} />
                  </Col>
                  <Col span={12}>
                    <DisplayFlex justify={'space-between'}>
                      <Field
                        label={'адрес'}
                        placeholder={'Где находится ваша гостиница?'}
                        name={'address'}
                        width={'calc(100% - 68px)'}
                        component={InputField} />
                      <IconButton size={'large'} icon={Map} type={'button'} />
                    </DisplayFlex>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={8}>
                    <Field
                      label={'номер телефона'}
                      name={'phoneNumber'}
                      placeholder={'Введите номер телефона '}
                      component={InputField} />
                  </Col>
                  <Col span={8}>
                    <Field
                      label={'доп номер телефона'}
                      placeholder={'Введите дополнительный номер телефона'}
                      name={'additionalPhoneNumber'}
                      component={InputField} />
                  </Col>
                  <Col span={8}>
                    <Field
                      label={'email (не обязательно)'}
                      placeholder={'Введите Email'}
                      name={'name'}
                      component={InputField} />
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={8}>
                    <Field
                      label={'вРЕМЯ ЗАЕЗДА'}
                      name={'entranceTime'}
                      placeholder={'Например: 08:00'}
                      component={InputField} />
                  </Col>
                  <Col span={8}>
                    <Field
                      label={'Время выезда'}
                      placeholder={'Например: 18:00'}
                      name={'leaveTime'}
                      component={InputField} />
                  </Col>
                  <Col span={8}>
                    <Field
                      label={'форма оплаты'}
                      placeholder={'Какие способы оплаты вы принимаете?'}
                      name={'name'}
                      component={InputField} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Field
                      label={'услуги гостиницы'}
                      name={'services'}
                      placeholder={'Какие услуги предоставляет ваша гостиница клиентам?'}
                      component={InputField} />
                  </Col>
                </Row>
                <div style={{ textAlign: 'right' }}>
                  <MediumButton>Сохранить</MediumButton>
                </div>
              </form>
            </Box>
          )
        }}
      />
    </div>
  )
}

Register.propTypes = {
  onSubmit: PropTypes.func
}
export default Register
