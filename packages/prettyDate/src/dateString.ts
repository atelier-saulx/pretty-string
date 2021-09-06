// import { getLanguage } from '@based/text'

export type DateFormat =
  | 'date'
  | 'date-time'
  | 'date-time-text'
  | 'date-time-human'
  | 'time'
  | 'time-precise'

const addZero = (d: number): string => {
  const s = d + ''
  if (s.length === 1) {
    return '0' + s
  }
  return s
}

export default (nr: number | string, format: DateFormat = 'date'): string => {
  if (typeof nr === 'number') {
    const d = new Date(nr)
    if (format === 'date') {
      return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    } else if (format === 'time') {
      return d.getHours() + ':' + addZero(d.getMinutes())
    } else if (format === 'time-precise') {
      return (
        d.getHours() +
        ':' +
        addZero(d.getMinutes()) +
        ':' +
        addZero(d.getSeconds())
      )
    } else if (format === 'date-time-text') {
      return `${d.toLocaleDateString('default', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}, ${d.toLocaleTimeString()}`
    } else if (format === 'date-time') {
      return (
        d.getHours() +
        ':' +
        addZero(d.getMinutes()) +
        ' ' +
        d.getDate() +
        '/' +
        (d.getMonth() + 1) +
        '/' +
        d.getFullYear()
      )
    } else if (format === 'date-time-human') {
      const now = new Date()

      //
      const timeTable = [
        ['getFullYear', 'year', 'years'],
        ['getMonth', 'month', 'months'],
        ['getDate', 'day', 'days'],
        ['getHours', 'hour', 'hours'],
        ['getMinutes', 'minute', 'minutes'],
        ['getSeconds', 'second', 'seconds'],
      ]

      if (now.getTime() > d.getTime()) {
        for (let i = 0; i < timeTable.length; i++) {
          const [m, single, plural] = timeTable[i]
          // const lang = getLanguage()
          const a = now[m]()
          const b = d[m]()
          if (a > b) {
            const diff = a - b
            return `${a - b} ${diff > 1 ? plural : single} ago`
          }
        }

        return 'Now'
      } else {
        for (let i = 0; i < timeTable.length; i++) {
          const [m, single, plural] = timeTable[i]
          // const lang = getLanguage()
          const a = d[m]()
          const b = now[m]()
          if (a > b) {
            const diff = a - b
            return `${a - b} ${diff > 1 ? plural : single} from now`
          }
        }
        // in the future
        return 'Now'
      }
    }
    return String(nr)
  } else {
    return nr
  }
}
