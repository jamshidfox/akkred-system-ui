import React, { useState } from 'react'
import { pipe, path, pathEq, find, prop, findIndex, pathOr } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChevronLeft from '../../icons/ChevronLeft'
import ChevronRight from '../../icons/ChevronRight'

// Styles
const Wrapper = styled('div')``
const TabsItems = styled('div')`
  position: relative;
  width: 100%;
  margin: 0 42px 20px;
`
const TabsItemsInner = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  width: calc(100% - 82px);
  //border-radius: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid #eaf2fd;
  ::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
`
const TabButton = styled('button')`
  position: absolute;
  left: ${({ left }) => left && '-41px'};
  right: ${({ right }) => right && '41px'};
  top: 0;
  min-width: 40px;
  width: 40px;
  height: 42px;
  border: 1px solid transparent;
  border-top-left-radius: ${({ left }) => left ? '10px' : '0px'};
  border-top-right-radius: ${({ right }) => right ? '10px' : '0px'};;
  border-bottom-left-radius: ${({ left }) => left ? '10px' : '0px'};
  border-bottom-right-radius: ${({ right }) => right ? '10px' : '0px'};;
  background: ${({ disabled }) => disabled ? '#f1f1f1' : '#eaf2fd'};
  outline: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  transition: ${({ theme }) => theme.transition.primary};
  & > svg{
    margin-top: 4px;
    width: 14px;
    height: 14px;
    color: ${({ theme, disabled }) => disabled ? '#bdbdbd' : theme.palette.primary};
  }
  &:active{
    opacity: ${({ disabled }) => !disabled && '0.7'};
    transition: ${({ theme }) => theme.transition.primary};
  }
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

const getNextTabValue = (tabs, activeTab) => {
  const currentIndex = findIndex(pathEq(['props', 'value'], activeTab))(tabs)
  const nextIndex = +currentIndex + 1
  const nextTabValue = prop(nextIndex, tabs)
  const firstTabValue = path(['0', 'props', 'value'], tabs)

  return pathOr(firstTabValue, ['props', 'value'], nextTabValue)
}

const getPrevTabValue = (tabs, activeTab) => {
  const currentIndex = findIndex(pathEq(['props', 'value'], activeTab))(tabs)
  const nextIndex = currentIndex !== 0 ? +currentIndex - 1 : tabs.length - 1
  const prevTabValue = prop(nextIndex, tabs)

  return path(['props', 'value'], prevTabValue)
}

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
  const currIndexTab = findIndex(pathEq(['props', 'value'], active))(children)
  const nextTabValue = getNextTabValue(children, active)
  const prevTabValue = getPrevTabValue(children, active)

  // Handlers
  const onChangeTab = (event, val) => {
    setActiveTab(val)
    if (typeof onChange === 'function') {
      onChange(val)
    }
  }
  const handleNextTab = () => setActiveTab(nextTabValue)
  const handlePrevTab = () => setActiveTab(prevTabValue)

  // TabsItems
  const tabsItems =
    <TabsItems>
      <TabButton
        left={true}
        onClick={handlePrevTab}
        disabled={currIndexTab === 0}
      >
        <ChevronLeft />
      </TabButton>
      <TabsItemsInner>
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
      </TabsItemsInner>
      <TabButton
        right={true}
        onClick={handleNextTab}
        disabled={+currIndexTab + 1 === children.length}
      >
        <ChevronRight />
      </TabButton>
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
