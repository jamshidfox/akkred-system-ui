import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import { useStore } from 'react-redux'
import { pipe, prop, isEmpty, flatten, values } from 'ramda'
import { Modal, MediumButton } from '../../../components/UI'

import { UniversalMultiSelectField, NoopFields } from '../../../components/FormField'
import axios, { getPayloadFromSuccess } from '../../../utils/axios'
import * as ROUTES from '../../../constants/api'

const Selected = styled.button`
  display: block;
    width: 100%;
    text-align: left;
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
  :disabled {
    background: ${props => props.theme.input.background};
  }
`

const FieldWrapper = styled.div`
  display: inline-block;
  width: calc(100%/3);
  padding: 0 20px;
  margin-bottom: 20px;
`

const Tag = styled.div`
  padding: 2px 8px;
  border: 1px solid;
  display: inline-block;
  margin-right: 5px;
  border-color: ${props => props.theme.color.basic.default};
  border-radius: ${props => props.theme.borderRadius};
`

const Wrapper = styled.div`
  margin: 0 -20px;
 
`
const Buttons = styled.div`
  text-align: right;
`
const defArr = []
const FacilitiesDialog = props => {
  const {
    open,
    onClose,
    onOpen,
    onServiceCancel,
    serviceTypes = defArr
  } = props
  const [typeList, setTypeList] = useState(defArr)
  const store = useStore()
  useEffect(() => {
    axios(store)
      .get(ROUTES.ROOM_FACILITY_TYPE_LIST)
      .then(getPayloadFromSuccess)
      .then(pipe(prop('results'), setTypeList))
  }, [store])

  const services = pipe(
    values,
    flatten
  )(serviceTypes)

  const fieldNames = () => typeList.map(type => 'facilities[_' + type.id + ']')

  if (!open) {
    if (!isEmpty(serviceTypes)) {
      return (
        <Selected onClick={onOpen}>
          {services.map(type => {
            return <Tag key={type.id}>{type.name}</Tag>
          })}
          <NoopFields names={fieldNames()} />
        </Selected>
      )
    }
    return (
      <Selected
        onClick={onOpen}>
        Какие услуги предоставляет ваша гостиница клиентам?
        <NoopFields names={fieldNames()} />
      </Selected>
    )
  }

  return (
    <Modal
      width="1024px"
      title="Выберите услуги комнаты"
      open={open}
      onClose={onServiceCancel} >
      <div>
        <Wrapper>
          {typeList.map(type => (
            <FieldWrapper>
              <Field
                component={UniversalMultiSelectField}
                api={ROUTES.FACILITIES_LIST}
                params={{ type: type.id }}
                name={'facilities[_' + type.id + ']'}
                label={type.name} />
            </FieldWrapper>
          ))}
        </Wrapper>
        <Buttons>
          <MediumButton type="button" onClick={onClose}>сохранить</MediumButton>
        </Buttons>
      </div>
    </Modal>
  )
}

FacilitiesDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  serviceTypes: PropTypes.object,
  onServiceCancel: PropTypes.func
}
export default FacilitiesDialog
