import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { InputFormArray } from 'components/FormField/'
import { MediumButton } from 'components/UI'
import Plus from 'icons/Plus'
import { Row, Col } from '~/components/Grid'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  width: 100%;
  margin-bottom: 15px;
  button{
    height: 100%;
  }
`
const PlusIcon = styled(Plus)`
  fill: #ffffff;
`
const InputFieldArray = props => {
  const { fields } = props
  const onAdd = () => fields.push('')
  return (
    <Wrapper>
      {fields.map((name, index) => {
        return (
          <Item key={index}>
            <Row gutter={24}>
              <Col span={22}>
                <Field
                  name={`${name}`}
                  id={`${index}`}
                  fields={fields}
                  component={InputFormArray} />
              </Col>
              <Col span={2}>
                <MediumButton onClick={onAdd}><PlusIcon /></MediumButton>
              </Col>
            </Row>
          </Item>
        )
      })}
    </Wrapper>
  )
}

InputFieldArray.propTypes = {
  fields: PropTypes.object
}
export default InputFieldArray
