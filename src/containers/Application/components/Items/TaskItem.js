import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from 'components/Text/Text'

// Styles
const Item = styled('div')`
  min-height: 42px;
  font-size: 13px;
  line-height: 1.7;
  &:nth-child(odd){
    background: #f7f7f7
  }
`
const Main = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 32px 10px;
`
const LeftSide = styled('div')`
  color: ${({ theme }) => theme.text.title};
  font-weight: 500;
  width: 55%;
  min-width: 55%;
`
const RightSide = styled('div')`
  flex-grow: 1;
`
const Description = styled('div')`
  padding: 0 32px 17px;
`

// Component
const TaskItem = props => {
  const {
    it,
    is,
    description,
    withoutIs
  } = props

  // Render
  return (
    <Item>
      <Main>
        <LeftSide>
          {it}
        </LeftSide>
        <RightSide>
          {!withoutIs && (is || (<Text color={'secondary'}>- - - - - - - -</Text>))}
        </RightSide>
      </Main>
      {description &&
      <Description>
        {description}
      </Description>}
    </Item>
  )
}

TaskItem.propTypes = {
  it: PropTypes.any,
  is: PropTypes.any
}

export default TaskItem
