import { includes, isEmpty, length } from 'ramda'

export default (requiredPerms, userPerms = []) => {
  const perms = []
  for (const item of requiredPerms) {
    if (includes(item, userPerms)) perms.push(item)
  }
  return length(perms) === length(requiredPerms) && !isEmpty(perms)
}
