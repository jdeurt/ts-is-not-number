# ts-is-not-number [![NPM version](https://img.shields.io/npm/v/ts-is-not-number.svg?style=flat)](https://www.npmjs.com/package/ts-is-not-number) [![NPM monthly downloads](https://img.shields.io/npm/dm/ts-is-not-number.svg?style=flat)](https://npmjs.org/package/ts-is-not-number) [![NPM total downloads](https://img.shields.io/npm/dt/ts-is-not-number.svg?style=flat)](https://npmjs.org/package/ts-is-not-number)

> Returns true if the value is not a finite number.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save ts-is-not-number
```

## Usage

```js
const isNotNumber = require('is-not-number')
```

or

```js
import isNotNumber from 'is-not-number'
```

See the [tests](./test/index.test.ts) for more examples.

### True

```js
isNotNumber(Infinity) // true
isNotNumber(NaN) // true
isNotNumber(null) // true
isNotNumber(undefined) // true
isNotNumber('') // true
isNotNumber('   ') // true
isNotNumber('foo') // true
isNotNumber([1]) // true
isNotNumber([]) // true
isNotNumber(function () {}) // true
isNotNumber({}) // true
```

### False

Everything else is false, as you would expect:

```js
isNotNumber(5e3) // false
isNotNumber(0xff) // false
isNotNumber(-1.1) // false
isNotNumber(0) // false
isNotNumber(1) // false
isNotNumber(1.1) // false
isNotNumber(10) // false
isNotNumber(10.1) // false
isNotNumber(100) // false
isNotNumber('-1.1') // false
isNotNumber('0') // false
isNotNumber('012') // false
isNotNumber('0xff') // false
isNotNumber('1') // false
isNotNumber('1.1') // false
isNotNumber('10') // false
isNotNumber('10.10') // false
isNotNumber('100') // false
isNotNumber('5e3') // false
isNotNumber(parseInt('012')) // false
isNotNumber(parseFloat('012')) // false
```

### License

Copyright © 2022, [Juan de Urtubey](https://github.com/jdeurt).
Released under the [MIT License](LICENSE).
