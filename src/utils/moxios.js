const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default values => {
  return sleep(1000).then(() => {
    return values
  })
}
