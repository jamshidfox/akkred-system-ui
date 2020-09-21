import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { prop } from 'ramda'
import BoxUI from '~/components/StyledElems/Box'
import DisplayFlex from '~/components/StyledElems/DisplayFlex'
import { MediumButton, TinyButton } from '~/components/UI'
import { InputField, DateField } from '~/components/FormField'
import { Row as RowUI, Col } from '~/components/Grid'

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

const Requisites = props => {
  const {
    hotelData,
    editData,
  } = props

  const { isEdit } = editData
  const initialValues = prop('initialValues', hotelData)

  return (
    <Box>
      <DisplayFlex justify={'space-between'} style={{ marginBottom: '34px' }}>
        <Header>Клиент Инфо</Header>
        <div>
          {!isEdit && <TinyButton style={{ marginRight: '10px' }} onClick={editData.onEdit}>Редактировать</TinyButton>}
        </div>
      </DisplayFlex>
      <Form
        initialValues={initialValues}
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={editData.onSubmit}
        render={({ handleSubmit, values, form }) => {
          return (
            <form onSubmit={handleSubmit}>

              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    disabled={!isEdit}
                    label="Полное название объекта аккредитации"
                    name={'title_object'}
                    placeholder={'Введите title_object'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label="Ф.И.О. руководителя лаборатории "
                    name={'full_name_organ'}
                    placeholder={'Введите full_name_organ'}
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label="Полное название юридического лица"
                    name={'title'}
                    placeholder={'Введите title'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>

                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label="Ф.И.О. руководителя лаборатории "
                    name={'full_name'}
                    placeholder={'Введите full_name'}
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    name={'payment_account'}
                    label="Банковские реквизиты "
                    placeholder={'Введите payment_account'}
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label={'legal_name'}
                    name={'legal_name'}
                    placeholder={'Введите legal_name'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    autocomplete="off"
                    label={'Да'}
                    name={'document_date'}
                    placeholder={'document_date'}
                    component={DateField}
                  />
                </Col>

                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label={'inn'}
                    name={'inn'}
                    placeholder={'Введите inn'}
                    component={InputField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    disabled={!isEdit}
                    label={'phone_number'}
                    name={'phone_number'}
                    placeholder={'Введите phone_number'}
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'address'}
                    name={'address'}
                    placeholder={'address'}
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'email'}
                    name={'email'}
                    placeholder={'email'}
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'fax'}
                    placeholder={'Введите fax'}
                    name={'fax'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'oked'}
                    name={'oked'}
                    placeholder={'Введите ОКЭД'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'КОД ПЛАТЕЛЬЩИКА НДС'}
                    placeholder={'Введите код плательщика НДС'}
                    name={'nds_reg_id'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'SWIFT'}
                    placeholder={'Введите SWIFT'}
                    name={'swift'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'email'}
                    name={'email'}
                    placeholder={'email'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'МФО'}
                    placeholder={'Введите fax'}
                    name={'mfo'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'site'}
                    placeholder={'Введите site'}
                    name={'site'}
                    component={InputField}
                  />
                </Col>
              </Row>

              <div style={{ textAlign: 'right' }}>
                {(isEdit) && <MediumButton type="submit">Сохранить</MediumButton>}
              </div>
            </form>
          )
        }}
      />
    </Box>
  )
}

Requisites.propTypes = {
  onSubmit: PropTypes.func,
  editData: PropTypes.object,
  hotelData: PropTypes.object,
}
export default Requisites
