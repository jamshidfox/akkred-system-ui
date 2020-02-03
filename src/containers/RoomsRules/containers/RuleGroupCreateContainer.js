import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useCreate } from '../../../hooks'
import { getSerializedData } from '../../../utils/get'

import { RuleGroupCreate, fields } from '../components'
import { ruleGroupCreateAction } from '../actions'

const getRuleGroupCreateParams = () => ({
  stateName: STATE.RULE_GROUP_CREATE,
  action: ruleGroupCreateAction,
  serializer: getSerializedData(fields)
})

const RuleGroupCreateContainer = props => {
  const create = useCreate(getRuleGroupCreateParams())
  return (
    <RuleGroupCreate
      {...create}
      update={false}
    />
  )
}

export default RuleGroupCreateContainer
