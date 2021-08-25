import React from 'react'
import styled from 'styled-components'
import { MediumButton } from '../../../../../components/UI'
import {
  Field,
  Form,
  InputField,
  UniversalStaticSelectField,
} from '../../../../../components/FormField'
import { Col, Row as RowUI } from '../../../../../components/Grid'
import { Box } from '../../../../../components/StyledElems'
import { paymentTypes, rateTypes } from '../../../../../constants/backend'

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

const listNameContract = [

  {
    id:'menejment tizimlarini sertifikatlashtirish organi hujjatlarini ekspertiza qilish',
    name:'menejment tizimlarini sertifikatlashtirish organi hujjatlarini ekspertiza qilish',
  },
  {
    id:'Yukni ortishdan oldin va tushirish vaqtidagi inspeksiyani o‘tkazuvchi inspeksiya organi hujjatlarini ekspertiza qilish',
    name:'Yukni ortishdan oldin va tushirish vaqtidagi inspeksiyani o‘tkazuvchi inspeksiya organi hujjatlarini ekspertiza qilish',
  },
  {
    id:'qiyoslash laboratoriyasi hujjatlarni ekspertiza qilish',
    name:'qiyoslash laboratoriyasi hujjatlarni ekspertiza qilish'
  },
  {
    id:'sinov laboratoriyasi hujjatlarini ekspertiza qilish',
    name:'sinov laboratoriyasi hujjatlarini ekspertiza qilish'
  },
  {
    id:'putur yetkazmasdan tekshirish laboratoriyasi hujjatlarini ekspertiza qilish',
    name:'putur yetkazmasdan tekshirish laboratoriyasi hujjatlarini ekspertiza qilish'
  },
  {
    id:'sinov laboratoriyalar majmuasi  hujjatlarini ekspertiza qilish',
    name:'sinov laboratoriyalar majmuasi  hujjatlarini ekspertiza qilish'
  },
  {
    id:'maxsulotlarni sertifikatlashtirish organi hujjatlarini ekspertiza qilish',
    name:'maxsulotlarni sertifikatlashtirish organi hujjatlarini ekspertiza qilish'
  },
  {
    id:'xizmatlarni sertifikatlashtirish organi hujjatlarini ekspertiza qilish',
    name:'xizmatlarni sertifikatlashtirish organi hujjatlarini ekspertiza qilish'
  },
  {
    id:'metrologiya xizmati (kalibrlash laboratoriyasi) hujjatlarini ekspertiza qilish',
    name:'metrologiya xizmati (kalibrlash laboratoriyasi) hujjatlarini ekspertiza qilish'
  },
  {
    id:'mutaxassislarni sertifikatlashtirish organi  hujjatlarini ekspertiza qilish',
    name:'mutaxassislarni sertifikatlashtirish organi  hujjatlarini ekspertiza qilish'
  },
  {
    id:'sinov markazi hujjatlarini ekspertiza qilish',
    name:'sinov markazi hujjatlarini ekspertiza qilish'
  },
  {
    id:'mahsulotlarini sertifikatlashtirish organi materiallarini dolzarblashtirish',
    name:'mahsulotlarini sertifikatlashtirish organi materiallarini dolzarblashtirish'
  },
  {
    id:'sinov laboratoriyasi materiallarini dolzarblashtirish',
    name:'sinov laboratoriyasi materiallarini dolzarblashtirish'
  },

]

const ConfirmStageContract = ({ onSubmit }) => {
  return (

    <BoxUI>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={24}>

                <Col span={8}>
                  <Field
                    name="name"
                    label="Tovar (ish, xizmat)lar nomi"
                    component={UniversalStaticSelectField}
                    list={listNameContract}

                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="count"
                    label="Miqdori"
                    component={InputField}
                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="rate"
                    label="Stavkasi"
                    component={UniversalStaticSelectField}
                    list={rateTypes}

                  />
                </Col>

                <Col span={8}>
                  <Field
                    name="paymentType"
                    label="To’lov turi"
                    component={UniversalStaticSelectField}
                    list={paymentTypes}

                  />
                </Col>

              </Row>

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

export default ConfirmStageContract
