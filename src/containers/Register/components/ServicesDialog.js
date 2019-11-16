import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import { Modal } from '../../../components/UI'
import { Row, Col } from '../../../components/Grid'
import { UniversalSearchField } from '../../../components/FormField'

const Selected = styled.div`
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.input.placeholderColor};
  background: ${props => props.theme.input.background};
  padding: 14px 16px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  transition: 200ms;
    :hover {
    background: ${props => props.theme.input.backgroundColorHover};
  }
`
const ServicesDialog = props => {
  const { open, onClose, onOpen } = props

  if (!open) {
    return (
      <Selected onClick={onOpen}>Какие услуги предоставляет ваша гостиница клиентам?</Selected>
    )
  }
  return (
    <Modal
      width="900px"
      title="Выберите услуги гостиницы"
      open={open}
      onClose={onClose} >
      <div>
        <Row gutter={20}>
          <Col span="8">
            <Field component={UniversalSearchField} name={'name1'} />

          </Col>
          <Col span="8">
            <Field component={UniversalSearchField} name={'name2'} />
          </Col>
          <Col span="8">
            <Field component={UniversalSearchField} name={'name3'} />
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

ServicesDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
}
export default ServicesDialog
