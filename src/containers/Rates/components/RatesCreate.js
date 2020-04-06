import React, { useState } from 'react'
import { path } from 'ramda'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import {
  Form,
  Field,
  InputField,
  UniversalSearchField,
  DateField
} from '../../../components/FormField'
import PriceTableList from './PriceTableList'
import PriceFields from './PriceFields'
import { PageTitle, MediumButton } from '~/components/UI'
import * as ROUTES from '~/constants/api'
import { Box, ButtonAlign } from '~/components/StyledElems'
import { Row as RowUI, Col } from '~/components/Grid'
import { TableRow, TableCol } from '~/components/Table'
import Chev from '~/icons/Chev'

const TableHeader = styled(TableRow)`
    svg {
    transition: all 300ms;
   transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0)'};
  }
`
export const fields = [
  'name',
  'foreignerYoung',
  'foreignerGrown',
  'localYoung',
  'localGrown',
  'roomCategory'
]

const BoxUI = styled(Box)`
  padding: 25px;
`

const FormWrapper = styled.form`
  margin-top: 20px;
  padding-bottom: 30px;
  border-bottom: 1px #efefef solid;

`

const RECEP = 'recep'
const PARTNERS = 'partners'
const AGENTS = 'agent'
const ReservationCreate = props => {
  const { onSubmit: onUpdate, initialValues, categoryData, loading, companyCreateData } = props

  const [tab, setTab] = useState(RECEP)

  return (
    <BoxUI>
      <PageTitle name="Тарифы и цены номерного фонда" />
      <TableRow header={true}>
        <TableCol span={6}>Название</TableCol>
        <TableCol span={18}>Заполнен</TableCol>
      </TableRow>
      <TableHeader onClick={() => setTab(RECEP)} active={tab === RECEP}>
        <TableCol span={6}>Со стойки</TableCol>
        <TableCol span={17}>Da</TableCol>
        <TableCol span={1}><Chev fill="black" /></TableCol>
      </TableHeader>
      {tab === RECEP && (
        <Form
          onSubmit={onUpdate}
          initialValues={initialValues}
          render={formikProps => {
            return (
              <FormWrapper onSubmit={formikProps.handleSubmit}>
                <PriceTableList categoryData={categoryData} />
                <ButtonAlign>
                  <MediumButton disabled={loading} type="submit">Сохранить</MediumButton>
                </ButtonAlign>
              </FormWrapper>
            )
          }}
        />
      )}

      <TableHeader onClick={() => setTab(PARTNERS)} active={tab === PARTNERS}>
        <TableCol span={6}>Для компании</TableCol>
        <TableCol span={18}>Da</TableCol>
      </TableHeader>
      {tab === PARTNERS && (
        <Form
          mutators={{ ...arrayMutators }}
          onSubmit={companyCreateData.onSubmit}
          keepDirtyOnReinitialize={true}
          initialValues={{ priceList: [{}] }}
          render={formikProps => {
            return (
              <FormWrapper onSubmit={formikProps.handleSubmit}>
                <PriceFields partnerType="company" />
                <ButtonAlign>
                  <MediumButton disabled={loading} type="submit">Сохранить</MediumButton>
                </ButtonAlign>
              </FormWrapper>
            )
          }}
        />
      )}
      <TableHeader onClick={() => setTab(AGENTS)} active={tab === AGENTS}>
        <TableCol span={6}>Для агентов</TableCol>
        <TableCol span={18}>Da</TableCol>
      </TableHeader>

    </BoxUI>
  )
}
ReservationCreate.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  partnerCreateData: PropTypes.object
}

export default ReservationCreate
