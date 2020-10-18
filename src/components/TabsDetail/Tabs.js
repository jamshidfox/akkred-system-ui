import React, { useState, useRef } from 'react'
import { pipe, path, pathEq, find, prop, findIndex, pathOr, slice, map, sum } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChevronLeft from '../../icons/ChevronLeft'
import ChevronRight from '../../icons/ChevronRight'

// Styles
const Wrapper = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`
const TabsItems = styled('div')`
  position: relative;
  width: 100%;
  margin: 0 40px 20px;
`
const TabsItemsInner = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  width: calc(100% - 80px);
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
  left: ${({ left }) => left && '-40px'};
  right: ${({ right }) => right && '40px'};
  top: 0;
  min-width: 42px;
  width: 42px;
  height: 42px;
  border-top-left-radius: ${({ left }) => left ? '10px' : '0px'};
  border-top-right-radius: ${({ right }) => right ? '10px' : '0px'};;
  border-bottom-left-radius: ${({ left }) => left ? '10px' : '0px'};
  border-bottom-right-radius: ${({ right }) => right ? '10px' : '0px'};;
  border: 1px solid #eaf2fd;
  background: ${({ disabled }) => disabled ? '#fdfdfd' : '#fff'};
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
const TabContent = styled('div')`
  flex-grow: 1;
`
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
  const prevIndex = currentIndex !== 0 ? +currentIndex - 1 : tabs.length - 1
  const prevTabValue = prop(prevIndex, tabs)

  return path(['props', 'value'], prevTabValue)
}

const getWidthPrevItems = (tabs, ref, activeTab, side = 'left') => {
  const children = pathOr([], ['current', 'children'], ref)
  const mappedLeftItems = map(({ offsetWidth }) => (offsetWidth), children)
  const index = side === 'left'
    ? findIndex(pathEq(['props', 'value'], activeTab))(tabs) + 1
    : findIndex(pathEq(['props', 'value'], activeTab))(tabs) - 1
  const leftItems = slice(0, index, mappedLeftItems)
  return sum(leftItems)
}

const getCurrentItemWidth = (tabs, ref, activeTab) => {
  const children = pathOr([], ['current', 'children'], ref)
  const index = findIndex(pathEq(['props', 'value'], activeTab))(tabs)
  return path([index, 'offsetWidth'], children)
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

  // Ref
  const tabsRef = useRef(null)

  // Const
  const active = value || activeTab
  const currActiveTab = getCurrentTab(children, active)
  const currIndexTab = findIndex(pathEq(['props', 'value'], active))(children)
  const nextTabValue = getNextTabValue(children, active)
  const prevTabValue = getPrevTabValue(children, active)
  const leftItemsWidth = getWidthPrevItems(children, tabsRef, active)
  const rightItemsWidth = getWidthPrevItems(children, tabsRef, active, 'right')
  const currentItemWidth = getCurrentItemWidth(children, tabsRef, active) || 0

  // Handlers
  const handleSwipeToLeftItems = () => {
    const offsetWidth = tabsRef.current.offsetWidth || 0
    tabsRef.current.scrollLeft = leftItemsWidth - (offsetWidth / 2) + (currentItemWidth / 2)
  }
  const handleSwipeToRightItems = () => {
    const offsetWidth = tabsRef.current.offsetWidth || 0
    tabsRef.current.scrollLeft = rightItemsWidth - (offsetWidth / 2) + (currentItemWidth / 2)
  }
  const onChangeTab = (event, val) => {
    setActiveTab(val)
    if (typeof onChange === 'function') {
      onChange(val)
    }
  }
  const handleNextTab = () => {
    setActiveTab(nextTabValue)
    handleSwipeToLeftItems()
  }
  const handlePrevTab = () => {
    setActiveTab(prevTabValue)
    handleSwipeToRightItems()
  }

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
      <TabsItemsInner
        ref={tabsRef}
      >
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
