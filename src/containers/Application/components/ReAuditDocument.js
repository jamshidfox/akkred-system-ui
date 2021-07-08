import React from 'react'
import { prop, } from 'ramda'

import ReAuditClientSendDocument from './ApplicationGenerateDocs/ReAuditClientSendDocument'
import ReAuditOrder from './ApplicationGenerateDocs/ReAuditOrder'

const ReAuditDocument = props => {
  const { initialValues } = props
  const planWorks = prop('planWorks', initialValues)

  const results = prop('planProofWorks', initialValues)
  const reAuditOrders = prop('reAuditOrders', initialValues)
  const idAp = prop('id', initialValues)

  return (
    <>
      <ReAuditClientSendDocument planWorks={planWorks} results={results} />
      <ReAuditOrder reAuditOrders={reAuditOrders} idAp={idAp} />
    </>

  )
}
export default ReAuditDocument
