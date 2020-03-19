import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Row as RowUI } from '../Grid'

const Row = styled(RowUI)`
  padding: 15px 10px;
  margin: 0 -10px;
  border-bottom: 1px #efefef solid;
  cursor: ${props => props.header ? 'auto' : 'pointer'};
  transition: all 300ms;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background: ${props => props.header ? 'unset' : '#FAFAFB'}
  }
`
const TableRow = props => {
  const { children, header, to, align, ...rest } = props

  const history = useHistory()
  const onRoute = () => to && history.push(to)

  return <Row header={header} onClick={onRoute} {...rest} >
    {React.Children.map(children, (child) => React.cloneElement(child, { header, align }))}
  </Row>
}

TableRow.propTypes = {
  gutter: PropTypes.number,
  children: PropTypes.node,
  header: PropTypes.bool,
  align: PropTypes.bool,
  to: PropTypes.string
}

TableRow.defaultProps = {
  header: false
}
export default TableRow
