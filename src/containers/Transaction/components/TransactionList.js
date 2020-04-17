import React from 'react'
import PropTypes from 'prop-types'
import { prop, path } from 'ramda'
import styled from 'styled-components'
import TransactionTable from './TransactionTable'
import TransactionCreateModal from './TransactionCreateModal'
import { MediumButton, PageTitle } from '~/components/UI'
import { Box } from '~/components/StyledElems'
import Pagination from '~/components/Pagination/Pagination'
import { Tabs, Tab } from '~/components/Tabs'

const BoxUI = styled(Box)`
  padding: 25px;
`

const Result = styled('div')`
  background: #FFFFFF;
  border: 1px solid #EDF1F7;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 24px
`

const Sum = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
`

const SumLett = styled('div')`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #8F9BB3;
`

const SumLettSec = styled('div')`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #3366FF;
`

const SumNum = styled('div')`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  letter-spacing: 0.25px;
  color: #222B45;
`

const TransactionList = props => {
  const { list, createModal, filterActions, tabData } = props

  const data = prop('results', list)
  const loading = prop('loading', list)
  const count = path(['data', 'count'], list)

  const tableParams = {
    data,
    loading,
    filterActions
  }

  return (
    <>
      <BoxUI>
        <PageTitle name="Расчеты">
          <MediumButton onClick={createModal.onOpen}>
            Добавить
          </MediumButton>
        </PageTitle>

        <Tabs initialValue={tabData.active} onChange={tabData.onChange}>
          <Tab value={'all'} label={'Все'}>
            <TransactionTable isAll={true} {...tableParams} />
          </Tab>
          <Tab value={'income'} label={'Приход'}>
            <TransactionTable {...tableParams} />
          </Tab>
          <Tab value={'outcome'} label={'Расход'}>
            <TransactionTable {...tableParams} />
          </Tab>
        </Tabs>
      </BoxUI>

      <Pagination count={count} />

      <Result>
        <Sum>
          <SumLett>Общий прибыль за месяц:</SumLett>
          <SumNum>4 500 000 UZS</SumNum>
        </Sum>
        <Sum>
          <SumLettSec>Общий прибыль за весь период:</SumLettSec>
          <SumNum>44 500 000 UZS</SumNum>
        </Sum>
      </Result>

      <TransactionCreateModal {...createModal} />
    </>
  )
}

TransactionList.propTypes = {
  list: PropTypes.object.isRequired,
  createModal: PropTypes.object.isRequired,
  filterActions: PropTypes.object.isRequired,
  tabData: PropTypes.object.isRequired,
}

export default TransactionList
