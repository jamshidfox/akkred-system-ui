import React from 'react'
import ContractExpertise from './ApplicationGenerateDocs/ContractExpertise'
import ContractAudit from './ApplicationGenerateDocs/ContractAudit'

const ApplicationContractInvoiceInfo = props => {
  const { contracts, application, contractPlace } = props

  return (
    <>
      <ContractExpertise contracts={contracts} idAp={application} />
      <ContractAudit contracts={contractPlace} idAp={application} />

    </>
  )
}
ApplicationContractInvoiceInfo.defaultProps = {
  contracts: [],
  contractPlace: [],
}

export default ApplicationContractInvoiceInfo
