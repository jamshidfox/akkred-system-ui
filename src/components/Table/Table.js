import React from 'react'
import PropTypes from 'prop-types'
import EmptyQuery from '../EmptyQuery'

const Table = props => {
  const { isEmpty, loading, emptyText } = props
  if (loading) {
    return <div style={{ textAling: 'center' }}>Loading... </div>
  }
  if (isEmpty) {
    return <EmptyQuery text={emptyText}/>
  }
  return props.children
}

Table.propTypes = {
  isEmpty: PropTypes.bool,
  emptyText: PropTypes.string,
  children: PropTypes.node
}

export default Table
