import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import FilterIcon from '../../icons/Filter'
import { MediumButton, SecondaryMediumButton } from '../UI/Buttons'

const boxShadow = '0 4px 15px rgba(211, 216, 224, 0.5)'

const ButtonWrap = styled('div')`
  display: flex;
  align-items: center;
`
const FilterButton = styled('button')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background.buttonSecondary};
  border-radius: 10px;
  border: 1px solid #ced0dd;
  height: 36px;
  padding: 9px 16px;
  z-index: 3;
  font-size: 14px;
  line-height: 14px;
  outline: none;
  cursor: pointer;
  & svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    color: #9aa4af;
  }
  b{
    color: ${({ theme }) => theme.palette.primary};
    margin-left: 3px;
  }
`
const ClearButton = styled('span')`
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  color: ${props => props.theme.color.primary.default};
  margin-left: 15px;
`
const FilterMask = styled.div`
  background-color: rgba(246, 246, 246, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 2;
`
const Popup = styled.div`
  background: #ffffff;
  border: 1px solid #e4e5eb;
  box-sizing: border-box;
  box-shadow: ${boxShadow};
  border-radius: 8px;
  padding: 30px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 2;
`
const Title = styled.div`
  font-size: 20px;
  color: #2c3a50;
  font-weight: 500;
  margin-bottom: 30px;
`
const Actions = styled.div`
  text-align: right;
  margin-top: 40px;
  & button:first-child {
    margin-right: 15px;
  }
`

const Filter = props => {
  const {
    count,
    open,
    onOpen,
    onClose,
    onClear,
    children,
    onSubmit,
    initialValues
  } = props

  // Const
  const hasCount = Boolean(count)
  const filterCount = hasCount &&
    <>
      :<b>{`${count}`}</b>
    </>

  // Popup
  const popup =
    <>
      <FilterMask />
      <Popup>
        <Title>Фильтр</Title>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ handleSubmit, ...formikProps }) => (
            <form onSubmit={handleSubmit}>
              {React.cloneElement(children, formikProps)}
              <Actions>
                <SecondaryMediumButton type="button" onClick={onClose}>
                  Отменить
                </SecondaryMediumButton>
                <MediumButton type="submit">Применить</MediumButton>
              </Actions>
            </form>
          )}
        />
      </Popup>
    </>

  // Render
  return (
    <>
      <ButtonWrap>
        <FilterButton
          onClick={open ? onClose : onOpen}
        >
          <FilterIcon />
          <span>Фильтр</span>
          {filterCount}
        </FilterButton>
        {hasCount &&
        <ClearButton
          onClick={onClear}
        >
          Очистить
        </ClearButton>}
      </ButtonWrap>
      {open && popup}
    </>
  )
}

Filter.propTypes = {
  open: PropTypes.bool,
  count: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
  children: PropTypes.node,
  initialValues: PropTypes.object,
  selected: PropTypes.bool
}

Filter.defaultProps = {
  open: false
}

export default Filter
