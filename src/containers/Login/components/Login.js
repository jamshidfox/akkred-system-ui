import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Box as BoxUI, DisplayFlex} from '../../../components/StyledElems'
import { Input as InputUI, MediumButton } from '../../../components/UI'

const Wrapper = styled.div`
  text-align: center;
`

const Box = styled(BoxUI)`
  box-shadow: 0px 16px 24px rgba(8, 35, 48, 0.16);
  width: 430px;
  padding: 56px;

`

const Logo = styled.div`
  font-size: 82px;
  color: #fff;
  letter-spacing: 5px;
`

const Intro = styled.div`
font-size: 10px;
text-align: center;
letter-spacing: 1.5px;
text-transform: uppercase;
margin-bottom: 60px;
/* White / 60% */

color: rgba(255, 255, 255, 0.6);
`
const Input = styled(InputUI)`
  margin-bottom: 40px;
`

const Forgot = styled.div`
  color: ${props => props.theme.color.basic.default};
  font-weight: normal;
font-size: 12px;
line-height: 16px;
`
const Login = props => {
  const { onLogin } = props

  const [state, setState] = React.useState({})

  const onChange = ev => {
    const name = ev.target.name
    const value = ev.target.value
    return setState({ ...state, [name]: value })
  }
  return (
    <Wrapper>
      <Logo>
        Hotilier
      </Logo>
      <Intro>
        Property management system
      </Intro>
      <Box>
        <Input placeholder={'Введите логин'} name={'username'} onChange={onChange} />
        <Input placeholder={'Введите пароль'} name={'password'} onChange={onChange} />

        <DisplayFlex align={'center'} justify={'space-between'}>
          <Forgot>Забыли пароль?</Forgot>
          <MediumButton onClick={() => onLogin(state)} >войти</MediumButton>
        </DisplayFlex>
      </Box>
    </Wrapper>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func
}
export default Login
