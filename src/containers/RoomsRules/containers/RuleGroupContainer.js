import React from 'react'
import * as STATE from '../../../constants/stateNames'
import { useFetchList } from '../../../hooks'
import { ruleGroupFetchList } from '../actions'
import RuleGroupList from '../components/RuleGroupList'

const getRuleGroupListParams = () => ({
  action: ruleGroupFetchList,
  stateName: STATE.RULE_GROUP_LIST,
})

const RuleGroupContainer = props => {
  const list = useFetchList(getRuleGroupListParams())
  return (
    <RuleGroupList
      list={list}
    />
  )
}

export default RuleGroupContainer
