import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTab = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 27px 7px;
  white-space: nowrap;
  cursor: ${({ isActive }) => isActive ? 'default' : 'pointer'};
  background: ${({ isActive }) => isActive ? '#eaf2fd' : '#fff'};
  font-weight: ${({ isActive }) => isActive ? 400 : 400};
  color: ${({ isActive, theme }) => isActive ? theme.palette.primary : theme.text.secondary};
  user-select: none;
  min-height: 40px;
  font-size: 14px;
  line-height: 1.3;
  flex-grow: 1;
  &:not(:last-child){
    border-right: 1px solid #eaf2fd;
  }
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
