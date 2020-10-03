import React from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import FilterIcon from '../../icons/Filter'
import Button from '../Button/Button'

const ButtonWrap = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  & > button:not(:last-child){
    margin-right: 5px;
  }
`
const Count = styled('b')`
  color: ${({ theme }) => theme.palette.primary};
  font-size: 15px;
  margin: 1px 0 0 4px;
  font-weight: 700;
`
const FilterMask = styled('div')`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f6f6f6d4;
  height: 100%;
  z-index: 10;
`
const Popup = styled('div')`
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  border-radius: 8px;
  padding: 25px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 100;
`
const Title = styled('div')`
  color: ${({ theme }) => theme.color.title};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`
const Actions = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-top: 30px;
  & > button:not(:last-child){
    margin-right: 10px;
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
    theme,
    initialValues
  } = props

  // Const
  const hasCount = Boolean(count)
  const filterCount = hasCount &&
    <>
      :<Count>{`${count}`}</Count>
    </>

  // Handlers
  const handleToggle = open ? onClose : onOpen

  // FormFields
  const formFields =
    <Actions>
      <Button
        text={'Отменить'}
        themeType={'secondary'}
        type={'button'}
        onClick={onClose}
        width={'135px'}
      />
      <Button
        text={'Применить'}
        themeType={'primary'}
        type={'submit'}
        width={'135px'}
      />
    </Actions>

  // Popup
  const popup =
    <>
      <FilterMask onClick={onClose} />
      <Popup>
        <Title>Фильтр</Title>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ handleSubmit, ...formikProps }) => (
            <form onSubmit={handleSubmit}>
              {React.cloneElement(children, formikProps)}
              {formFields}
            </form>
          )}
        />
      </Popup>
    </>

  // Render
  return (
    <>
      <ButtonWrap>
        <Button
          text={(
            <>
              <FilterIcon />
              <span>Фильтр</span>
              {filterCount}
            </>
          )}
          onClick={handleToggle}
          themeType={'secondary'}
          styles={open && {
            boxShadow: theme.boxShadow.primary,
            border: '1px solid transparent'
          }}
          zIndex={100}
        />
        {hasCount &&
        <Button
          text={'Очистить'}
          onClick={onClear}
          themeType={'minor'}
          zIndex={100}
        />}
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
  initialValues: PropTypes.object
}

Filter.defaultProps = {
  open: false
}

export default withTheme(Filter)
