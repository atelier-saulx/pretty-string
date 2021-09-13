# Pretty date

> Small package to nicely format a numerical date to a human readable date.

This package transform a numerical date into a human-readable format. There are several formats available.

## Install
```sh
$ npm i @based/pretty-date
```

## Usage 

```js
import { prettyDate } from '@based/pretty-date'

const time = Date.now() - 1e5 // a few minutes ago, as an epoch number

console.log(prettyDate(time,'date-time-human')) // => prints '17 minutes ago'
console.log(prettyDate(time,'date-time-text')) // => prints 'September 13, 2021, 9:37:44 AM'
console.log(prettyDate(time,'date-time')) // => prints '9:37 13/9/2021'
console.log(prettyDate(time,'date')) // => prints '13/9/2021'
console.log(prettyDate(time,'time')) // => prints '9:37'
console.log(prettyDate(time,'time-precise')) // => prints '9:37:44'
```


