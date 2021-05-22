import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DisplayFlex } from '../StyledElems'

const Title = styled.div`
  color: #54627c;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 11px;
  font-style: normal;
  line-height: 11px;
  letter-spacing: 0em;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
`

const Display = styled(DisplayFlex)`
`
const PageRowTitle = props => {
  const { name, children } = props

  return (
    <Display align={'center'} justify={'space-between'}>
      <Title>{name}</Title>
      {children}
    </Display>
  )
}

PageRowTitle.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node
}
export default PageRowTitle
