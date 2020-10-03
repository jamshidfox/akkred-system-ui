import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Row as RowUI } from '../Grid'

const Row = styled(RowUI)`
  cursor: ${({ header, to }) => header ? 'auto' : to ? 'pointer' : 'unset'};
  transition: ${({ theme }) => theme.transition.primary};
  font-size: ${({ head }) => head ? '14px' : '12px'};
  line-height: 1.2;
  border: ${({ header }) => header ? '1px solid #f6f6f6' : '1px solid transparent'};
  color: ${({ theme, header }) => header ? theme.text.tableHead : theme.text.primary};
  background: ${({ theme, header }) => header ? theme.background.tableHead : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.table};
  &:not(:last-child){
    margin-bottom: 3px;
  }
  &:nth-child(even){
    background: ${({ theme, header }) => !header && theme.background.tableOdd};
  }
  &:hover {
    background: ${({ theme, header, to }) => header ? 'unset' : to && theme.background.tableHover}
    transition: ${({ theme }) => theme.transition.primary};
  }
`

const TableRow = props => {
  const {
    children,
    header,
    to,
    align,
    ...rest
  } = props

  const history = useHistory()
  const onRoute = () => to && history.push(to)

  return (
    <Row
      header={header}
      onClick={onRoute}
      to={to}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (!child) return null
        return React.cloneElement(child, { header, align })
      })}
    </Row>
  )
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
