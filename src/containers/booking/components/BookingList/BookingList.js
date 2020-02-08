import React from 'react'
import PropTypes from 'prop-types'
import Scheduler from './Scheduler'
import { LinkButton, PageTitle } from '~/components/UI'
import { Box, DisplayFlex } from '~/components/StyledElems'

const BookingList = props => {
  return (
    <>
      <Box padding={'25px'}>
        <PageTitle name={'Шахматка'}>
          <DisplayFlex align={'center'}>
            <LinkButton>Создать бронь</LinkButton>
          </DisplayFlex>
        </PageTitle>
      </Box>

      <Scheduler />
    </>
  )
}

BookingList.propTypes = {}

export default BookingList
