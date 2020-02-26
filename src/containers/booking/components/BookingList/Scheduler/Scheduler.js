import React, { useReducer } from 'react'
import { groupBy, pipe, prop, path, toPairs, head, has } from 'ramda'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Chev from '../../../../../icons/Chev'
import { addParamsRoute } from '../../../../../utils/route'
import { getParamFromHistory } from '../../../../../utils/get'
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

const ChevBtn = styled.span`
position: absolute;
 top: 3px;
  right: 10px; 
  cursor: pointer;
`

const reducer = (state, action) => ({ ...state, ...action })
const initialState = {}

const getToggleIsExpanded = (category, toggleState) => {
  return has(category, toggleState)
    ? prop(category, toggleState)
    : true
}

const Scheduler = props => {
  const { list, createModal, bookingData } = props
  const history = useHistory()
  const updateBookId = getParamFromHistory('bookId', history)
  const roomList = path(['results'], list)
  const bookingList = path(['results'], bookingData)
  const [toggleState, dispatch] = useReducer(reducer, initialState)

  const openBooking = createModal.open
  const onOpenBooking = () => createModal.onOpen()
  const onCloseBooking = () => createModal.onClose()

  const tableOptions = {
    cellWidth: 40,
    cellHeight: 28,
    toggleState
  }

  const roomListGrouped = pipe(
    groupBy(path(['roomCategory', 'id'])),
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
      <Form onSubmit={createModal.onSubmit}
        render={formProps => {
          const { form, values } = formProps
          const onChange = (values, bookId) => {
            console.warn(values)

            form.change('room', { id: values.room })
            form.change('enterDatetime', values.enterDate)
            form.change('leaveDatetime', values.leaveDate)
            form.change('paymentType.id', values.paymentType)
            form.change('bookingType.id', values.bookingType)
            form.change('client', values.client)
            form.change('citizenship', path(['client', 'citizenship'], values))
            if (bookId) {
              addParamsRoute({ bookId }, history)
            }
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
                      const categoryData = pipe(head, prop('roomCategory'))(roomsList)
                      const categoryName = prop('name', categoryData)
                      const isExpanded = getToggleIsExpanded(roomCategory, toggleState)

                      return (
                        <div key={roomCategory}>
                          <RoomCategory>
                            {categoryName}
                            <ChevBtn
                              onClick={onToggleState(roomCategory)}>
                              <Chev />
                            </ChevBtn>
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

              <form onSubmit={formProps.handleSubmit}>
                <BookingCreateDialog
                  open={openBooking}
                  onClose={onCloseBooking}
                />
              </form>
            </>
          )
        }}
      />

    </SchedulerContext.Provider>
  )
}

Scheduler.propTypes = {
  list: PropTypes.object,
  createModal: PropTypes.object,
  bookingData: PropTypes.object
}

export default Scheduler