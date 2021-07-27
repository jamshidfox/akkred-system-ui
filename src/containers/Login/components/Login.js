import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import LoginFields from './LoginFields'
import { FinalForm } from '~/components/FormField'

const Wrapper = styled('div')`
  font-family: "Open Sans", sans-serif;
  text-align: center;
`
const LogoWrap = styled('div')``
const Logo = styled('div')`
  color: #fff;
  font-size: 84px;
  font-family: "Aleo", sans-serif;
  text-align: center;
`
const Intro = styled('div')`
  font-size: 10px;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  text-transform: uppercase;
  margin: 12px 0 95px;
  color: rgba(255, 255, 255, 0.6);
`

const Login = props => {
  const { onLogin } = props

  return (
    <Wrapper>
      <LogoWrap>
        <Logo>Akkreditatsiya</Logo>
        <Intro>avtomatlashtirilgan axborot tizimi</Intro>
      </LogoWrap>
      <FinalForm onSubmit={onLogin}>
        <LoginFields />
      </FinalForm>
    </Wrapper>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func
}
export default Login
