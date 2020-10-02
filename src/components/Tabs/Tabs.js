import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { isEmpty } from 'ramda'

const Wrap = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  & > *:not(:last-child){
    margin-right: 16px;
  }
  ${({ styles }) => styles};
`
const TabItem = styled(Link)`
  text-transform: uppercase;
  color: ${({ theme, active }) => active ? theme.palette.primary : '#7d8893'};
  border-bottom: ${({ theme, active }) => active ? `1px solid ${theme.palette.primary}` : '1px solid transparent'};
  font-size: 12px;
  line-height: 12px;
  padding-bottom: 4px;
  font-weight: 500;
  letter-spacing: 0.5px;
  user-select: none;
`

const Tabs = props => {
  const {
    list,
    styles
  } = props

  // Location
  const { pathname } = useLocation()

  // Render
  if (!isEmpty(list)) {
    return (
      <Wrap
        styles={styles}
      >
        {list.map((item, index) => {
          const {
            url = '#',
            name
          } = item

          // Const
          const isActive = pathname === url

          // Render
          return (
            <TabItem
              key={index}
              active={isActive}
              to={{
                pathname: url
              }}
            >
              {name}
            </TabItem>
          )
        })}
      </Wrap>
    )
  } else {
    return false
  }
}

export default Tabs
