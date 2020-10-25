
import React from 'react'
import { MediumButton, Modal } from '../../../../../components/UI'

const ConfirmStageOne = ({ onClose, onSubmit, open }) => {
  return (

    <Modal onClose={onClose} open={open} width={'400px'}>
      <div style={{ textAlign: 'right' }}>
        <MediumButton onClick={onSubmit}>Confirm stage_1</MediumButton>
      </div>
    </Modal>

  )
}

export default ConfirmStageOne
