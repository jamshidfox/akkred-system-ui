import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Filter from '../Filter'
import Button from '../Button/Button'
import Plus from '../../icons/Plus'
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
    linkAction,
    createModal,
    notCreate
  } = props

  const addButton = createModal
    ? (
      <div style={style}

      >
        <Button
          onClick={createModal.onOpen}
          text={'Qo\'shish'}
          prefix={<Plus />}
        />
      </div>
    )
    : (
      <Link
        to={`${linkAction}`}
        style={style}
      >
        <Button
          text={'Qo\'shish'}
          prefix={<Plus />}
        />
      </Link>
    )
  return (
    <Container>
      {filterActions && (
        <Filter {...filterActions}>
          {filterForm}
        </Filter>
      )}

      <Actions>
        {extraButtons}
        {!notCreate && addButton}
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
  type: PropTypes.string,
  extraButtons: PropTypes.node,
  createModal: PropTypes.func
}

TableActions.defaultProps = {
  createModal: NaN
}

export default TableActions
