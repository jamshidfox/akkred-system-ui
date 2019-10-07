import {
  defaultTo,
  find,
  last,
  map,
  pipe,
  split,
  startsWith,
  trim
} from 'ramda'

export const setCookie = (name, value, expire) => {
  const date = new Date()
  date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  if (typeof document !== 'undefined') {
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
  }
}

export const getCookie = key =>
  pipe(
    split(';'),
    map(trim),
    find(startsWith(key)),
    defaultTo(''),
    split('='),
    last
  )(document.cookie)
