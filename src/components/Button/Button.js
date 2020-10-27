import React from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

const Wrap = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  min-height: ${({ height }) => height};
  min-width: ${({ width, height }) => width || height};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  transition: ${({ theme }) => theme.transition.primary};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  background: ${({ theme }) => theme.background.buttonSecondary};
  border: 1px solid transparent;
  padding: 9px 20px;
  z-index: ${({ zIndex }) => zIndex};
  line-height: 1.1;
  outline: none;
  & svg {
    width: ${({ svgSize }) => svgSize};
    height: ${({ svgSize }) => svgSize};
    margin-right: 8px;
    color: ${({ svgColor }) => svgColor};
  }
  ${({ styles }) => styles};
  &:active{
    opacity: 0.7;
    transition: ${({ theme }) => theme.transition.primary};
  }
`
const Prefix = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: ${({ svgSize }) => svgSize};
    height: ${({ svgSize }) => svgSize};
    color: ${({ svgColor }) => svgColor};
    margin-right: 8px;
  }
`

const Button = props => {
  const {
    themeType = 'primary',
    theme,
    type = 'submit',
    height = '36px',
    width,
    text,
    fontWeight = 400,
    uppercase,
    svgSize = '18px',
    svgColor = '#9aa4af',
    onClick,
    zIndex,
    prefix,
    fontSize = '14px',
    styles
  } = props

  // TypeStyles
  const typeStyles = () => {
    switch (themeType) {
    case 'primary': return ({
      color: theme.palette.white,
      background: theme.palette.primary
    })
    case 'secondary': return ({
      color: theme.color.primary,
      background: theme.palette.buttonSecondary,
      border: theme.border.button
    })
    case 'minor': return ({
      color: theme.palette.primary,
      background: 'transparent'
    })
    default: return ({
      color: theme.palette.white,
      background: theme.palette.primary
    })
    }
  }

  // Render
  return (
    <Wrap
      styles={{ ...typeStyles(), ...styles }}
      type={type}
      zIndex={zIndex}
      fontWeight={fontWeight}
      uppercase={uppercase}
      onClick={onClick}
      fontSize={fontSize}
      height={height}
      svgSize={svgSize}
      svgColor={svgColor}
      width={width}
    >
      {prefix &&
      <Prefix>{prefix}</Prefix>}
      {text}
    </Wrap>
  )
}

Button.propTypes = {
  text: PropTypes.any.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  themeType: PropTypes.string,
  zIndex: PropTypes.number,
  svgSize: PropTypes.string,
  fontWeight: PropTypes.number,
  uppercase: PropTypes.bool,
  onClick: PropTypes.func,
  prefix: PropTypes.any,
  fontSize: PropTypes.string
}

export default withTheme(Button)
