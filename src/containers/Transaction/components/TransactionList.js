import React from 'react'
import { Link } from 'react-router-dom'
import { prop, isEmpty } from 'ramda'
import styled from 'styled-components'
import { TableCol, Table, TableRow } from '../../../components/Table'
import { MediumButton, PageTitle, Modal } from '../../../components/UI'
import { Box } from '../../../components/StyledElems'
import numberFormat from '../../../utils/numberFormat'
import dateFormat from '../../../utils/dateFormat'

const BoxUI = styled(Box)`
  padding: 25px;
`
const style = {
  color: '#FFF',
  textDecoration: 'none'
}

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
const Income = styled('div')`
                    background: #00E096;
                    border-radius: 12px;
                    text-align: center;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 16px;
                    color: #FFF;
                    padding: 6px 12px 5px;
                    margin-right:30px;
                    margin-top:-3px;
`

const Outcome = styled('div')`
                    background: #FF3D71;
                    border-radius: 12px;
                    text-align: center;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 16px;
                    color: #FFF;
                    padding: 6px 12px 5px;
                    margin-right:30px;
                    margin-top:-3px;
`
const TransactionList = props => {
  const { list } = props

  const data = prop('results', list)
  return (
    <>
      <BoxUI>
        <PageTitle name="Расчеты" >
          <Link style={style} to={`/finance/rates/create`} ><MediumButton >добавить</MediumButton></Link>
        </PageTitle>

        <Table isEmpty={isEmpty(data)}>
          <TableRow header={true} >
            <TableCol span={3} />
            <TableCol span={4}>сумма</TableCol>
            <TableCol span={4}>дата и время</TableCol>
            <TableCol span={4}>платешьщик</TableCol>
            <TableCol span={4}>Комментария</TableCol>
            <TableCol span={5}>имя, фамилия</TableCol>
          </TableRow>
          {data.map(transaction => {
            const id = prop('id', transaction)

            const totalPrice = numberFormat(prop('totalPrice', transaction))
            const createdDate = dateFormat(prop('createdDate', transaction))
            const type = prop('type', transaction)
            return (
              <TableRow key={id}>
                <TableCol span={3}>

                  {type === 'outcome' &&
                (
                  <Outcome>Расход
                  </Outcome>
                )
                  }
                  {type === 'income' &&
                (
                  <Income>Приход
                  </Income>
                )
                  }
                </TableCol>
                <TableCol span={4}>{totalPrice}</TableCol>
                <TableCol span={4}>{createdDate}</TableCol>
                <TableCol span={4}>Гость</TableCol>
                <TableCol span={4}>{transaction.comment}</TableCol>
                <TableCol span={5}>Анатолий Токов</TableCol>
              </TableRow>
            )
          })}

        </Table>
      </BoxUI>
      <Result>
        <Sum>
          <SumLett>
                        Общий прибыль за месяц:

          </SumLett>
          <SumNum>
                        4 500 000 UZS
          </SumNum>
        </Sum>
        <Sum>
          <SumLettSec>
                 Общий прибыль за весь период:
          </SumLettSec>
          <SumNum>
                  44 500 000 UZS
          </SumNum>
        </Sum>
      </Result>

    </>
  )
}

export default TransactionList
