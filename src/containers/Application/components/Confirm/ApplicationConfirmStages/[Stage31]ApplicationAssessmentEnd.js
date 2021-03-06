import React from 'react'
import styled from 'styled-components'
import { prop, path, map } from 'ramda'

import arrayMutators from 'final-form-arrays'
import { Box } from '../../../../../components/StyledElems'
import {
  Field, Form,
  InputField,
  DateField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'
import { MediumButton } from '../../../../../components/UI/Buttons'
import { DocumentCreateModal, DocumentList } from '../Document'
import AuditResults from '../../ApplicationGenerateDocs/AuditResults'

const BoxUI = styled(Box)`
  padding: 25px;
`
const Label = styled.div`
  margin-bottom: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: ${props => props.theme.color.basic.default};
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const ApplicationAssessmentEnd = props => {
  const { onSubmit, text, documentList, documentModal, onDeleteDocument, initialValues } = props
  const expertsPlace = prop('expertsPlace', initialValues)
  return (
    <BoxUI>
      <AuditResults results={expertsPlace} />
      <Form
        keepDirtyOnReinitialize={true}
        mutators={arrayMutators}
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="assessmentEndDate"
                    label="Baholash tugallangan kun"
                    component={DateField}
                  />
                </Col>
              </Row>
              <Label>Baholashga tegishli hujjatlarni yuklash</Label>
              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="privacy"
                    label="Guvohlik baholash so‘rovi"
                    component={FileUploadField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="listAttendees"
                    label="Ishtirok etuvchilar varog‘i"
                    component={FileUploadField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="observationMap"
                    label="Kuzatishlar kartasi"
                    component={FileUploadField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="nonConformities"
                    label="Nomuvofiqliklar to‘g‘risida hisobot"
                    component={FileUploadField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="groupReport"
                    label="Baholash guruhining hisoboti"
                    component={FileUploadField}
                  />
                </Col>
              </Row>

              <Label>Murojaatchiga tegishli hujjatlar</Label>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="documentOne"
                    label="Akkreditatsiya sohasi"
                    component={FileUploadField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="nameOne"
                    label="Hujjat nomi"
                    component={InputField}
                  />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="documentTwo"
                    label="MBO obyekti to’grisida ma’lumotlar (pasport)"
                    component={FileUploadField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="nameTwo"
                    label="Hujjat nomi"
                    component={InputField}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="documentThree"
                    label="SMK hujjatlari"
                    component={FileUploadField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="nameThree"
                    label="Hujjat nomi"
                    component={InputField}
                  />
                </Col>
              </Row>

              <Label>Qo'shimcha hujjatlar</Label>
              <DocumentList document={documentList} serviceModal={documentModal} onDeleteDocument={onDeleteDocument} />
              <DocumentCreateModal {...documentModal} />

              <div style={{ textAlign: 'right' }}>
                <MediumButton type={'submit'}>Tasdiqlash</MediumButton>
              </div>

            </form>
          )
        }}
      />
    </BoxUI>
  )
}

export default ApplicationAssessmentEnd
