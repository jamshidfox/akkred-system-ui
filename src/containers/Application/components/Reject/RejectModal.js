import React from 'react'
import { MediumButton, Modal } from '../../../../components/UI'

const RejectDialog = ({ onClose, open, onSubmit }) => {
  return (

    <Modal onClose={onClose} open={open} width={'400px'}>
      <div style={{ textAlign: 'right' }}>
        <MediumButton onClick={onSubmit}>Bugalterga junatish</MediumButton>
      </div>
    </Modal>
  )
}

export default RejectDialog
