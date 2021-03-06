import React from 'react'
import { equals, includes, prop } from 'ramda'
import { Table, TableRow } from '../../../components/Table'
import { PageRowTitle } from '../../../components/UI'
import { standardList, applicationList, answerList, answerMonthList, answerYearList } from '../../../constants/backend'
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
  const certificationAccreditation = prop('certificationAccreditation', initialValues) || 'Yo`q'
  const certificationField = prop('certificationField', initialValues) || 'Yo`q'
  const accreditedByAnother = prop('accreditedByAnother', initialValues) || 'Yo`q'
  const assessmentAgency = prop('assessmentAgency', initialValues)
  const certificateAgency = prop('certificateAgency', initialValues)
  const educationalInstitution = prop('educationalInstitution', initialValues)
  const inManufacture = prop('inManufacture', initialValues)
  const anotherPlace = prop('anotherPlace', initialValues)
  const howOftenExam = prop('howOftenExam', initialValues)

  const typeApplicationText = applicationList.object[typeApplication]
  const typeStandardText = standardList.object[typeStandard]
  const managementAnalysisText = answerList.object[managementAnalysis]
  const managementSystemText = answerMonthList.object[managementSystem]
  const internalAuditText = answerList.object[internalAudit]

  const certificateAgencyText = answerList.object[certificateAgency]
  const educationalInstitutionText = answerList.object[educationalInstitution]
  const inManufactureText = answerList.object[inManufacture]
  const anotherPlaceText = answerList.object[anotherPlace]
  const labaratoriyaText = answerList.object[labaratoriya]
  const outsourceText = answerList.object[outsource]
  const howOftenExamText = answerYearList.object[howOftenExam]

  const BranchOfficeDisplayList = ['17020', '17021', '17024', '17025', '17065']
  const showBranchOffice = includes(typeStandard, BranchOfficeDisplayList)

  const MobileComplexDisplayList = ['17020', '17025']
  const showMobileComplex = includes(typeStandard, MobileComplexDisplayList)

  const StaffDisplayList = ['17020', '17024', '17025', '17065']
  const showStaff = includes(typeStandard, StaffDisplayList)

  const ActivityCertificationDisplayList = ['17021', '17024', '17065']
  const showActivityCertification = includes(typeStandard, ActivityCertificationDisplayList)
  const show17065Fields = equals(typeStandard, '17065')
  const show17024Fields = equals(typeStandard, '17024')

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
        <td colSpan={6}>Ichki audit o??tkazilganmi?</td>
        <td colSpan={18}>{internalAuditText}</td>

      </TableRow>

      {show17065Fields && (
        <TableRow >
          <td colSpan={6}>Sertifikatlashtirish organi xususiy laboratoriyaga egami?</td>
          <td colSpan={18}>{labaratoriyaText}</td>
        </TableRow>

      )}

      {show17065Fields && (
        <TableRow >
          <td colSpan={6}>Sertifikatlashtirish organi jalb etilgan xodimlarga egami?</td>
          <td colSpan={18}>{outsourceText}</td>
        </TableRow>

      )}

      {show17065Fields && (
        <TableRow >
          <td colSpan={6}>Laboratoriya akkreditatsiyadan o??tganmi? Agarda ha bo??lsa, akkreditatsiya to??g??risidagi guvohnoma raqamini korsating</td>
          <td colSpan={18}>{isAkkred}</td>
        </TableRow>

      )}

      {show17024Fields && (
        <TableRow >
          <td colSpan={6}>Sizning baholashingiz qayerda o??tkaziladi?</td>
          <td colSpan={18}>{assessmentAgency}</td>
        </TableRow>

      )}

      {show17024Fields && (
        <TableRow >
          <td colSpan={6}>Sertifikatlashtirish organidami?</td>
          <td colSpan={18}>{certificateAgencyText}</td>
        </TableRow>

      )}

      {show17024Fields && (
        <TableRow >
          <td colSpan={6}>Ta???lim muassasasidami?</td>
          <td colSpan={18}>{educationalInstitutionText}</td>
        </TableRow>

      )}

      {show17024Fields && (
        <TableRow >
          <td colSpan={6}>Ishlab chiqarishdami?</td>
          <td colSpan={18}>{inManufactureText}</td>
        </TableRow>

      )}

      {show17024Fields && (
        <TableRow >
          <td colSpan={6}>Boshqa joylardami?</td>
          <td colSpan={18}>{anotherPlaceText}</td>
        </TableRow>

      )}

      {show17024Fields && (
        <TableRow >
          <td colSpan={6}>Imtixonlar qanday oraliqda o??tkaziladi?</td>
          <td colSpan={18}>{howOftenExamText}</td>
        </TableRow>

      )}

      {showActivityCertification && (

        <TableRow >
          <td colSpan={12}>Sertifikatlashtirish organi boshqa akkreditatsiya organi,
            shu jumladan chet el akkreditatsiyadan o??tkazish organlari tomonidan akkreditatsiyadan o??tkazilganmi?
            Agarda ha bo??lsa, organ nomini ko??rsating</td>
          <td colSpan={12}>{certificationAccreditation}</td>

        </TableRow>

      )}

      {showActivityCertification && (

        <TableRow >
          <td colSpan={12}>Ariza berilgan soha bo??yicha sertifikatlashtirish ishlari olib borilganmi?
            Agarda ha bo??lsa, taqdim etilgan sertifikatlar miqdori (har bir ariza berilgan soha uchun):</td>
          <td colSpan={12}>{certificationField}</td>

        </TableRow>

      )}

      {showActivityCertification && (

        <TableRow >
          <td colSpan={12}>Ariza berilgan sohalarning qaysi biri boshqa
            (chet el) akkreditatsiyadan o??tkazish organlari tomonidan akkreditatsiyadan o??tkazilganmi?
            Agarda ha bo??lsa, taqdim etilgan sertifikatlar miqdori (har bir ariza berilgan soha uchun):
          </td>
          <td colSpan={12}>{accreditedByAnother}</td>
        </TableRow>

      )}

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

        {/* {additionalActivityList.length > 0 && ( */}
        {/*  <div> */}
        {/*    <PageRowTitle name="Boshqa faoliyat turi" /> */}
        {/*    <AddActivityList branches={additionalActivityList} /> */}
        {/*  </div> */}

        {/* )} */}

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
