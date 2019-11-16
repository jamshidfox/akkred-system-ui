import React from 'react'
import PropTypes from 'prop-types'
import EmptyQuery from '../EmptyQuery'

const Table = props => {
  const { isEmpty } = props
  if (isEmpty) {
    return <EmptyQuery />
  }
  return props.children
}

Table.propTypes = {
  isEmpty: PropTypes.bool,
  children: PropTypes.node
}

export default Table
