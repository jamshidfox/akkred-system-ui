import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  Field,
  InputField,
  UniversalSearchField,
  UniversalStaticSelectField,
  DateTimeField
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '~/components/Grid'
import { MediumButton, SecondaryMediumButton } from '~/components/UI/Buttons'
import { Box, FieldWrapper } from '~/components/StyledElems'
import * as API from '~/constants/api'
import * as CONST from '~/constants/backend'

const Label = styled.div`
  margin-bottom: 16px;
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

const Container = styled('div')`
  
`

const Mask = styled('div')`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #101426;
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  ${props => props.open && css`
    opacity: 0.54;
    visibility: visible;
  `}
`

const SideWrapper = styled(Box)`
  border-radius: unset;
  width: 500px;
  position:fixed;
  right: -500px;
  top: 0;
  background: #fff;
  bottom: 0;
  padding: 0;
  transition: right 200ms;
  z-index: 20;
  ${props => props.open && css`
    right: 0;
  `}
`

const Background = styled.div`
  background: #fff;
  position:relative;
  z-index: 2;
  padding: 25px;
  height: 100%;
`

const BookingCreateDialog = props => {
  const { onClose, open } = props

  return (
    <Container>
      <Mask open={open} onClick={onClose} />
      <SideWrapper open={open}>
        <Background>
          <Label>Основная информация</Label>
          <FieldWrapper>
            <Field
              name="enterDatetime"
              label="заезд"
              component={DateTimeField}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="leaveDatetime"
              label="выезд"
              component={DateTimeField}
            />
          </FieldWrapper>
          <Row >
            <Col span={24}>
              <Field
                name="room"
                label="Номер"
                api={API.ROOM_LIST}
                component={UniversalSearchField}
                itemText={['id']}
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Field
                name="client.surname"
                label="surname"
                component={InputField}
              />
            </Col>
            <Col span={8}>
              <Field
                name="client.name"
                label="имя"
                component={InputField}
              />
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Field
                name="client.fatherName"
                label="отчество"
                component={InputField}
              />
            </Col>
            <Col span={12}>
              <Field
                name="citizenship"
                label="гражданство"
                api={API.COUNTRY_LIST}
                component={UniversalSearchField}
              />
            </Col>
          </Row>
          <Row gutter={24}>

            <Col span={24}>
              <Field
                name="client.phoneNumber"
                label="Phone"
                component={InputField}
              />
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Field
                name="paymentType"
                label="paymentType"
                list={CONST.PAYMENT_TYPES}
                component={UniversalStaticSelectField}
              />
            </Col>
            <Col span={12}>
              <Field
                name="bookingType"
                label="bookingType"
                list={CONST.BOOKING_TYPES}
                component={UniversalStaticSelectField}
              />
            </Col>
          </Row>
          <div style={{ textAlign: 'right' }}>
            <SecondaryMediumButton onClick={onClose}>Close</SecondaryMediumButton>
            <MediumButton type="submit">Сохранить</MediumButton>
          </div>
        </Background>
      </SideWrapper>
    </Container>
  )
}

BookingCreateDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
}

export default BookingCreateDialog
