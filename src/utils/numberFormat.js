import toNumber from './toNumber'

export default (value, suffix) => {
  const formatter = new Intl.NumberFormat('ru-RU')
  const numberValue = toNumber(value)
  const roundedValue = Math.round(numberValue * 100) / 100
  if (value && suffix) return `${formatter.format(roundedValue)} ${suffix}`
  else if (value) return formatter.format(roundedValue)
  return 0
}
