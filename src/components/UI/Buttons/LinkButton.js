import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { MediumButton } from './Button'

const LinkButton = props => {
  const { history, to, ...rest } = props

  const onClick = event => {
    event.preventDefault()

    if (to) {
      return history.push(to)
    }

    return rest.onClick()
  }

  return (
    <MediumButton {...rest} onClick={onClick} />
  )
}

LinkButton.propTypes = {
  history: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
}

export default withRouter(LinkButton)
