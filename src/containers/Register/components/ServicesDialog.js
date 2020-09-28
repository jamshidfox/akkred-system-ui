import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import { useStore } from 'react-redux'
import { pipe, prop, isEmpty, flatten, values } from 'ramda'
import axios, { getPayloadFromSuccess } from '~/utils/axios'
import * as ROUTES from '~/constants/api'
import { Modal, MediumButton } from '~/components/UI'
import { UniversalMultiSelectField, NoopFields } from '~/components/FormField'

const Selected = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius.primary};
  color: ${props => props.theme.input.placeholderColor};
  background: ${props => props.theme.input.background};
  padding: 14px 16px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  transition: 200ms;
    :hover:not(:disabled) {
      background: ${props => props.theme.input.backgroundColorHover};
  }
  :disabled {
    background: ${props => props.theme.input.background};
    cursor: unset;
  }
`

const FieldWrapper = styled.div`
  
`

const Tag = styled.div`
  padding: 2px 8px;
  border: 1px solid;
  display: inline-block;
  margin-right: 5px;
  border-color: ${props => props.theme.color.basic.default};
  border-radius: ${props => props.theme.borderRadius.primary};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px 32px;
  margin-bottom: 32px;
`

const Buttons = styled.div`
  text-align: right;
`

const defArr = []
const ServicesDialog = props => {
  const {
    open,
    onClose,
    onOpen,
    isEdit,
    onServiceCancel,
    serviceTypes = defArr
  } = props

  const [typeList, setTypeList] = useState(defArr)
  const store = useStore()

  useEffect(() => {
    axios(store)
      .get(ROUTES.HOTEL_SERVICE_TYPE_LIST)
      .then(getPayloadFromSuccess)
      .then(pipe(prop('results'), setTypeList))
  }, [store])

  const services = pipe(
    values,
    flatten
  )(serviceTypes)

  const fieldNames = () => typeList.map(type => 'services[_' + type.id + ']')

  if (!open) {
    if (!isEmpty(serviceTypes)) {
      return (
        <Selected disabled={!isEdit} onClick={onOpen}>
          {services.map(type => {
            return <Tag key={type.id}>{type.name}</Tag>
          })}
          <NoopFields names={fieldNames()} />
        </Selected>
      )
    }

    return (
      <Selected
        disabled={!isEdit}
        onClick={onOpen}>
        Какие услуги предоставляет ваша гостиница клиентам?
        <NoopFields names={fieldNames()} />
      </Selected>
    )
  }

  return (
    <Modal
      width="1024px"
      title="Выберите услуги гостиницы"
      open={open}
      onClose={onServiceCancel} >
      <div>
        <Wrapper>
          {typeList.map(type => {
            return (
              <FieldWrapper key={type.id}>
                <Field
                  component={UniversalMultiSelectField}
                  api={ROUTES.HOTEL_SERVICE_LIST}
                  params={{ type: type.id }}
                  name={'services[_' + type.id + ']'}
                  label={type.name}
                />
              </FieldWrapper>
            )
          })}
        </Wrapper>
        <Buttons>
          <MediumButton type="button" onClick={onClose}>сохранить</MediumButton>
        </Buttons>
      </div>
    </Modal>
  )
}

ServicesDialog.propTypes = {
  open: PropTypes.bool,
  isEdit: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  serviceTypes: PropTypes.object,
  onServiceCancel: PropTypes.func
}

export default ServicesDialog
