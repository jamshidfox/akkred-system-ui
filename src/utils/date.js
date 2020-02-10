import moment from 'moment'

export const eachDayOfInterval = (startDate, endDate) => {
  const dates = [moment(startDate).toDate()]

  while (startDate.add(1, 'days').diff(endDate) <= 0) {
    dates.push(startDate.clone().toDate())
  }

  return dates
}
