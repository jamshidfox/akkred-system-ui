import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Filter from '../Filter'
import { MediumButton } from '../UI/Buttons'
import SearchField from './SearchField'
import Button from '../Button/Button'
import Plus from '../../icons/Plus'

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

const style = {
  color: '#ffffff',
  textDecoration: 'none',
  cursor: 'pointer',
  marginRight: '20px'
}

const TableActions = props => {
  const {
    filterForm,
    filterActions,
    extraButtons,
    searchKey,
    linkAction
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
        <Link style={style} to={`${linkAction}`}>
          <Button
            text={'Добавить'}
            prefix={<Plus />}
          />
        </Link>
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
  linkAction: PropTypes.string,
  extraButtons: PropTypes.node
}

TableActions.defaultProps = {
}

export default TableActions
