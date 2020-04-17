import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DisplayFlex } from '../StyledElems'

const Title = styled.div`
font-weight: bold;
font-size: 18px;
line-height: 28px;
letter-spacing: 0.5px;
color: ${props => props.theme.color.basic.default};
`

const Display = styled(DisplayFlex)`
  padding-bottom: 30px;
`
const PageTitle = props => {
  const { name, children } = props

  return (
    <Display align={'center'} justify={'space-between'}>
      <Title>{name}</Title>
      {children}
    </Display>
  )
}

PageTitle.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node
}
export default PageTitle
