import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Col } from '../Grid'

const TD = styled(Col)`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 55px;
  padding: 14px;
  font-weight: 400;
  text-transform: none;
`

const TableCol = props => {
  const { span, children, to, header, ...rest } = props
  const history = useHistory()
  const onRoute = () => to && history.push(to)

  return <TD span={span} onClick={onRoute} {...rest}>{children}</TD>
}

TableCol.propTypes = {
  span: PropTypes.number,
  children: PropTypes.node,
  header: PropTypes.bool,
  to: PropTypes.string
}

TableCol.defaultProps = {
  header: false
}
export default TableCol
