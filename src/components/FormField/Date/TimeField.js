import React from 'react'
import PropTypes from 'prop-types'
import {
  splitEvery,
  pipe,
  pathOr,
  join,
  replace,
  length,
  lt,
  curry,
  prop,
  test, split, defaultTo, head,
} from 'ramda'
import { pure } from 'react-fc'
import styled from 'styled-components'
import { Input } from '../../UI'
import { getFieldError } from '~/utils/form'

const TimeInput = styled(Input)`
  margin-left: 10px;
  width: 90px;
`
const getPure = pipe(
  pathOr('', ['target', 'value']),
  replace(/:/g, '')
)
const notNumber = pipe(
  Number,
  isNaN
)
const overflow = pipe(
  length,
  lt(4)
)

const getDate = (v) => {
  return pipe(split('T'), head, defaultTo(''))(v)
}
const getValue = (v) => {
  const value = pipe(split('T'), getTime, defaultTo(''))(v)
  return value
}

const onType = curry((onChange, value, ev) => {
  const date = getDate(value)
  const pureValue = getPure(ev)
  if (notNumber(pureValue) || overflow(pureValue)) return

  const time = pipe(
    splitEvery(2),
    join(':')
  )(pureValue)

  onChange(date + 'T' + time)
})

const getTime = (arr) => arr[1]

const DurationInput = props => {
  const {
    input: { onChange, value, ...input },
    label,
    meta,
    height
  } = props

  const tested = test(/[0-9]{2}:[0-9]{2}/, value)
  const active = prop('active', meta)
  const touched = prop('touched', meta)
  const dirty = prop('dirty', meta)
  const isValid = !tested && !active && touched && dirty
  const error = isValid && 'Укажите время в правильном формате (03:20).'

  const time = getValue(value)
  return (
    <TimeInput
      placeholder={'03:20'}
      onChange={onType(onChange, value)}
      value={time}
      {...input}
      height={height}
    />
  )
}

DurationInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  height: PropTypes.number,
}

export default pure(DurationInput)
