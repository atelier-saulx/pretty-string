// import { getLanguage } from '@based/text'

export type NumberFormat =
  | 'number-short'
  | 'number-human'
  | 'number-ratio'
  | 'number-bytes'
  | 'number-euro'
  | 'number-dollar'
  | 'number-pound'

const parseNumber = (nr: number | string, format: NumberFormat): string => {
  // if number === number-bytes
  // if number === number-percentage

  if (typeof nr === 'number') {
    if (
      format === 'number-euro' ||
      format === 'number-dollar' ||
      format === 'number-pound'
    ) {
      const p = parseNumber(nr, 'number-short')
      // const thousandSeperator = format === 'number-euro' ? '.' : ','
      const fraction = format === 'number-euro' ? ',' : '.'

      const [s, f] = p.split('.')

      // add short and long

      return `${
        format === 'number-euro'
          ? '€'
          : format === 'number-pound'
          ? '£'
          : format === 'number-dollar'
          ? '$'
          : ''
      }${s}${f ? `${fraction}${f}` : ''}`
    } else if (format === 'number-bytes') {
      const kb = nr / 1024
      const mb = kb / 1024
      const gb = mb / 1024

      if (gb > 1) {
        return `${gb.toFixed(2)} gb`
      } else if (mb > 1) {
        return `${mb.toFixed(2)} mb`
      } else if (kb > 1) {
        return `${kb.toFixed(2)} kb`
      } else {
        return `${nr} ${nr === 1 ? 'byte' : 'bytes'}`
      }
    } else if (format === 'number-ratio') {
      return `${Math.round(nr * 10000) / 100}%`
    } else if (format === 'number-short') {
      if (nr >= 1e6) {
        nr = nr / 1e6
        nr = nr.toFixed(1)
        if (nr[nr.length - 1] === '0') {
          nr = nr.slice(0, -2)
        }
        return nr + 'm'
      } else if (nr >= 1e3) {
        nr = nr / 1e3
        nr = nr.toFixed(1)
        if (nr[nr.length - 1] === '0') {
          nr = nr.slice(0, -2)
        }
        return nr + 'k'
      }
      nr = nr.toFixed(2)
      if (nr[nr.length - 1] === '0') {
        nr = nr.slice(0, -3)
      }
      return String(nr)
    } else if (format === 'number-human') {
      return nr.toFixed(2)
    }
    return String(nr)
  } else {
    return nr
  }
}

export default parseNumber
