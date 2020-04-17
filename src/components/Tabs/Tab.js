import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledTab = styled('div')`
  cursor: pointer;
  padding: 10px 13px;
  font-size: 14px;
  line-height: 16px;
  border-radius: ${props => props.theme.borderRadius};
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  transition: background-color 200ms;
  &:not(:last-child) {
    margin-right: 24px;
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
