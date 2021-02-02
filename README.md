# io-ts-numbers
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/io-ts-numbers)
[![Build status][]](https://travis-ci.org/EricCrosson/io-ts-numbers)
[![Code Coverage][]](https://codecov.io/gh/EricCrosson/io-ts-numbers)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/io-ts-numbers.svg
[Build status]: https://travis-ci.org/EricCrosson/io-ts-numbers.svg?branch=master
[Code Coverage]: https://codecov.io/gh/EricCrosson/io-ts-numbers/branch/master/graph/badge.svg

> io-ts library for numbers

## Install

``` shell
npm install io-ts-numbers
```

## Definitions

![numbers](https://github.com/ericcrosson/io-ts-numbers/blob/master/img/numbers.png)

> open circle = exclusive, closed circle = inclusive

This diagram denotes the sets of numbers included in some of the
codecs. Note that zero is neither positive nor negative.

Here we can see that the set of Positive numbers contains all reals
greater than zero. The set of NonPositive numbers contains the
remaining reals (including zero). The union of the set of Positive and
NonPositive numbers contains all real numbers.

This relationship is mirrored in the Negative and NonNegative sets,
and the Zero and NonZero sets.

The Natural numbers are defined by the [Peano
axioms](https://en.wikipedia.org/wiki/Peano_axioms#Formulation), so
the set of Natural numbers includes zero and every finite positive
integer.

## Related

- [io-ts-bigint](https://github.com/EricCrosson/io-ts-bigint)

## Acknowledgments

- [io-ts](https://github.com/gcanti/io-ts)
