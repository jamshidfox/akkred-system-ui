
import React from 'react'
import { MediumButton } from '../../../components/UI/Buttons'
import { Modal } from '../../../components/UI'

const ConfirmDialog = ({ onClose, open, onSubmit }) => {
  return (
    <Modal onClose={onClose} open={open} width={'400px'}>
      <div style={{ textAlign: 'right' }}>
        <MediumButton onClick={onSubmit}>Confirm</MediumButton>
      </div>
    </Modal>
  )
}

export default ConfirmDialog
