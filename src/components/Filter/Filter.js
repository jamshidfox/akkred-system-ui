import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import FilterIcon from '../../icons/Filter'
import { SmallButton, MediumButton, SecondaryMediumButton } from '../UI/Buttons'

const boxShadow = '0 4px 15px rgba(211, 216, 224, 0.5)'

const ButtonWrap = styled('div')`
  align-items: center;
  display: flex;
`

const FilterButton = styled(SmallButton)`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  & svg {
    font-size: 18px;
    margin-right: 8px;
  }
  ${props => props.isActive && (
    css`
      background: #fff !important;
      border-color: transparent;
      box-shadow: ${boxShadow};
      color: ${props => props.theme.color.primary.default} !important;
      & svg {
        fill: ${props => props.theme.color.primary.default};
      }
    `
  )}
  ${props => props.hasCount && (
    css`
      border-color: ${props => props.theme.color.primary.default};
    `
  )}
`

const ClearButton = styled('span')`
  cursor: pointer;
  color: ${props => props.theme.color.primary.default};
  font-weight: 500;
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


  const hasCount = Boolean(count)
  const filterCount = hasCount && `: ${count}`

  return (
    <>
      <ButtonWrap>
        <FilterButton
          data-cy="filter-button"
          isActive={open}
          hasCount={Boolean(count)}
          onClick={open ? onClose : onOpen}
        >
          <FilterIcon />
          Фильтр
          {filterCount}
        </FilterButton>

        {hasCount && <ClearButton onClick={onClear}>Очистить</ClearButton>}
      </ButtonWrap>
      {open && (
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
      )}
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
