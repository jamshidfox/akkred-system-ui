import React from 'react'
import { equals, includes, prop } from 'ramda'
import { Table, TableRow } from '../../../components/Table'
import { PageRowTitle } from '../../../components/UI'
import { standardList, applicationList, answerList, answerMonthList } from '../../../constants/backend'
import { FieldWrapper } from '../../../components/StyledElems'
import { BranchList } from './Branch'
import { OfficeList } from './Office'
import { StaffList } from './Staff'
import { MobileComplexList } from './MobileComplex'

const getDisplayStyle = condition => ({
  display: condition ? 'block' : 'none'
})
const ApplicationApplicationDetail = props => {
  const { initialValues,
    serviceList,
    officeList,
    staffList,
    additionalActivityList,
    mobileList,
    onDeleteOffice,
    update } = props

  const typeApplication = prop('typeApplication', initialValues)
  const typeStandard = prop('typeStandard', initialValues)
  const managementAnalysis = prop('managementAnalysis', initialValues)
  const managementSystem = prop('managementSystem', initialValues)
  const internalAudit = prop('internalAudit', initialValues)
  const labaratoriya = prop('labaratoriya', initialValues)
  const outsource = prop('outsource', initialValues)
  const isAkkred = prop('isAkkred', initialValues)
  const certificationAccreditation = prop('certificationAccreditation', initialValues)
  const certificationField = prop('certificationField', initialValues)
  const accreditedByAnother = prop('accreditedByAnother', initialValues)

  const typeApplicationText = applicationList.object[typeApplication]
  const typeStandardText = standardList.object[typeStandard]
  const managementAnalysisText = answerList.object[managementAnalysis]
  const managementSystemText = answerMonthList.object[managementSystem]
  const internalAuditText = answerList.object[internalAudit]

  const BranchOfficeDisplayList = ['17020', '17021', '17024', '17025', '17065']
  const showBranchOffice = includes(typeStandard, BranchOfficeDisplayList)

  const MobileComplexDisplayList = ['17020', '17025']
  const showMobileComplex = includes(typeStandard, MobileComplexDisplayList)

  const StaffDisplayList = ['17020', '17024', '17025', '17065']
  const showStaff = includes(typeStandard, StaffDisplayList)

  const ActivityCertificationDisplayList = ['17021', '17024', '17065']
  const showActivityCertification = includes(typeStandard, ActivityCertificationDisplayList)
  const show17065Fields = equals(typeStandard, '17065')

  const tableApplication =
    <Table
    >
      <TableRow>
        <td colSpan={6}>Ariza turi</td>
        <td colSpan={18}>{typeApplicationText} </td>
      </TableRow>
      <TableRow>
        <td colSpan={6}>Muvofiqlikni baholash organi turi</td>
        <td colSpan={18}>{typeStandardText}</td>

      </TableRow>
      <TableRow>
        <td colSpan={6}>Rahbariyat tomonidan tahlil qilinganmi?</td>
        <td colSpan={18}>{managementAnalysisText}</td>

      </TableRow>

      <TableRow>
        <td colSpan={6}>Menejment tizimi qancha muddat ilgari joriy etilgan?</td>
        <td colSpan={18}>{managementSystemText}</td>

      </TableRow>

      <TableRow>
        <td colSpan={6}>Ichki audit oʻtkazilganmi?</td>
        <td colSpan={18}>{internalAuditText}</td>

      </TableRow>

      <TableRow style={getDisplayStyle(show17065Fields)}>
        <td colSpan={6}>Sertifikatlashtirish organi xususiy laboratoriyaga egami?</td>
        <td colSpan={18}>{labaratoriya}</td>

      </TableRow>
      <TableRow style={getDisplayStyle(show17065Fields)}>
        <td colSpan={6}>Sertifikatlashtirish organi jalb etilgan xodimlarga egami?</td>
        <td colSpan={18}>{outsource}</td>

      </TableRow>

      <TableRow style={getDisplayStyle(show17065Fields)}>
        <td colSpan={6}>Laboratoriya akkreditatsiyadan oʻtganmi? Agarda ha boʻlsa, akkreditatsiya toʻgʻrisidagi guvohnoma raqamini korsating</td>
        <td colSpan={18}>{isAkkred}</td>

      </TableRow>


      <TableRow style={getDisplayStyle(showActivityCertification)}>
        <td colSpan={12}>Sertifikatlashtirish organi boshqa akkreditatsiya organi,
          shu jumladan chet el akkreditatsiyadan oʻtkazish organlari tomonidan akkreditatsiyadan oʻtkazilganmi?
          Agarda ha boʻlsa, organ nomini koʻrsating</td>
        <td colSpan={12}>{certificationAccreditation}</td>

      </TableRow>


      <TableRow style={getDisplayStyle(showActivityCertification)}>
        <td colSpan={12}>Ariza berilgan soha boʻyicha sertifikatlashtirish ishlari olib borilganmi?
          Agarda ha boʻlsa, taqdim etilgan sertifikatlar miqdori (har bir ariza berilgan soha uchun):</td>
        <td colSpan={12}>{certificationField}</td>

      </TableRow>

      <TableRow style={getDisplayStyle(showActivityCertification)}>
        <td colSpan={12}>Ariza berilgan sohalarning qaysi biri boshqa
          (chet el) akkreditatsiyadan oʻtkazish organlari tomonidan akkreditatsiyadan oʻtkazilganmi?
          Agarda ha boʻlsa, taqdim etilgan sertifikatlar miqdori (har bir ariza berilgan soha uchun):
        </td>
        <td colSpan={12}>{accreditedByAnother}</td>

      </TableRow>

    </Table>

  return (
    <>
      <PageRowTitle name="Ariza" />
      {tableApplication}

      <FieldWrapper style={getDisplayStyle(showBranchOffice)}>
        {serviceList.length > 0 && (

          <div>
            <PageRowTitle name="Filiallar" />
            <BranchList branches={serviceList} />
          </div>

        )}

        {officeList.length > 0 && (

          <div>
            <PageRowTitle name="Ofis/vakolatxonalar" />
            <OfficeList branches={officeList} onDeleteOffice={onDeleteOffice} />
          </div>

        )}

        {/*{additionalActivityList.length > 0 && (*/}
        {/*  <div>*/}
        {/*    <PageRowTitle name="Boshqa faoliyat turi" />*/}
        {/*    <AddActivityList branches={additionalActivityList} />*/}
        {/*  </div>*/}

        {/*)}*/}

      </FieldWrapper>

      <FieldWrapper style={getDisplayStyle(showStaff)}>
        {staffList.length > 0 && (

          <div>
            <PageRowTitle name="Xodimlar" />
            <StaffList branches={staffList} />
          </div>

        )}

      </FieldWrapper>

      <FieldWrapper style={getDisplayStyle(showMobileComplex)}>

        {mobileList.length > 0 && (

          <div>
            <PageRowTitle name="Mobil majmua" />
            <MobileComplexList branches={mobileList} />
          </div>

        )}

      </FieldWrapper>

    </>
  )
}

ApplicationApplicationDetail.defaultProps = {
}

export default ApplicationApplicationDetail
