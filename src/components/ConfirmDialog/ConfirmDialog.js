import React from 'react'
import { path } from 'ramda'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Modal } from '../UI'
import { MediumButton as Button, SecondaryMediumButton as SecondaryButton } from '../UI/Buttons'

import { DisplayFlex } from '../StyledElems'
import { closeConfirmDialogAction } from './actions'

const getStateData = state => ({
  open: path(['confirmDialog', 'open'], state),
  title: path(['confirmDialog', 'title'], state),
  message: path(['confirmDialog', 'message'], state),
  onConfirm: path(['confirmDialog', 'onConfirm'], state),
  loading: path(['confirmDialog', 'loading'], state),
})

const ConfirmDialog = () => {
  const dispatch = useDispatch()
  const onClose = () => dispatch(closeConfirmDialogAction())
  const { title, message, open, onConfirm, loading } = useSelector(getStateData, shallowEqual)
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
      showCloseIcon={false}
      maskClosable={false}
    >
      <div style={{ marginBottom: '20px' }}>{message}</div>
      <DisplayFlex>
        <SecondaryButton data-cy="confirmDialogCancel" onClick={onClose} disabled={loading}>Отмена</SecondaryButton>
        <Button data-cy="confirmDialogOk" onClick={onConfirm} loading={loading}>Подтвердить</Button>
      </DisplayFlex>
    </Modal>
  )
}

export default ConfirmDialog
