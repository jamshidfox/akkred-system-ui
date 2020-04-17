import React, { useState } from 'react'
import {isEmpty, isNil, path} from 'ramda'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import {
  Form
} from '../../../components/FormField'
import PriceTableList from './PriceTableList'
import PriceFields from './PriceFields'
import {PageTitle, MediumButton, InputError} from '~/components/UI'
import { Box, ButtonAlign } from '~/components/StyledElems'
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

const Error = styled(InputError)`
  margin-bottom: 15px;
 
`

const RECEP = 'recep'
const TOUR = 'tour'
const PARTNERS = 'partners'
const AGENTS = 'agent'

const isEmptyNil = item => isEmpty(item) || isNil(item)
const ReservationCreate = props => {
  const {
    onSubmit: onUpdate,
    initialValues,
    categoryData,
    loading,
    companyCreateData,
    totalInits
  } = props

  const [tab, setTab] = useState(RECEP)

  const onChangeTab = (val) => {
    if (val === tab) {
      return setTab('')
    }

    return setTab(val)
  }

  return (
    <BoxUI>
      <PageTitle name="Тарифы и цены номерного фонда" />
      <TableRow header={true}>
        <TableCol span={6}>Название</TableCol>
        <TableCol span={18}>Заполнен</TableCol>
      </TableRow>
      <TableHeader onClick={() => onChangeTab(RECEP)} active={tab === RECEP}>
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
                <PriceTableList categoryData={categoryData} fieldName="rates"/>
                <ButtonAlign>
                  <MediumButton disabled={loading} type="submit">Сохранить</MediumButton>
                </ButtonAlign>
              </FormWrapper>
            )
          }}
        />
      )}

      <TableHeader onClick={() => onChangeTab(PARTNERS)} active={tab === PARTNERS}>
        <TableCol span={6}>Для компании</TableCol>
        <TableCol span={17}>Da</TableCol>
        <TableCol span={1}><Chev fill="black" /></TableCol>

      </TableHeader>
      {tab === PARTNERS && (
        <Form
          mutators={{ ...arrayMutators }}
          onSubmit={companyCreateData.onSubmit}
          keepDirtyOnReinitialize={true}
          initialValues={totalInits.company}
          render={formikProps => {
            const errors = path(['submitErrors', 'partnerRates'], formikProps)

            return (
              <FormWrapper onSubmit={formikProps.handleSubmit}>
                {!isEmptyNil(errors) && <Error>Пожалуйста заполните все поля</Error>}

                <PriceFields partnerType="company" categoryData={categoryData} />
                <ButtonAlign>
                  <MediumButton disabled={loading} type="submit">Сохранить</MediumButton>
                </ButtonAlign>
              </FormWrapper>
            )
          }}
        />
      )}
      <TableHeader onClick={() => onChangeTab(TOUR)} active={tab === TOUR}>
        <TableCol span={6}>Для tur</TableCol>
        <TableCol span={17}>Da</TableCol>
        <TableCol span={1}><Chev fill="black" /></TableCol>
      </TableHeader>
      {tab === TOUR && (
        <Form
          mutators={{ ...arrayMutators }}
          onSubmit={companyCreateData.onSubmit}
          keepDirtyOnReinitialize={true}
          initialValues={totalInits.tour}
          render={formikProps => {
            const errors = path(['submitErrors', 'partnerRates'], formikProps)

            return (
              <FormWrapper onSubmit={formikProps.handleSubmit}>
                {!isEmptyNil(errors) && <Error>Пожалуйста заполните все поля</Error>}
                <PriceFields partnerType="tour" categoryData={categoryData} />
                <ButtonAlign>
                  <MediumButton disabled={loading} type="submit">Сохранить</MediumButton>
                </ButtonAlign>
              </FormWrapper>
            )
          }}
        />
      )}
      <TableHeader onClick={() => onChangeTab(AGENTS)} active={tab === AGENTS}>
        <TableCol span={6}>Для агентов</TableCol>
        <TableCol span={17}>Da</TableCol>
        <TableCol span={1}><Chev fill="black" /></TableCol>

      </TableHeader>
      {tab === AGENTS && (
        <Form
          mutators={{ ...arrayMutators }}
          onSubmit={companyCreateData.onSubmit}
          keepDirtyOnReinitialize={true}
          initialValues={totalInits.agent}
          render={formikProps => {
            const errors = path(['submitErrors', 'partnerRates'], formikProps)
            return (
              <FormWrapper onSubmit={formikProps.handleSubmit}>
                {!isEmptyNil(errors) && <Error>Пожалуйста заполните все поля</Error>}
                <PriceFields partnerType="agent" categoryData={categoryData} />
                <ButtonAlign>
                  <MediumButton disabled={loading} type="submit">Сохранить</MediumButton>
                </ButtonAlign>
              </FormWrapper>
            )
          }}
        />
      )}
    </BoxUI>
  )
}
ReservationCreate.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  partnerCreateData: PropTypes.object
}

export default ReservationCreate
