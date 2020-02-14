import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Filter from '../Filter'
import SearchField from './SearchField'

const Container = styled('div')`
  display:flex;
  justify-content: space-between;
  padding: 15px 0;
  position: relative;
`

const Actions = styled('div')`
  display: flex;
  margin-left: auto;
`

const TableActions = props => {
  const {
    filterForm,
    filterActions,
    extraButtons,
    searchKey
  } = props


  return (
    <Container>
      {filterActions && (
        <Filter {...filterActions}>
          {filterForm}
        </Filter>
      )}

      <Actions>
        {extraButtons}
        <SearchField key={searchKey} />
      </Actions>
    </Container>
  )
}

TableActions.propTypes = {
  filterForm: PropTypes.node,
  filterActions: PropTypes.object,
  selectActions: PropTypes.object,
  searchKey: PropTypes.string,
  extraButtons: PropTypes.node
}

TableActions.defaultProps = {
}

export default TableActions
