import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled, { css } from 'styled-components'
import { groupBy, pipe, prop, toPairs } from 'ramda'
import SchedulerContext from './SchedulerContext'
import ScheduleRow from './ScheduleRow'
import { eachDayOfInterval } from '~/utils/date'

const Container = styled('div')`
  overflow-x: auto;
  width: calc(100% - 260px);
`

const Months = styled('div')`
  color: white;
  display: flex;
`

const MonthBlock = styled('div')`
  background-color: #8F9BB3;
`

const MonthName = styled('div')`
  padding: 8px 45px;
  position: relative;
  &:after {
    border-bottom: 1px solid #E4E9F2;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  ${MonthBlock}:not(:last-child) & {
    border-right: 1px solid #E4E9F2;
  }
`

const MonthDays = styled('div')`
  display: flex;
`

const Day = styled('div')`
  border-right: 1px solid #E4E9F2;
  text-align: center;
  padding: 4px 0;
  ${MonthBlock}:last-child &:last-child {
    border-right: none;
  }
`

const WeekDay = styled('div')`
  opacity: 0.9;
`

const MainBody = styled('div')`
  
`

const RoomKind = styled('div')`
  
`

const Row = styled('div')`
  border-bottom: 1px solid #E4E9F2;
  display: flex;
  width: fit-content;
  &:last-child {
    border-bottom: none;
  }
`

const ParentRow = styled(Row)`
  border-bottom: none;
`

const Cell = styled('div')`
  border-right: 1px solid #E4E9F2;
  position: relative;
  height: ${props => `${props.height}px`};
  min-width: ${props => `${props.width}px`};
  width: ${props => `${props.width}px`};
  &:last-child {
    border-right: none;
  }
  ${props => props.isSelecting && (
    css`
      background-color: #D9E4FF;
      border-color: transparent;
      position: relative;
      &:after {
        border: 1px dashed #3366FF;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      &[data-is-first='true'] {
        border-left: 1px dashed #3366FF !important;
      }
      &[data-is-last='true'] {
        border-right: 1px dashed #3366FF !important;
      }
      &:not(:first-child):after {
        border-left: none;
        border-right: none;
      }
      &:not(:last-child):after {
        border-left: none;
        border-right: none;
      }
    `
  )}
  ${props => props.isSelected && (
    css`
      background-color: green;
      border-color: transparent;
    `
  )}
  ${props => props.isDisabled && (
    css`
      pointer-events: none;
    `
  )}
`

const ParentCell = styled(Cell)`
  background-color: #EDF1F7;
  border-right: none;
`

const SchedulerRight = props => {
  const { roomData, bookingList, onOpenBooking, getToggleIsExpanded } = props
  const { cellHeight, cellWidth, toggleState } = useContext(SchedulerContext)

  const today = moment()
  const nextMonth = moment(today).add(1, 'month')

  const startOfMonth = moment(today).startOf('month')
  const endOfMonth = moment(nextMonth).endOf('month')
  const periodDays = eachDayOfInterval(startOfMonth, endOfMonth)

  const groupedPeriod = pipe(
    groupBy(item => moment(item).format('MMMM YYYY')),
    toPairs
  )(periodDays)

  return (
    <Container>
      <Months>
        {groupedPeriod.map((item, index) => {
          const [monthYear, days] = item
          return (
            <MonthBlock key={index}>
              <MonthName>{monthYear}</MonthName>
              <MonthDays>
                {days.map((d, dIndex) => {
                  const day = moment(d).format('DD')
                  const weekDay = moment(d).format('dd')
                  return (
                    <Day key={dIndex} style={{ width: cellWidth }}>
                      {day}
                      <WeekDay>{weekDay}</WeekDay>
                    </Day>
                  )
                })}
              </MonthDays>
            </MonthBlock>
          )
        })}
      </Months>

      <MainBody>
        {roomData.map(item => {
          const [roomCategory, roomList] = item
          const isExpanded = getToggleIsExpanded(roomCategory, toggleState)
          return (
            <RoomKind key={roomCategory}>
              <ParentRow>
                {periodDays.map((d, index) => {
                  return (
                    <ParentCell
                      key={index}
                      height={cellHeight}
                      width={cellWidth}
                    />
                  )
                })}
              </ParentRow>
              {isExpanded && roomList.map(room => {
                const roomId = prop('id', room)
                return (
                  <ScheduleRow
                    key={roomId}
                    room={roomId}
                    row={Row}
                    cell={Cell}
                    periodDays={periodDays}
                    bookingList={bookingList}
                    onOpenBooking={onOpenBooking}
                  />
                )
              })}
            </RoomKind>
          )
        })}
      </MainBody>
    </Container>
  )
}

SchedulerRight.propTypes = {
  roomData: PropTypes.array.isRequired,
  bookingList: PropTypes.array.isRequired,
  onOpenBooking: PropTypes.func.isRequired,
  getToggleIsExpanded: PropTypes.func.isRequired,
}

export default SchedulerRight
