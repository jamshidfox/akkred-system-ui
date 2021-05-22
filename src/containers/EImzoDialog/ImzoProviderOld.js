import React, { useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import EImzoForm from './EImzoForm'
import Context from './imzoContext'

import { useTranslate } from 'utils/translate'
import { dialogReducer } from 'reducers'
import Modal from 'components/Modal'

const initialState = {
  isOpen: false,
  text: '',
  onSuccess: null
}

export const useImzoDialog = () => {
  const { onOpen } = useContext(Context)
  return onOpen
}

const EImzoDialog = ({ children }) => {
  const { t } = useTranslate()
  const [state, dispatch] = useReducer(dialogReducer, initialState)

  const onOpen = payload => {
    dispatch({
      type: 'open',
      payload
    })
  }

  const onClose = () => {
    dispatch({ type: 'close' })
  }

  const onSuccess = (...data) => {
    onClose()
    if (typeof state.onSuccess === 'function') {
      state.onSuccess(...data)
    }
  }

  return (
    <Context.Provider value={{ onOpen, onClose }}>
      {children}

      <Modal
        title={t('eimzo_dialog_title')}
        isOpen={state.isOpen}
        onClose={onClose}>
        {state.isOpen && (
          <EImzoForm text={state.text} onSubmit={onSuccess} />
        )}
      </Modal>
    </Context.Provider>
  )
}

EImzoDialog.propTypes = {
  children: PropTypes.node.isRequired
}

export default EImzoDialog
