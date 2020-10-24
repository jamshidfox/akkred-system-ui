
import React from 'react'
import { MediumButton, Modal } from '../../../../../components/UI'

const ConfirmStage = ({ onClose, onSubmit, open }) => {
  return (

    <Modal onClose={onClose} open={open} width={'400px'}>
      <div style={{ textAlign: 'right' }}>
        <MediumButton onClick={onSubmit}>Подтвердить</MediumButton>
      </div>
    </Modal>

  )
}

export default ConfirmStage
