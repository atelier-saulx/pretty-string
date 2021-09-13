# Pretty number

> Small package to nicely format a to a specific format, using a human-readable style.

This package transform a numerical value to a specific format, including converting bytes to to kilobytes, and so on. 

## Install
```sh
$ npm i @based/pretty-number
```

## Usage 

```js
import { prettyNumber } from '@based/pretty-number'

let number = 500000 

console.log(prettyNumber(number,'number-short')) // => prints '50k'
console.log(prettyNumber(number,'number-human')) // => prints '500000.00'
console.log(prettyNumber(number,'number-bytes')) // => prints '48.83 kb'
console.log(prettyNumber(number,'number-euro')) // => prints '€50k'
console.log(prettyNumber(number,'number-dollar')) // => prints '$50k'
console.log(prettyNumber(number,'number-pound')) // => prints '£50k'

number = 0.05

console.log(prettyNumber(number,'number-ratio')) // => prints '5%'
```


## Formats

The available formats are listed below:

##### `number-short`
This will change the thousands to '___k___', and the millions to '___m___', adding a decimal point afterwards. 

##### `number-human`
This will add a decimal point.  

##### `number-bytes`
This will convert the input from bytes to their binary multiples, where __1 kb = 1024 bytes, 1 mb = 1048576 bytes__, and so on.

##### `number-euro`
Will do the same as `number-short`, but prefixes a __'€'__ sign.

##### `number-dollar`
Will do the same as `number-short`, but prefixes a __'$'__ sign.

##### `number-pound`
Will do the same as `number-short`, but prefixes a __'£'__ sign.

##### `number-ratio`
Will show a percentage. ___Note that 1 equals 100%___.
