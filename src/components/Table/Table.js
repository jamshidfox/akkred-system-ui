import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EmptyQuery from '../EmptyQuery'

const Wrapper = styled('table')`
  border-collapse: separate;
  border-spacing: 0 5px;
  ${({ styles }) => styles};
`
const Table = props => {
  const {
    isEmpty,
    loading,
    emptyText,
    filterForm,
    styles,
    children
  } = props

  // Render
  if (isEmpty || loading) {
    return (
      <>
        {filterForm}
        {loading && <div style={{ textAlign: 'center', marginTop: '30px' }}>Loading... </div>}
        {!loading && <EmptyQuery text={emptyText} />}
      </>
    )
  }
  return (
    <>
      {filterForm}
      <Wrapper
        styles={styles}
      >
        <tbody>
          {children}
        </tbody>
      </Wrapper>
    </>
  )
}

Table.propTypes = {
  isEmpty: PropTypes.bool,
  emptyText: PropTypes.string,
  loading: PropTypes.bool,
  filterForm: PropTypes.node,
  children: PropTypes.node
}

export default Table
