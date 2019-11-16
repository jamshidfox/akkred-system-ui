import React from 'react'
import PropTypes from 'prop-types'
import { Row } from '../Grid'

const TableRow = props => {
  const { children, header, ...rest } = props
  console.warn(children)
  return <Row {...rest} >
    {React.Children.map(children, (child) => React.cloneElement(child, { header }))}
  </Row>
}

TableRow.propTypes = {
  gutter: PropTypes.number,
  children: PropTypes.node,
  header: PropTypes.bool
}

TableRow.defaultProps = {
  header: false
}
export default TableRow
