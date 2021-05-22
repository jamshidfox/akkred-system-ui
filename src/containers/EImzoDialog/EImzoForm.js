import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ChevronDown from 'icons/ChevronDown'
import {PageRowTitle, SecondarySmallButton} from '../../components/UI'

import useEImzo from './hooks/useEImzo'

const FieldWrap = styled.div`
  margin-top: 20px;
`

const FieldLabel = styled.div`
`
const SelectWrapper = styled.div`
  position: relative;

`

const Select = styled.select`
  appearance: none;
  background: #fbfbfd;

  color: #3366FF;
  display: block;
  height: 40px;
  padding: 0 40px 0 18px;
  outline: none;
  width: 100%;

  & + svg {
    position: absolute;
    top: 10px;
    right: 12px;
  }

  &:hover {
  }

  &:focus {
    // & + svg {
    // }
  }
`

const MessageLabel = styled.label`
  display: block;
  margin-bottom: 15px;

  &:empty {
    display: none;
  }
`

const ErrorMessageLabel = styled(MessageLabel)`
`

const EImzoForm = props => {
  const { text, onSubmit } = props

  const formRef = useRef()

  const onSuccess = (...data) => {
    onSubmit(...data)
  }

  const imzoParams = {
    formRef,
    text,
    onSuccess
  }

  const {
    isLoading,
    errorMessage,
    onChangeSelect,
    onSign
  } = useEImzo(imzoParams)

  return (
    <form ref={formRef}>
      {isLoading
        ? <MessageLabel>Loading</MessageLabel>
        : <ErrorMessageLabel>{errorMessage}</ErrorMessageLabel>}

      <FieldWrap>
        <PageRowTitle name="Kalit" />
        <SelectWrapper>
          <Select name="key" onChange={onChangeSelect} />
          <ChevronDown />
        </SelectWrapper>
      </FieldWrap>

      <FieldWrap>
        <SecondarySmallButton onClick={onSign} type="button" >
          Imzolash
        </SecondarySmallButton>
      </FieldWrap>
    </form>
  )
}

EImzoForm.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default EImzoForm
