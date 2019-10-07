import moment from 'moment'

export default (date, time = false) => {
  if (!date) return null

  if (time) {
    return moment(date).format('DD MMM YYYY, HH:mm')
  }
  return moment(date).format('DD MMM YYYY')
}

export const dateTimeFormat = (date) => {
  if (!date) return null

  return moment(date).format('DD MMM YYYY HH:mm:ss')
}

export const customDateFormat = (date, dateFormat) => {
  if (!date) return null
  return moment(date).format(dateFormat)
}
