import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'
import { Modal, MediumButton } from '../../../components/UI'
import { InputField, UniversalSearchField, UniversalStaticSelectField } from '../../../components/FormField'
import { PARTNERS_TYPES } from '../../../constants/backend'
import { Row as RowUI, Col } from '../../../components/Grid'
import * as ROUTES from '../../../constants/api'

export const fields = [
  'type',
  'name',
  'legalName',
  'phoneNumber',
  'email',
  'fax',
  'contract',
  'country',
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

const RoomCreateModal = props => {
  const { open, onClose, onSubmit } = props
  return (
    <Modal
      width="800px"
      title="Добавить партнера"
      open={open}
      onClose={onClose} >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>

              <Label>Основная информация</Label>
              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="type"
                    label="Тип партнера"
                    component={UniversalStaticSelectField}
                    list={PARTNERS_TYPES}
                  />
                </Col>

                <Col span={12}>
                  <Field name="name" label="Название компании" component={InputField} />
                </Col>

              </Row>
              <Row gutter={24}>

                <Col span={24}>
                  <Field name="legalName" label="Юридческое название компании" component={InputField} />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={24}>
                  <Field name="country" label="страна" component={UniversalSearchField}
                    api={ROUTES.COUNTRY_LIST} />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="phoneNumber"
                    label="Номер телефона"
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field name="price" label="Доп. номер телефон" component={InputField} />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="email"
                    label="email"
                    component={InputField}
                  />
                </Col>

                <Col span={12}>
                  <Field name="fax" label="Факс" component={InputField} />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={24}>
                  <Field name="contract" label="договор №" component={InputField} />
                </Col>

              </Row>

              <div style={{ textAlign: 'right' }}>
                <MediumButton type={'submit'}>Сохранить</MediumButton>
              </div>
            </form>
          )
        }}
      />

    </Modal>
  )
}

RoomCreateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func
}

export default RoomCreateModal
