import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BoxUI from '../../../components/StyledElems/Box'
import { Input, MediumButton } from '../../../components/UI'

const Box = styled(BoxUI)`
  box-shadow: 0px 16px 24px rgba(8, 35, 48, 0.16);
  width: 430px;
  padding: 56px;

`
const Register = props => {
  const { onLogin } = props

  const [state, setState] = React.useState({})

  const onChange = ev => {
    const name = ev.target.name
    const value = ev.target.value
    return setState({ ...state, [name]: value })
  }
  return (
    <Box>
      <Input placeholder={'Введите логин'} name={'username'} onChange={onChange} />
      <Input placeholder={'Введите пароль'} name={'password'} onChange={onChange} />

      <div><MediumButton onClick={() => onLogin(state)} >войти</MediumButton></div>
    </Box>
  )
}

Register.propTypes = {
  onLogin: PropTypes.func
}
export default Register
