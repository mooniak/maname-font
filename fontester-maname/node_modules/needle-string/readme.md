# needle-string

> Finds occurrences of a string in a string: *a needle in a haystack*

[![Build Status](https://travis-ci.org/radiovisual/needle-string.svg?branch=master)](https://travis-ci.org/radiovisual/needle-string)

## Install

```
$ npm install --save needle-string
```


## Usage

```js
const needles = require('needle-string');

needles('magical unicorns are magic', 'magic');
//=> 2
```


## API

### needleString(haystack, needle)

Returns the number of strings ('needles') in a 'haystack' of text.

#### haystack

Type: `string`  

The string you want to search for needle strings.

#### needle

Type: `string`

The string you want to search.

## Credit

This module contains code inspired by [this post](http://stackoverflow.com/a/7924240/3960969) on Stack Overflow. I wanted a highly-performant string lookup, so after I saw [these benchmarks](http://jsperf.com/count-string-occurrence-in-string/25), I turned it into a node module.  

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
