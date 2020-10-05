import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { last as rLast } from 'ramda'
import { withRouter } from 'react-router-dom'
import { getCurrentPage, getPageList } from './utils'
import { addParamsRoute } from '~/utils/route'

const Wrap = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.white};
  margin-top: auto;
  ${({ styles }) => styles};
`
const Page = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, isActive }) => isActive ? theme.palette.white : theme.palette.primary};
  background: ${({ theme, isActive }) => isActive ? theme.palette.primary : theme.palette.white};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  border: ${({ theme, isActive }) => isActive ? '1px solid transparent' : theme.border.primary};
  padding: 6px;
  cursor: pointer;
  user-select: none;
  &:not(:last-child){
    margin-right: 10px;
  }
`
const Dots = styled('span')`
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.palette.primary};
  margin-right: 10px;
  padding-bottom: 3px;
  user-select: none;
`

const Pagination = props => {
  const {
    count,
    history,
    key,
    styles
  } = props

  if (!count) {
    return null
  }

  // Const
  const pages = getPageList(count)
  const currPage = getCurrentPage(key, history)
  // const last = currPage * PAGE_SIZE

  const lastPage = rLast(pages)
  const pageCount = pages.length

  // const to = gt(last, count) ? count : last
  // const from = last - PAGE_SIZE + ONE
  // const text = sprintf('%d-%d из %d', from, to, count)

  // const prevDisabled = lte(currPage, ONE)
  // const nextDisabled = gte(to, count)

  // Handlers
  // const onNext = () => addParamsRoute({ page: currPage + ONE }, history)
  // const onPrev = () => addParamsRoute({ page: currPage - ONE }, history)
  const goTo = to => addParamsRoute({ page: to }, history)

  // Pager
  const pager =
    pageCount > 10 ? (
      <>
        <Page
          isActive={currPage === 1}
          onClick={() => goTo(1)}
        >
          1
        </Page>
        {currPage > 3 && <Dots>...</Dots>}
        {currPage !== 1 && currPage !== 2 && currPage !== lastPage && (
          <Page
            onClick={() => goTo(currPage - 1)}
          >
            {currPage - 1}
          </Page>
        )}
        {currPage === 1 && (
          <Page
            onClick={() => goTo(2)}
          >
            2
          </Page>
        )}
        {currPage !== 1 && currPage !== lastPage && (
          <Page isActive={true}>{currPage}</Page>
        )}
        {currPage !== 1 && +currPage + 1 !== lastPage && currPage !== lastPage && (
          <Page
            onClick={() => goTo(+currPage + 1)}
          >
            {+currPage + 1}
          </Page>
        )}
        {currPage === lastPage && (
          <Page
            onClick={() => goTo(currPage - 1)}
          >
            {currPage - 1}
          </Page>
        )}
        {currPage < lastPage - 2 && <Dots>...</Dots>}
        <Page
          isActive={lastPage === currPage}
          onClick={() => goTo(lastPage)}
        >
          {lastPage}
        </Page>
      </>
    ) : (
      pages.map(item => (
        <Page
          key={item}
          isActive={item === currPage}
          onClick={() => goTo(item)}
        >
          {item}
        </Page>
      ))
    )

  // Render
  return (
    <Wrap
      styles={styles}
    >
      {pager}
    </Wrap>
  )
}

Pagination.propTypes = {
  count: PropTypes.number,
  history: PropTypes.object.isRequired,
  key: PropTypes.string
}

Pagination.defaultProps = {
  count: 0,
  key: 'page'
}

export default withRouter(Pagination)
