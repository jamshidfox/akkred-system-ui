import React, { useState } from 'react'
import { pipe, path, prop, pathEq, find } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DisplayFlex } from '../../components/StyledElems'

const Wrapper = styled('div')``

const Container = styled('div')`
  display: inline-flex;
  position: relative
`

const TabContent = styled('div')`
  padding: 26px 0;
`

const Title = styled.div`
font-weight: bold;
font-size: 18px;
line-height: 28px;
letter-spacing: 0.5px;
color: ${props => props.theme.color.basic.default};
`

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

const Tabs = props => {
  const { children, initialValue, onChange, value } = props

  const [activeTab, setActiveTab] = useState(initialValue)
  const active = value || activeTab

  const currActiveTab = getCurrentTab(children, active)

  const onChangeTab = (event, val) => {
    setActiveTab(val)

    if (typeof onChange === 'function') {
      onChange(val)
    }
  }

  const title = getCurrentTabTitle(children, active)
  return (
    <Wrapper>
      <DisplayFlex justify={'space-between'} align="center">
        <Title>{title}</Title>
        <Container>
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
        </Container>
      </DisplayFlex>
      <TabContent>{currActiveTab}</TabContent>
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
