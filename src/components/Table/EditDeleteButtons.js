import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from '~/icons/pack/Edit'
import Trash from '~/icons/pack/Trash'

const Content = styled('div')`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const IconWrap = styled('div')`
  cursor: pointer;
  & > svg {
    display:block;
  }
  &:not(:last-child) {
    margin-right: 24px;
  }
`

const EditDeleteButtons = props => {
  const { onEdit, onDelete } = props

  return (
    <Content>
      <IconWrap onClick={onEdit}>
        <Edit color={'#8F9BB3'} />
      </IconWrap>
      <IconWrap onClick={onDelete}>
        <Trash color={'#FF3D71'} />
      </IconWrap>
    </Content>
  )
}

EditDeleteButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default EditDeleteButtons
