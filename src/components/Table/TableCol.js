import React from 'react'
import PropTypes from 'prop-types'
import { Col } from '../Grid'
import Label from './Label'

const TableCol = props => {
  const { span, children, header, ...rest } = props
  if (header) {
    return (
      <Col span={span} {...rest}><Label>{children}</Label></Col>
    )
  }
  return <Col span={span} {...rest}>{children}</Col>
}

TableCol.propTypes = {
  span: PropTypes.number,
  children: PropTypes.node,
  header: PropTypes.bool
}

TableCol.defaultProps = {
  header: false
}
export default TableCol
