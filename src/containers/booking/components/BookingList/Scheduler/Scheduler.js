import React, { useState, useReducer } from 'react'
import { groupBy, pipe, prop, path, toPairs, head, has } from 'ramda'
import styled from 'styled-components'
import roomList from './roomList'
import bookingList from './bookingList'
import SchedulerContext from './SchedulerContext'
import SchedulerFilter from './SchedulerFilter'
import SchedulerRight from './SchedulerRight'
import BookingCreateDialog from './BookingCreateDialog'
import { Form } from '~/components/FormField'

const Container = styled('div')`
  background-color: white;
  border: 1px solid #E4E9F2;
  border-radius: 4px;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  overflow: hidden;
  margin-top: 24px;
  user-select: none;
`

const LeftSide = styled('div')`
  border-right: 1px solid #E4E9F2;
  min-width: 260px;
  width: 260px;
`

const RoomBlock = styled('div')`
  
`

const RoomCategory = styled('div')`
  background-color: #EDF1F7;
  padding: 6px 16px;
  position: relative;
`

const RoomList = styled('div')`
  
`

const Room = styled('div')`
  color: #8F9BB3;
  padding: 6px 16px 6px 24px;
  &:not(:last-child) {
    border-bottom: 1px solid #E4E9F2;
  }
`

const reducer = (state, action) => ({ ...state, ...action })
const initialState = {}

const getToggleIsExpanded = (category, toggleState) => {
  return has(category, toggleState)
    ? prop(category, toggleState)
    : true
}

const Scheduler = props => {
  const [openBooking, setOpenBooking] = useState(false)
  const [toggleState, dispatch] = useReducer(reducer, initialState)

  const onOpenBooking = () => setOpenBooking(true)
  const onCloseBooking = () => setOpenBooking(false)

  const tableOptions = {
    cellWidth: 40,
    cellHeight: 28,
    toggleState
  }

  const roomListGrouped = pipe(
    groupBy(path(['room_category', 'id'])),
    toPairs
  )(roomList)

  const onToggleState = (category) => () => {
    const isExpanded = getToggleIsExpanded(category, toggleState)
    dispatch({
      [category]: !isExpanded
    })
  }

  return (
    <SchedulerContext.Provider value={tableOptions}>
      <Form onSubmit={() => null}
        render={formProps => {
          const { form } = formProps
          const onChange = (values) => {
            form.change('room', { id: values.room })
            form.change('enterDatetime', values.enterDate)
            form.change('leaveDatetime', values.leaveDate)
            onOpenBooking()
          }
          return (
            <>
              <Container>
                <LeftSide>
                  <SchedulerFilter />
                  <RoomBlock>
                    {roomListGrouped.map(item => {
                      const [roomCategory, roomsList] = item
                      const categoryData = pipe(head, prop('room_category'))(roomsList)
                      const categoryName = prop('name', categoryData)
                      const isExpanded = getToggleIsExpanded(roomCategory, toggleState)

                      return (
                        <div key={roomCategory}>
                          <RoomCategory>
                            {categoryName}
                            <button
                              style={{ position: 'absolute', top: '3px', right: '10px' }}
                              onClick={onToggleState(roomCategory)}>
                              {isExpanded ? 'hide' : 'show'}
                            </button>
                          </RoomCategory>
                          {isExpanded && (
                            <RoomList>
                              {roomsList.map(room => {
                                const roomId = prop('id', room)
                                return (
                                  <Room key={roomId}>{`№${roomId}`}</Room>
                                )
                              })}
                            </RoomList>
                          )}
                        </div>
                      )
                    })}
                  </RoomBlock>
                </LeftSide>

                <SchedulerRight
                  roomData={roomListGrouped}
                  bookingList={bookingList}
                  onOpenBooking={onChange}
                  getToggleIsExpanded={getToggleIsExpanded}
                />
              </Container>

              <BookingCreateDialog
                open={openBooking}
                onClose={onCloseBooking}
              />
            </>
          )
        }}
      />

    </SchedulerContext.Provider>
  )
}

Scheduler.propTypes = {}

export default Scheduler
