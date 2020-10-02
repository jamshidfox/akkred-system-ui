import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrap = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
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

  // Render
  return (
    <Wrap
      styles={styles}
    >
      {list.map((item, index) => {
        const {
          url,
          name
        } = item
        return (
          <TabItem
            key={index}
            active={index === 0}
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
}

export default Tabs
