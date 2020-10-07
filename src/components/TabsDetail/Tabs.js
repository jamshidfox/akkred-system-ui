import React, { useState } from 'react'
import { pipe, path, pathEq, find, prop } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Styles
const Wrapper = styled('div')``
const TabsItems = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid #eaf2fd;
`
const TabContent = styled('div')``
const Title = styled('div')`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.color.basic.default};
`

// Tools
const getCurrentTab = (tabs, activeTab) =>
  pipe(
    find(pathEq(['props', 'value'], activeTab)),
    path(['props', 'children'])
  )(tabs)

const getCurrentTabTitle = (tabs, activeTab) =>
  pipe(
    find(pathEq(['props', 'value'], activeTab)),
    path(['props', 'title'])
  )(tabs)

// Component
const Tabs = props => {
  const {
    children,
    initialValue,
    onChange,
    value
  } = props

  // useState
  const [activeTab, setActiveTab] = useState(initialValue)

  // Const
  const active = value || activeTab
  const currActiveTab = getCurrentTab(children, active)

  // Handlers
  const onChangeTab = (event, val) => {
    setActiveTab(val)
    if (typeof onChange === 'function') {
      onChange(val)
    }
  }

  // TabsItems
  const tabsItems =
    <TabsItems>
      {React.Children.map(children, (child, index) => {
        const defaultProps = prop('props', child)
        const tabValue = prop('value', defaultProps)

        const tabProps = {
          ...defaultProps,
          key: index,
          isActive: active === tabValue,
          onClick: event => onChangeTab(event, tabValue)
        }

        return (
          child && React.cloneElement(child, tabProps)
        )
      })}
    </TabsItems>

  // TabsContent
  const tabsContent =
    <TabContent>
      {currActiveTab}
    </TabContent>

  // Title
  const titleText = getCurrentTabTitle(children, active)
  const title = titleText &&
    <Title>
      {titleText}
    </Title>

  // Render
  return (
    <Wrapper>
      {title}
      {tabsItems}
      {tabsContent}
    </Wrapper>
  )
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  initialValue: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
}

Tabs.defaultProps = {
  value: null
}

export default Tabs
