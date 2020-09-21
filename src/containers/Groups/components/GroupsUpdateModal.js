import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import { prop } from 'ramda'
import { Modal, MediumButton } from '../../../components/UI'
import {
  CheckboxGroupField,
  InputField,
} from '../../../components/FormField'
import { Row as RowUI, Col } from '../../../components/Grid'

export const rolefields = [
  'name',
  'permissions'
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

const PArtnerUpdateeModal = props => {
  const { open, onClose, onSubmit, updateItem, groupList } = props
  const data = prop('results', groupList)
  let result
  if (updateItem.permissions) {
    result = Array.from(updateItem.permissions, group => group.id)
  }

  const initialValues = {
    id: prop('id', updateItem),
    name: prop('name', updateItem),
    permissions: result
  }

  return (
    <Modal
      width="800px"
      title="Изменить должность"
      open={open}
      onClose={onClose} >
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        mutators={arrayMutators}
        render={({ handleSubmit, values, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>

              <Label>Основная информация</Label>
              <Row gutter={24}>

                <Col span={24}>
                  <Field name="name" label="Название " component={InputField} />
                </Col>

              </Row>
              <Row gutter={24}>

                <Col span={24}>
                  <Field
                    name={'permissions'}
                    items={data}
                    label="Группы"
                    width={'40%'}
                    labelPath={['name']}
                    component={CheckboxGroupField}
                  />
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

PArtnerUpdateeModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func
}

export default PArtnerUpdateeModal
