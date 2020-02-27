import React, { useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  filter, find, head,
  path, last, map,
  pathEq, pipe,
  prop, propEq, sortBy,
  isEmpty, sort, has,
  equals
} from 'ramda'
import styled from 'styled-components'
import SchedulerContext from './SchedulerContext'

const ClientInfo = styled('div')`
  cursor: pointer;
  align-items: center;
  background-color: #FDD297;
  border: 1px solid #FF9500;
  display: flex;
  padding: 5px 10px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${props => `${props.width - 1}px`};
  z-index: 1;
`

const reducer = (state, action) => ({ ...state, ...action })
const initialState = {
  isMouseDown: false,
  selectingRooms: [],
  activeSelected: []
}

const sortDatesAsc = (a, b) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)
  return dateA.getTime() - dateB.getTime()
}

const getTargetIsDisabled = (event) => {
  const targetDataSet = event.target.dataset
  return targetDataSet.isDisabled === 'true' || !has('isDisabled', targetDataSet)
}

const convertToDate = (date) => moment(date).format('YYYY-MM-DD')

const ScheduleRow = props => {
  const {
    room,
    row: Row,
    cell: Cell,
    periodDays,
    bookingList,
    onOpenBooking
  } = props

  const { cellHeight, cellWidth } = useContext(SchedulerContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  const selectingRooms = sort(sortDatesAsc, state.selectingRooms)

  const onMouseDown = (event, room, date, index) => {
    const isLeftClick = event.button === 0
    const targetIsDisabled = getTargetIsDisabled(event)
    if (isLeftClick && !targetIsDisabled) {
      dispatch({
        isMouseDown: true,
        selectingRooms: [{ room, date }],
        activeSelected: [...state.activeSelected, index]
      })
    }
  }

  const onMouseUp = () => {
    if (state.isMouseDown) {
      const sortedSelectingRooms = sort(sortDatesAsc, state.selectingRooms)
      const room = pipe(head, prop('room'))(sortedSelectingRooms)
      const enterDate = pipe(head, prop('date'))(sortedSelectingRooms)
      const leaveDate = pipe(last, prop('date'))(sortedSelectingRooms)
      onOpenBooking({
        room,
        enterDate,
        leaveDate
      })

      dispatch({
        isMouseDown: false,
        selectingRooms: [],
        activeSelected: []
      })
    }
  }

  const onMouseOver = (event, room, date, index) => {
    if (state.isMouseDown) {
      const targetIsDisabled = getTargetIsDisabled(event)
      if (targetIsDisabled) {
        onMouseUp()
      } else {
        dispatch({
          selectingRooms: [...state.selectingRooms, { room, date }],
          activeSelected: [...state.activeSelected, index]
        })
      }
    }
  }

  const onMouseLeaveRow = () => {
    if (state.isMouseDown) {
      onMouseUp()
      dispatch({ isMouseDown: false })
    }
  }

  const getSelection = pipe(
    filter(propEq('room', room)),
    map(prop('date'))
  )

  const sortAscending = item => item
  const sortActiveSelected = sortBy(sortAscending, state.activeSelected)
  const firstActiveIndex = head(sortActiveSelected)
  const lastActiveIndex = last(sortActiveSelected)

  const reservedRoomDays = pipe(
    filter(pathEq(['room', 'id'], room)),
  )(bookingList)

  return (
    <Row onMouseLeave={onMouseLeaveRow}>
      {periodDays.map((d, index) => {
        const date = moment(d).format('YYYY-MM-DD')
        const selectingRoomDays = getSelection(selectingRooms)

        const reservedRoomData = find(pipe(
          prop('enterDatetime'),
          convertToDate,
          equals(date)
        ))(reservedRoomDays)

        const reservedRoomFilter = filter(item => {
          const itemEnterDate = prop('enterDatetime', item)
          const itemLeaveDate = prop('leaveDatetime', item)
          return moment(date).isBetween(itemEnterDate, itemLeaveDate, null, '[]')
        })(reservedRoomDays)

        const client = path(['client'], reservedRoomData)
        const clientName = path(['client', 'name'], reservedRoomData)
        const surname = path(['client', 'surname'], reservedRoomData)
        const fatherName = path(['client', 'fatherName'], reservedRoomData)
        const enterDate = prop('enterDatetime', reservedRoomData)
        const bookingType = prop('bookingType', reservedRoomData)
        const paymentType = prop('paymentType', reservedRoomData)
        const leaveDate = prop('leaveDatetime', reservedRoomData)
        const reservedDays = moment(leaveDate).diff(enterDate, 'days') + 1
        const isDisabled = !isEmpty(reservedRoomFilter)

        const selectingFirstDate = head(selectingRoomDays)
        const selectingLastDate = last(selectingRoomDays)
        // const isSelecting = includes(date, selectingRoomDays)
        const isSelecting = moment(date).isBetween(selectingFirstDate, selectingLastDate, null, '[]')

        const isFirst = firstActiveIndex === index
        const isLast = lastActiveIndex === index

        return (
          <Cell
            key={index}
            data-is-first={isFirst}
            data-is-last={isLast}
            data-is-disabled={isDisabled}
            height={cellHeight}
            width={cellWidth}
            isSelecting={isSelecting}
            // isDisabled={isDisabled}
            onMouseDown={(event) => onMouseDown(event, room, date, index)}
            onMouseOver={(event) => onMouseOver(event, room, date, index)}
            onMouseUp={() => onMouseUp()}>
            {reservedRoomData && (
              <ClientInfo
                onClick={() => onOpenBooking({
                  room,
                  enterDate,
                  leaveDate,
                  client,
                  bookingType,
                  paymentType
                }, reservedRoomData.id)}
                width={cellWidth * reservedDays}>
                {clientName} {surname} {fatherName}
              </ClientInfo>
            )}
          </Cell>
        )
      })}
    </Row>
  )
}

ScheduleRow.propTypes = {
  room: PropTypes.number.isRequired,
  row: PropTypes.object.isRequired,
  cell: PropTypes.object.isRequired,
  periodDays: PropTypes.array.isRequired,
  bookingList: PropTypes.array.isRequired,
  onOpenBooking: PropTypes.func.isRequired,
}

export default React.memo(ScheduleRow, (prev, next) => {
  const { onOpenBooking, ...restPrev } = prev
  const { onOpenBooking: onOpen, ...restNext } = next
  return equals(restNext, restPrev)
})
