import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { useHistory } from 'react-router-dom'

const Row = styled('tr')`
  cursor: ${({ header, onClick }) => header ? 'auto' : onClick ? 'pointer' : 'unset'};
  transition: ${({ theme }) => theme.transition.primary};
  line-height: 1.2;
  text-align: ${({ align }) => align};
  text-transform: none;
  & th{
    color: ${({ theme }) => theme.text.tableHead};
    font-size: 15px;
    padding: 14px;
    min-height: 55px;
    font-weight: 500;
    background: ${({ theme }) => theme.background.tableHead};
  }
  & td {
    color: ${({ theme }) => theme.text.primary};
    font-size: 14px;
    min-height: 55px;
    padding: 14px;
    font-weight: 400;
    background: transparent;
  }
  & th{
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;
    &:first-child{
      border-left: 1px solid #f6f6f6;
    }
    &:last-child{
      border-right: 1px solid #f6f6f6;
    }
  }
  & th, td{
    &:first-child{
      border-radius: ${({ theme }) => `${theme.borderRadius.table} 0 0 ${theme.borderRadius.table}`};
    }
    &:last-child{
      border-radius: ${({ theme }) => `0 ${theme.borderRadius.table} ${theme.borderRadius.table} 0`};
    }
  }
  &:nth-child(odd){
    background: ${({ theme, header }) => !header && theme.background.tableOdd};
  }
  &:hover {
    background: ${({ theme, header, onClick }) => header ? 'unset' : onClick && theme.background.tableHover}
    transition: ${({ theme }) => theme.transition.primary};
  }
`

const TableRow = props => {
  const {
    children,
    header,
    onClick,
    to,
    align = 'left',
    ...rest
  } = props

  // const history = useHistory()
  // const onRoute = () => to && history.push(to)

  return (
    <Row
      header={header}
      onClick={onClick}
      to={to}
      align={align}
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
