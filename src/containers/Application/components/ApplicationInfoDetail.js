import React from 'react'
import { prop } from 'ramda'
import { Table, TableRow } from '../../../components/Table'
import { PageRowTitle } from '../../../components/UI'

const ApplicationInfoDetail = props => {
  const { clientInfo } = props
  const legalEntityName = prop('legalEntityName', clientInfo)
  const leaderEntityFullName = prop('leaderEntityFullName', clientInfo)
  const objectFullName = prop('objectFullName', clientInfo)
  const objectLegalAddress = prop('objectLegalAddress', clientInfo)
  const objectFactAddress = prop('objectFactAddress', clientInfo)
  const objectInn = prop('objectInn', clientInfo)
  const objectPhoneNumber = prop('objectPhoneNumber', clientInfo)
  const objectSite = prop('objectSite', clientInfo)
  const objectEmail = prop('objectEmail', clientInfo)
  const legalEntityEmail = prop('legalEntityEmail', clientInfo)
  const legalEntityPhoneNumber = prop('legalEntityPhoneNumber', clientInfo)
  const bankName = prop('bankName', clientInfo)
  const paymentAccount = prop('paymentAccount', clientInfo)
  const oked = prop('oked', clientInfo)
  const bankInn = prop('bankInn', clientInfo)
  const bankMfo = prop('bankMfo', clientInfo)
  const soogu = prop('soogu', clientInfo)

  const tableDoc =
    <Table
    >
      <TableRow>
        <td colSpan={6}>Yuridik shaxsning to‘liq nomi</td>
        <td colSpan={18}>{legalEntityName} </td>
      </TableRow>
      <TableRow>
        <td colSpan={6}>Akkreditatsiya obyektining to‘liq nomi</td>
        <td colSpan={18}>{objectFullName}</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Yuridik manzili</td>
        <td colSpan={18}>{objectLegalAddress}</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Fakt manzili</td>
        <td colSpan={18}>{objectFactAddress}</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Tashkilotning inn</td>
        <td colSpan={18}>{objectInn}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}>Tashkilotning telefon raqami</td>
        <td colSpan={14}>{objectPhoneNumber}</td>

      </TableRow>
      <TableRow>
        <td colSpan={10}>Tashkilotning veb-sayti</td>
        <td colSpan={14}>{objectSite}</td>

      </TableRow>

      <TableRow>
        <td colSpan={10}>Tashkilotning email</td>
        <td colSpan={14}>{objectEmail}</td>
      </TableRow>
      <TableRow>
        <td colSpan={10}>Rahbar yuridik shaxsining F.I.Sh.</td>
        <td colSpan={14}>{leaderEntityFullName}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}>Rahbar yuridik shaxsining email</td>
        <td colSpan={14}>{legalEntityEmail}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}>Rahbar Telefon raqami</td>
        <td colSpan={14}>{legalEntityPhoneNumber}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}>Bank nomi</td>
        <td colSpan={14}>{bankName}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}>L/r</td>
        <td colSpan={14}>{paymentAccount}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}>Inn banki</td>
        <td colSpan={14}>{bankInn}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}>MFO banki</td>
        <td colSpan={14}>{bankMfo}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}> Sogu</td>
        <td colSpan={14}>{soogu}</td>
      </TableRow>

      <TableRow>
        <td colSpan={10}> Oked</td>
        <td colSpan={14}>{oked}</td>
      </TableRow>

    </Table>

  return (
    <>
      <PageRowTitle name="Yuridik shaxs to’g’risida ma’lumot" />
      {tableDoc}

    </>
  )
}

ApplicationInfoDetail.defaultProps = {
}

export default ApplicationInfoDetail
