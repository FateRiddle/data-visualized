// import moment from 'moment'

export const formatLeim = (leim = ['', '', '']) => {
  return leim[2] ? leim[2] : leim[1] ? leim[1] : leim[0]
}

export const formatDate = date => {
  return date ? date.format('YYYY-MM-DD') : ''
}
