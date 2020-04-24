import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Col } from '../Grid'
import Label from './Label'

const TableCol = props => {
  const { span, children, to, header, ...rest } = props
  const history = useHistory()
  const onRoute = () => to && history.push(to)

  if (header) {
    return (
      <Col span={span} onClick={onRoute} {...rest}><Label>{children}</Label></Col>
    )
  }
  return <Col span={span} onClick={onRoute} {...rest}>{children}</Col>
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
