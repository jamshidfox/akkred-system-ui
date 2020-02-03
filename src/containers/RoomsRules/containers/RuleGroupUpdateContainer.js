import React from 'react'
import { prop } from 'ramda'
import { useParams } from 'react-router-dom'
import * as STATE from '../../../constants/stateNames'
import * as ROUTES from '../../../constants/routes'
import { useUpdate, useFetchItem, useCreateModal } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'
import { RuleGroupCreate, fields, field } from '../components'

import { ruleGroupUpdateAction, rulePriceCreateAction, ruleGroupFetchItem } from '../actions'

const serializerPruce = (val, id) => {
  return {
    ...getSerializedData(field, val),
    rule_group:id,
  }
}

const getRuleGrouptItemParams = () => ({
  action: ruleGroupFetchItem,
  stateName: STATE.RULE_GROUP_ITEM,
})

const getRulePriceCreateParams = (id) => ({
  action: rulePriceCreateAction,
  stateName: STATE.RULE_GROUP_ITEM,
  serializer: (val) => serializerPruce(val, id)
})
const getInitialValues = (data) => {
  return ({
    name: prop('name', data),
    fromDate: prop('fromDate', data),
    toDate: prop('toDate', data),
    rules: prop('rules', data),
  })
}

const getRuleGroupCreateParams = () => ({
  stateName: STATE.RULE_GROUP_UPDATE,
  action: ruleGroupUpdateAction,
  serializer: getSerializedData(fields),
  redirectUrl: ROUTES.SETTING_RULE_GROUP_LIST
})

const RuleGroupUpdateContainer = props => {
  const { data } = useFetchItem(getRuleGrouptItemParams())
  const { id } = useParams()
  const initialValues = getInitialValues(data)
  const updateData = useUpdate(getRuleGroupCreateParams())
  const createModal = useCreateModal(getRulePriceCreateParams(id))
  return (
    <RuleGroupCreate
      {...updateData}
      initialValues={initialValues}
      update={true}
      createModal={createModal}
    />
  )
}

export default RuleGroupUpdateContainer
