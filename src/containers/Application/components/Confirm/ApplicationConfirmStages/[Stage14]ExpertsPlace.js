import React, { useState } from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MediumButton, PageRowTitle } from '../../../../../components/UI'
import {
  DateField,
  Field,
  Form,
  UniversalSearchField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import * as API from '../../../../../constants/api'
import { Box } from '../../../../../components/StyledElems'
import { ExpertsCreateModal, ExpertsList } from '../ExpertsPlace'
import { ExpertsListConfirm } from '../Experts'
import ExpertsArchiveList from '../Experts/ExpertsArchiveList'

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

const DivButton = styled('div')`
  margin-top: 10px;
  text-align: right;
`
const ConfirmStageChoiceExpertsPlace = ({ onSubmit, serviceList, serviceModal, onDeletePlace, onUpdatePlace, initialValues }) => {
  const [serviceModalItem, setServiceModalItem] = useState(false)
  const experts = prop('experts', initialValues)
  const archiveExpertsAudit = prop('archiveExpertsAudit', initialValues)
  const editModalOpen = (data) => {
    setServiceModalItem(data)
    serviceModal.onOpen()
  }
  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>

              {archiveExpertsAudit.length > 0 && (
                <div>
                  <PageRowTitle name="Rozi bolmagan Ijrochilar" />
                  <ExpertsArchiveList list={archiveExpertsAudit} />

                </div>

              )}

              <Label>Joyiga chiqib o’rganish muddati</Label>

              <Row gutter={24}>

                <Col span={12}>
                  <Field
                    name="from_date"
                    label="dan"
                    component={DateField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="to_date"
                    label="gacha"
                    component={DateField}
                  />
                </Col>
              </Row>
              <ExpertsList branches={serviceList} editModalOpen={editModalOpen} serviceModal={serviceModal} {...serviceModal} onDeletePlace={onDeletePlace} />
              <ExpertsCreateModal {...serviceModal} onUpdatePlace={onUpdatePlace} initialValues={serviceModalItem} />

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

export default ConfirmStageChoiceExpertsPlace
