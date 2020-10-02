import React from 'react'
import { prop } from 'ramda'

const ApplicationUserInfo = props => {
  const { clientInfo } = props
  const address = prop('address', clientInfo)
  const documentDate = prop('documentDate', clientInfo)
  const email = prop('email', clientInfo)
  const fax = prop('fax', clientInfo)
  const fullName = prop('fullName', clientInfo)
  const fullNameOrgan = prop('fullNameOrgan', clientInfo)
  const inn = prop('inn', clientInfo)
  const legalName = prop('legalName', clientInfo)
  const mfo = prop('mfo', clientInfo)
  const ndsRegId = prop('ndsRegId', clientInfo)
  const oked = prop('oked', clientInfo)
  const paymentAccount = prop('paymentAccount', clientInfo)
  const phoneNumber = prop('phoneNumber', clientInfo)
  const site = prop('site', clientInfo)
  const swift = prop('swift', clientInfo)
  const title = prop('title', clientInfo)
  const titleObject = prop('titleObject', clientInfo)
  return (
    <div>
      <div><strong>address</strong>{address}</div>
      <div><strong>documentDate</strong>{documentDate}</div>
      <div><strong>email</strong>{email}</div>
      <div><strong>fax</strong>{fax}</div>
      <div><strong>fullName</strong>{fullName}</div>
      <div><strong>fullNameOrgan</strong>{fullNameOrgan}</div>
      <div><strong>inn</strong>{inn}</div>
      <div><strong>legalName</strong>{legalName}</div>
      <div><strong>mfo</strong>{mfo}</div>
      <div><strong>ndsRegId</strong>{ndsRegId}</div>
      <div><strong>oked</strong>{oked}</div>
      <div><strong>paymentAccount</strong>{paymentAccount}</div>
      <div><strong>phoneNumber</strong>{phoneNumber}</div>
      <div><strong>site</strong>{site}</div>
      <div><strong>swift</strong>{swift}</div>
      <div><strong>title</strong>{title}</div>
      <div><strong>titleObject</strong>{titleObject}</div>
    </div>

  )
}

export default ApplicationUserInfo
