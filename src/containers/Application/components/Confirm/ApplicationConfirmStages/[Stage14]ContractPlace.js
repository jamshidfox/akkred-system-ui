import React from 'react'
import styled from 'styled-components'
import { path, prop } from 'ramda'
import { MediumButton } from '../../../../../components/UI'
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

const listDocument = [

  {
    id:'one',
    name:'100',
  },
  {
    id:'two',
    name:'15/85',
  }

]
const ConfirmStageContractPlace = ({
  onSubmit,
  travelDataModal,
  onDeleteTravelData,
  travelDataList, }) => {
  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, ...formikProps }) => {
          const values = prop('values', formikProps)
          const isTypeContract = path(['typeContract', 'id'], values)
          return (
            <form onSubmit={handleSubmit}>
              <Label>Umumlashtirish</Label>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="file"
                    label="Umumlashtirish"
                    component={FileUploadField}
                  />
                </Col>
              </Row>

              <Label>Shartnoma</Label>

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

              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Tasdiqlash</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </BoxUI>

  )
}

export default ConfirmStageContractPlace
