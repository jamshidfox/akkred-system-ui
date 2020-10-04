import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledTab = styled('div')`
  cursor: pointer;
  padding: 18px  5px 10px 5px;
  font-size: 12px;
  line-height: 16px;
  margin: -20px;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius.primary};
  //text-transform: uppercase;
  font-weight: bold;
  outline: none;
  transition: background-color 200ms;
  &:not(:last-child) {
    margin-right: 30px;
  }
  ${props => props.isActive && (
    css`
      background-color: ${props => props.theme.color.primary.default};
      color: #fff;
      position: relative;
    `
  )}
`

const Tab = ({ label, ...props }) => {
  return <StyledTab {...props}>{label}</StyledTab>
}

Tab.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Tab
