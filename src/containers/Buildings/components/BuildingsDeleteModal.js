import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Modal, MediumButton, SecondaryMediumButton } from '../../../components/UI'

const FooterModal = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`

const BuildingsDeleteModal = props => {
  const { open, onClose, deleteItem, onSubmit } = props

  return (
    <Modal
      width="644px"
      title="Подтверждение"
      open={open}
      onClose={onClose}>
      Вы уверены что хотите удалить <b>{deleteItem.name}</b>
      <FooterModal>
        <SecondaryMediumButton onClick={() => onSubmit(deleteItem.id)}>
          Удалить
        </SecondaryMediumButton>
        <MediumButton onClick={onClose}>
          Назад
        </MediumButton>
      </FooterModal>
    </Modal>
  )
}

BuildingsDeleteModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  deleteItem: PropTypes.object,
  deleteBuilding: PropTypes.func
}

export default BuildingsDeleteModal
