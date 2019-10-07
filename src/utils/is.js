export const isNumber = value => {
  const numValue = Number(value)
  return !isNaN(numValue)
}
