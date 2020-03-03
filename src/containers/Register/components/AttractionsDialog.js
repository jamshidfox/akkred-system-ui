import React from 'react'
import PropTypes from 'prop-types'
import { join, map, pipe, prop, propOr } from 'ramda'
import { useFormState } from 'react-final-form'
import styled from 'styled-components'
import * as API from '~/constants/api'
import { Modal, MediumButton } from '~/components/UI'
import {
  Field,
  UniversalMultiSelectField
} from '~/components/FormField'
import { FieldWrapper } from '~/components/StyledElems'

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
    :hover:not(:disabled) {
      background: ${props => props.theme.input.backgroundColorHover};
  }
  :disabled {
    background: ${props => props.theme.input.background};
    cursor: unset;
  }
`

const Buttons = styled.div`
  text-align: center;
`

const AttractionsDialog = props => {
  const {
    open,
    onOpen,
    onClose,
    isEdit,
  } = props

  const { values } = useFormState()
  const attractionTypes = pipe(
    propOr([], 'attractionTypes'),
    map(prop('id')),
    join('-')
  )(values)

  return (
    <>
      <Selected onClick={onOpen} disabled={!isEdit} type={'button'}>
        Ближайшие достопримечательности и развлекательные центры
      </Selected>

      <Modal
        title={'Ближайшие достопримечательности'}
        open={open}
        onClose={onClose}
        width={'1024px'}>
        <FieldWrapper>
          <Field
            name={'attractionTypes'}
            component={UniversalMultiSelectField}
            api={API.HOTEL_ATTRACTION_TYPE_LIST}
            params={{ children_only: false }}
            label={'Типы достопримечательностей'}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Field
            name={'attractions'}
            component={UniversalMultiSelectField}
            api={API.HOTEL_ATTRACTION_TYPE_LIST}
            params={{ children_only: true, parent: attractionTypes }}
            parent={attractionTypes}
            label={'Достопримечательности'}
            disabled={!attractionTypes}
          />
        </FieldWrapper>

        <Buttons>
          <MediumButton type="button" onClick={onClose}>сохранить</MediumButton>
        </Buttons>
      </Modal>
    </>
  )
}

AttractionsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
}

export default AttractionsDialog
