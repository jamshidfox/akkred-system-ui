import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Row as RowUI } from '../Grid'

const Row = styled(RowUI)`
  padding: 15px 10px;
  margin: 0 -10px;
  border-bottom: 1px #efefef solid;
  cursor: pointer;
  transition: all 300ms;
  :hover {
    background: #FAFAFB
  }
`
const TableRow = props => {
  const { children, header, to, ...rest } = props

  const history = useHistory()
  const onRoute = () => to && history.push(to)

  return <Row onClick={onRoute} {...rest} >
    {React.Children.map(children, (child) => React.cloneElement(child, { header }))}
  </Row>
}

TableRow.propTypes = {
  gutter: PropTypes.number,
  children: PropTypes.node,
  header: PropTypes.bool,
  to: PropTypes.string
}

TableRow.defaultProps = {
  header: false
}
export default TableRow
