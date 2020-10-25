import React from 'react'
import styled from 'styled-components'
import { MediumButton, Modal } from '../../../../../components/UI'
import {
  Field,
  Form,
  InputField,
  DateField,
  UniversalSearchField,
  UniversalStaticSelectField,
  ImageUploadField
} from '../../../../../components/FormField'
import { FieldWrapper } from '../../../../../components/StyledElems'
import { RESULT_LIST } from '../../../../../constants/backend'
import * as API from '../../../../../constants/api'
import { Col, Row as RowUI } from '../../../../../components/Grid'

const Row = styled(RowUI)`
  margin-bottom: 40px;
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
const ConfirmStageThree = ({ onClose, onSubmit, open }) => {
  return (

    <Modal onClose={onClose} open={open} width={'1000px'}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Label>Основная информация</Label>
              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    name="исполнитель"
                    label="Ijrochi 1"
                    component={UniversalSearchField}
                    api={API.CLIENT_LIST}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="исполнитель"
                    label="Ijrochi 1"
                    component={UniversalSearchField}
                    api={API.CLIENT_LIST}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    name="исполнитель"
                    label="Ijrochi 1"
                    component={UniversalSearchField}
                    api={API.CLIENT_LIST}
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={24}>
                  <Field
                    name="proficiencyTestingProvider"
                    label="Izoh"
                    component={InputField}
                  />
                </Col>

              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Field
                    name="birthDate"
                    label="Ro’yhatga olingan kun"
                    component={DateField}
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="managementAnalysis"
                    label="Rahbar rezolyutsiyasi "
                    component={UniversalStaticSelectField}
                    list={RESULT_LIST}
                  />
                </Col>

              </Row>

              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    label="Photo (3 высота :1 ширина)"
                    name="photo"
                    component={ImageUploadField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    label="Photo (3 высота :1 ширина)"
                    name="photo"
                    component={ImageUploadField}
                  />
                </Col>
                <Col span={8}>
                  <Field
                    label="Photo (3 высота :1 ширина)"
                    name="photo"
                    component={ImageUploadField}
                  />
                </Col>
              </Row>
              <div style={{ textAlign: 'right' }}>
                <MediumButton type="submit">Сохранить</MediumButton>
              </div>
            </form>
          )
        }}
      />
    </Modal>

  )
}

export default ConfirmStageThree
