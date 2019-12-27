import React from 'react'
import PropTypes from 'prop-types'
import EmptyQuery from '../EmptyQuery'

const Table = props => {
  const { isEmpty, loading } = props
  if (loading) {
    return <div style={{ textAling: 'center' }}>Loading... </div>
  }
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
