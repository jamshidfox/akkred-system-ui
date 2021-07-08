import React from 'react'
import styled from 'styled-components'
import { path, prop } from 'ramda'
import { MediumButton, PageRowTitle } from '../../../../../components/UI'
import {
  Field,
  Form,
  InputField,
  UniversalStaticSelectField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import { Box } from '../../../../../components/StyledElems'
import FileUploadField from '../../../../../components/FormField/File/FileUploadField'
import { paymentTypes, rateTypes, typeContract } from '../../../../../constants/backend'
import TravelDataList from '../TravelData/TravelDataList'
import TravelDataCreateModal from '../TravelData/TravelDataCreateModal'
import ExpertiseResults from '../../ApplicationGenerateDocs/ExpertiseResults'

const BoxUI = styled(Box)`
  padding: 25px;
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`

const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
`
const ConfirmStageContractPlace = ({
  onSubmit,
  travelDataModal,
  onDeleteTravelData,
  travelDataList, initialValues }) => {
  const experts = prop('experts', initialValues)
  return (

    <BoxUI>
      <ExpertiseResults results={experts} />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          const values = prop('values', formikProps)
          const isTypeContract = path(['typeContract', 'id'], values)
          return (
            <form onSubmit={handleSubmit}>
              <PageRowTitle name="Umumlashtirish" />

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="file"
                    label="Umumlashtirish"
                    component={FileUploadField}
                  />
                </Col>
              </Row>

              <PageRowTitle name="Shartnoma" />

              <Row gutter={24}>

                <Col span={24}>
                  <Field
                    name="name"
                    label="Tovar (ish, xizmat)lar nomi"
                    component={InputField}

                  />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={6}>
                  <Field
                    name="paymentType"
                    label="To’lov turi"
                    component={UniversalStaticSelectField}
                    list={paymentTypes}

                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="count"
                    label="Miqdori"
                    component={InputField}
                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="rate"
                    label="Stafkasi"
                    component={UniversalStaticSelectField}
                    list={rateTypes}

                  />
                </Col>

                <Col span={6}>
                  <Field
                    name="typeContract"
                    label="Shartnoma turi"
                    component={UniversalStaticSelectField}
                    list={typeContract}

                  />
                </Col>

              </Row>

              {isTypeContract === 'travel' && (
                <div>
                  <TravelDataList document={travelDataList} serviceModal={travelDataModal} onDeleteDocument={onDeleteTravelData} />
                  <TravelDataCreateModal {...travelDataModal} />
                </div>

              )}

              <DivButton>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </DivButton>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageContractPlace
