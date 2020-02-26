import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field, InputField } from '~/components/FormField'
import { MediumButton } from '~/components/UI'
import { Box as BoxUI } from '~/components/StyledElems'

const Box = styled(BoxUI)`
  box-shadow: 0 16px 24px rgba(8, 35, 48, 0.16);
  width: 430px;
  padding: 56px;
`

const Fields = styled('div')`
  position:relative;
`

const InputWrap = styled('div')`
  &:not(:first-child) {
    margin-top: 40px;
  }
`

const Actions = styled('div')`
  align-items: center;
  display:flex;
  justify-content: space-between;
  margin-top: 40px;
`

const Forgot = styled.div`
  color: ${props => props.theme.color.basic.default};
  cursor:pointer;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`

const SubmitButton = styled(MediumButton)`
  width: 120px;
`

const SubmitError = styled('div')`
  color: ${props => props.theme.color.danger.default};
  font-size: 12px;
  text-align: left;
  margin: 8px 0 -22px;
`

const LoginFields = props => {
  const { submitError } = props

  return (
    <Box>
      <Fields>
        <InputWrap>
          <Field
            name={'username'}
            component={InputField}
            placeholder={'Введите логин'}
          />
        </InputWrap>
        <InputWrap>
          <Field
            name={'password'}
            component={InputField}
            placeholder={'Введите пароль'}
            type={'password'}
          />
        </InputWrap>

        {submitError && (
          <SubmitError>{submitError}</SubmitError>
        )}
      </Fields>

      <Actions>
        <Forgot>Забыли пароль?</Forgot>
        <SubmitButton type={'submit'}>Войти</SubmitButton>
      </Actions>
    </Box>
  )
}

LoginFields.propTypes = {
  submitError: PropTypes.string,
}

export default LoginFields