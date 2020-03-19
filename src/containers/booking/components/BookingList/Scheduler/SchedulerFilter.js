import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UniversalSearchField } from 'components/FormField/Select'
import { Field, useField } from 'react-final-form'
import { path } from 'ramda'
import * as API from '~/constants/api'
import { addParamsRoute } from '~/utils/route'

const Container = styled('div')`
  background-color: #8F9BB3;
  height: 72px;
  padding: 16px;
`
const defaultValue = {
  id: 2
}
const SchedulerFilter = props => {
  const { history } = props
  const roomCategory = useField('roomCategory')
  const roomCategoryId = path(['input', 'value', 'id'], roomCategory)

  useEffect(() => {
    addParamsRoute({ roomCategory: roomCategoryId }, history)
  }, [roomCategoryId])

  return (
    <Container>
      <Field
        name="roomCategory"
        component={UniversalSearchField}
        api={API.ROOM_TYPE_LIST}
        params={{ children_only: false }}
      />
    </Container>
  )
}

SchedulerFilter.propTypes = {}

export default SchedulerFilter
