import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { replaceParamsRoute } from 'utils/route'
import { getParamFromHistory } from 'utils/get'
import Search from '../../icons/Search'
import { IconInput } from '../UI'

const Input = styled(IconInput)`
  background: ${({ theme }) => theme.background.input};
  border: ${({ theme }) => theme.border.input};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  padding: 0 16px 0 45px;
  height: 36px;
  width: 280px;
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
    font-size: 14px;
  }
  & svg{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: #b2b7bf;
  }
`

const SearchField = props => {
  const {
    key
  } = props

  // Location
  const history = useHistory()

  // useState
  const [val, setVal] = useState(getParamFromHistory(key, history))

  const decodedValue = val ? decodeURIComponent(val) : ''

  // Handlers
  const onEnter = (ev, search) => {
    const historyValue = getParamFromHistory(key, history)
    if (historyValue !== search) {
      replaceParamsRoute({ [key]: search, page: 1 }, history)
    }
  }
  const onChange = ev => setVal(ev.target.value)

  // Render
  return (
    <Input
      prefix={<Search />}
      onChange={onChange}
      onEnter={onEnter}
      data-cy={'table-search'}
      value={decodedValue}
      placeholder={'Поиск...'}
      {...props}
    />
  )
}

SearchField.propTypes = {
  key: PropTypes.string
}

SearchField.defaultProps = {
  key: 'search'
}

export default SearchField
