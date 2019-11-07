import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { BaseButton } from './Button'

const dims = {
  giant: '56px',
  large: '48px',
  medium: '40px',
  small: '32px',
  tiny: '24px',
}
const svgDim = {
  giant: '24px',
  large: '20px',
  medium: '16px',
  small: '13px',
  tiny: '10px',
}
const svgBox = {
  giant: '24',
  large: '20',
  medium: '16',
  small: '13',
  tiny: '10',
}
const BaseIconButton = styled(BaseButton)`
  width: ${({ size }) => dims[size]};
  height: ${({ size }) => dims[size]};
`
const ButtonIcon = icon => styled(icon)`
  vertical-align: middle;
  width: ${({ size }) => svgDim[size]};
  height: ${({ size }) => svgDim[size]};
`

const IconButton = props => {
  const { icon, size = 'medium', children, ...rest } = props

  const Icon = ButtonIcon(icon)
  return <BaseIconButton {...rest} size={size}><Icon size={size} />{children}</BaseIconButton>
}

IconButton.propTypes = {
  size: PropTypes.oneOf(Object.keys(dims)),
  icon: PropTypes.func.isRequired,
  children: PropTypes.node,
}
export default IconButton
