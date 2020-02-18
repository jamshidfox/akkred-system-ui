import React from 'react'
import styled from 'styled-components'
import arrayMutators from 'final-form-arrays'
import PropTypes from 'prop-types'
import { prop } from 'ramda'
import { PageTitle, MediumButton } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'

import { Row as RowUI, Col } from '../../../components/Grid'
import {
  Form,
  Field,
  InputField,
  DateField,
} from '../../../components/FormField'
import RuleTimeList from './RuleTImeList'
import RulePriceCreateModal from './RulePriceCreateModal'

export const fields = [
  'name',
  'fromDate',
  'toDate',
]

const BoxUI = styled(Box)`
  padding: 25px;
    margin-bottom: 24px;

`
const Label = styled.div`
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: ${props => props.theme.color.basic.default};
`

const RuleTime = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`

const Row = styled(RowUI)`
  margin-bottom: 40px;
`
const RuleGroupCreate = props => {
  const { onSubmit, initialValues, update, createModal } = props
  const rules = prop('rules', initialValues)

  return (
    <>
      <BoxUI>
        <PageTitle name="Правила раннего заезда и позднего выезда" />
        <Form
          keepDirtyOnReinitialize={true}
          mutators={arrayMutators}
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ handleSubmit, values, ...formikProps }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Label>Основная информация</Label>
                <Row gutter={24}>
                  <Col span={8}>
                    <Field name="name" label="Название тарифа" component={InputField} />
                  </Col>
                </Row>

                <Label>Период</Label>
                <Row gutter={24}>
                  <Col span={12}>
                    <Field name="fromDate" label="Дата начало" component={DateField} />
                  </Col>

                  <Col span={12}>
                    <Field name="toDate" label="Дата окончание" component={DateField} />
                  </Col>
                </Row>
                {update &&
                  (<RuleTime>
                          <MediumButton onClick={createModal.onOpen}>добавить</MediumButton>

                      </RuleTime>

                  )
                }

                {update &&
                  (
                    <RuleTimeList
                      rules={rules}
                    />
                  )
                }
                <div style={{ textAlign: 'right' }}>
                  <MediumButton type={'submit'}>Сохранить</MediumButton>
                </div>
                <RulePriceCreateModal {...createModal}
                />

              </form>
            )
          }}
        />

      </BoxUI>
    </>
  )
}
RuleGroupCreate.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
}

export default RuleGroupCreate
