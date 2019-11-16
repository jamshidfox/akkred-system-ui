import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getDuration } from '../../../utils/get'

const ONE = 1
const EVERY_SEC = 1000

const Timer = props => {
  const { time } = props

  const [count, setCount] = useState(time)
  useEffect(() => {
    let interval = null
    if (count) {
      interval = setInterval(() => {
        setCount(seconds => seconds - ONE)
      }, EVERY_SEC)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [count])

  return (
    <div>Timer: {getDuration(count)}</div>
  )
}

Timer.propTypes = {
  time: PropTypes.number
}
export default Timer
