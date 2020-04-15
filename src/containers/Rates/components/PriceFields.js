import React, { Fragment } from 'react'
import { FieldArray } from 'react-final-form-arrays'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import { path, pathOr } from 'ramda'
import PropTypes from 'prop-types'
import {
  InputField,
  UniversalStaticSelectField,
  UniversalMultiSelectField
} from '~/components/FormField'
import { Row, Col } from '~/components/Grid'
import * as API from '~/constants/api'
import * as CONST from '~/constants/backend'
import { LargeButton } from '~/components/UI'
import { FIXED, INDIVIDUAL } from '~/constants/backend'
import PriceTableList from '~/containers/Rates/components/PriceTableList'

const RowUI = styled(Row)`
  margin-bottom: 20px;
`

const PriceFiels = props => {
  const { partnerType, categoryData } = props
  return (
    <>
      <RowUI align="center" gutter={10}>
        <Col span={3}>
          Процент НДС
        </Col>
        <Col span={2}>
          <Field
            name="nds"
            component={InputField}
            placeholder="10"
          />
        </Col>
        <Col span={1}>%</Col>

        <Col span={6} />
        <Col span={5}>Процент тур. сбора от МРЗП</Col>
        <Col span={2}>
          <Field
            name="touristTax"
            component={InputField}
            placeholder="10"
          />
        </Col>
        <Col span={1}>%</Col>
        <Col span={6} />
      </RowUI>
      <FieldArray
        name="partnerRates"
        render={({ fields }) => {
          const LAST_INDEX = fields.length - 1
          const onAdd = () => fields.push({})
          const onRemove = (index) => fields.remove(index)
          const onClick = (index) => {
            if (index === LAST_INDEX) {
              return onAdd()
            }
            return onRemove(index)
          }
          return (
            <>
              {fields.map((field, index) => {
                const discountApi = path(['value', index, 'discountType'], fields)
                const discountType = pathOr(discountApi, ['value', index, 'discountType', 'id'], fields)
                const isFixed = discountType === FIXED
                const isIndi = discountType === INDIVIDUAL
                return (
                  <Fragment key={index}>
                    <RowUI gutter={30} align="center">
                      <Col span={8}>
                        <Field
                          name={`${field}.partners`}
                          itemText={['title']}
                          component={UniversalMultiSelectField}
                          params={{ type: partnerType }}
                          api={API.PARTNER_LIST}
                        />
                        <Field
                          name={`${field}.partnerType`}
                          component={'input'}
                          type="hidden"
                          defaultValue={partnerType}
                          value={partnerType}
                        />
                      </Col>
                      {isIndi
                        ? (
                          <Col span={16}>
                            <Field
                              name={`${field}.discountType`}
                              component={UniversalStaticSelectField}
                              list={CONST.CALCULATION_TYPE_LIST}
                            />
                          </Col>
                        )
                        : (
                          <>
                            <Col span={8}>
                              <Field
                                name={`${field}.discountType`}
                                component={UniversalStaticSelectField}
                                list={CONST.CALCULATION_TYPE_LIST}
                              />
                            </Col>
                            <Col span={8}>
                              <Field
                                name={`${field}.discountPrice`}
                                component={InputField}
                                disabled={!discountType}
                                placeholder={isFixed ? 'Количество (в UZS)' : 'Количество (в процентах)'}
                              />
                            </Col>
                          </>
                        )
                      }
                      <Col span={2}>
                        <LargeButton onClick={() => onClick(index)}>{index === LAST_INDEX ? '+' : '-'}</LargeButton>
                      </Col>
                    </RowUI>
                    {isIndi && (
                      <PriceTableList fieldName={`${field}.individualRates`} categoryData={categoryData} />

                    )}
                  </Fragment>
                )
              })}
            </>
          )
        }}
      />
    </>
  )
}

PriceFiels.propTypes = {
  partnerType: PropTypes.string
}
PriceFiels.defaultProps = {
  partnerType: 'company'
}
export default PriceFiels
