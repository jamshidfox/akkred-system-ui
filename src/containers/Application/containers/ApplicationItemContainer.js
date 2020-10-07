import { compose } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import ApplicationItem from '../components/Detail'
import { clientFetchItem } from '../actions'
import * as STATE from '../../../constants/stateNames'
import { useFetchItem } from '../../../hooks'

// Enhance
const enhance = compose(connect())

// Component
const ApplicationItemContainer = props => {
  // Fetch
  const applicationItem = useFetchItem({
    action: clientFetchItem,
    stateName: STATE.APPLICATION_ITEM
  })

  // Render
  return (
    <ApplicationItem
      applicationItem={applicationItem}
      {...props}
    />
  )
}

export default enhance(ApplicationItemContainer)
