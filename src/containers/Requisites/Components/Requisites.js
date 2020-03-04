import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { prop } from 'ramda'
import BoxUI from '~/components/StyledElems/Box'
import DisplayFlex from '~/components/StyledElems/DisplayFlex'
import { MediumButton, TinyButton } from '~/components/UI'
import { InputField } from '~/components/FormField'
import { Row as RowUI, Col } from '~/components/Grid'
import * as API from '~/constants/api'

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
        <Header>Реквизиты компании</Header>
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
                    autocomplete="off"
                    label={'ЮРИДИЧЕСКОЕ НАЗВАНИЕ КОМПАНИИ'}
                    name={'legal_name'}
                    api={API.HOTEL_TYPE_LIST}
                    placeholder={'Введите название компании'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'БАНКОВСКИЙ СЧЕТ КОМПАНИИ'}
                    name={'payment_account'}
                    placeholder={'Введите расчетный счет компании'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'МФО'}
                    placeholder={'Введите МФО'}
                    name={'mfo'}
                    component={InputField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'ИНН'}
                    placeholder={'Введите ИНН'}
                    name={'inn'}
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <Field
                    disabled={!isEdit}
                    label={'ОКЭД'}
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
