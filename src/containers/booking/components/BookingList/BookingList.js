import React from 'react'
import PropTypes from 'prop-types'
import Scheduler from './Scheduler'
import { LinkButton, PageTitle } from '~/components/UI'
import { Box, DisplayFlex } from '~/components/StyledElems'

const BookingList = props => {
  const { list, createModal, bookingList } = props
  return (
    <>
      <Box padding={'25px'}>
        <PageTitle name={'Шахматка'}>
          <DisplayFlex align={'center'}>
            <LinkButton>Создать бронь</LinkButton>
          </DisplayFlex>
        </PageTitle>
      </Box>

      <Scheduler
        list={list}
        bookingData={bookingList}
        createModal={createModal} />
    </>
  )
}

BookingList.propTypes = {
  list: PropTypes.object,
  createModal: PropTypes.object,
  bookingList: PropTypes.object
}

export default BookingList