import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EmptyQuery from '../EmptyQuery'

const Wrapper = styled.div`
  
`
const Table = props => {
  const { isEmpty, loading, emptyText, filterForm } = props
  if (isEmpty || loading) {
    return (
      <>
        {filterForm}
        {loading && <div style={{ textAling: 'center' }}>Loading... </div>}
        {!loading && <EmptyQuery text={emptyText} />}
      </>
    )
  }
  return (
    <Wrapper>
      {filterForm}
      {props.children}
    </Wrapper>
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
