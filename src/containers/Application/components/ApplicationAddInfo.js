import React from 'react'
import Executors from './ApplicationUsers/Executors'
import ExpertExpertise from './ApplicationUsers/ExpertExpertise'
import ExpertAudit from './ApplicationUsers/ExpertAudit'

const ApplicationAddInfo = props => {
  const { executors, experts, expertsPlace } = props

  return (
    <>
      <Executors executors={executors} />
      <ExpertExpertise experts={experts} />
      <ExpertAudit expertAudit={expertsPlace} />

    </>
  )
}
export default ApplicationAddInfo
