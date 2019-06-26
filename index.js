var _ = require('lodash');

console.log(_.chunk(['a', 'b', 'c', 'd', 'e'], 2)); //[ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e' ] ]

console.log(_.compact(['a', false, 0, null, NaN, undefined, '', 'b'])); //[ 'a', 'b' ]

console.log(_.concat(_.compact(['a', 'b']), ['c', 'd'])); //[ 'a', 'b', 'c', 'd' ]

console.log(_.difference([1, 2, 3], [2, 3, 4, 5])) //[ 1 ]

// this returns [ { a: 'a' } ] because it uses SameValueZero for equality comparisons.
// @see http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
console.log(_.difference([{ a: 'a' }], [{ a: 'a' }, { b: 'b' }]));

// we can use the differenceWith method to pass a custom comparator function as the third argument
// _isEqual performs a deep comparison
// this returns []
console.log(_.differenceWith([{ a: 'a' }], [{ a: 'a' }, { b: 'b' }], _.isEqual));

console.log(_.drop([1, 2, 3, 4, 5], 3)); //[ 4, 5 ]

console.log(_.dropRight([1, 2, 3, 4, 5], 3)); // [ 1, 2 ]

const developers = [
  { name: 'Zafer', isCafinated: true },
  { name: 'John', isCafinated: false },
  { name: 'Bob', isCafinated: false, busy: true }
];

// passing a predicate function
console.log(_.dropRightWhile([1, 2, 3, 4, 5, 6, 7], (number) => number > 3)); //[ 1, 2, 3 ]

console.log(_.dropRightWhile(developers, (developer) => !developer.isCafinated)); //[ { name: 'Zafer', isCafinated: true } ]

// _matchesProperty iteratee shorthand
console.log(_.dropRightWhile(developers, ['isCafinated', false])); //[ { name: 'Zafer', isCafinated: true } ]

// _.property iteratee shorthand
console.log(_.dropRightWhile(developers, 'busy'));

console.log(_.fill(['a', 'b', 'c', 'd'], 'myValue', 0, 3)); //[ 'myValue', 'myValue', 'myValue', 'd' ]

console.log(_.fill(new Array(5), 'hi', 0, 3)) //[ 'hi', 'hi', 'hi', <2 empty items> ]

console.log(_.findIndex([1, 2, 3, 4, 5], (n) => n === 3)); // 2

console.log(_.flattenDeep([1, [2, 3, [4, 5]]])); //[ 1, 2, 3, 4, 5 ]

console.log(_.fromPairs([['a', 1], ['b', 2]])); //{ a: 1, b: 2 }

console.log(_.head([{ a: 'a' }, { b: 'b' }])); //{ a: 'a' }

console.log(_.initial([1, 2, 3, 4, 5])); //[ 1, 2, 3, 4 ]

console.log(_.intersection([2, 1], [2, 3])); // [ 2 ]

// console.log(_.intersectionBy([],[]));

console.log(_.last([1, 2, 3])); // 3

console.log(_.join(['hello', 'world'], '-')); // hello-world

console.log(_.nth(['a', 'b', 'c'], 2)); // c

console.log(_.pullAll(['a', 'a', 'a', 'b', 'b', 'b', 'c'], ['a', 'b'])); // [ 'c' ]

console.log(_.remove([1, 2, 3, 4, 5, 6], (n) => n > 2)); //[ 3, 4, 5, 6 ]

console.log(_.reverse(['a', 'b', 'c', 'd'])) // [ 'd', 'c', 'b', 'a' ]

console.log(_.slice([1, 2, 3, 4, 5], 2, 4)) // [ 3, 4 ]

console.log(_.sortedUniq([1, 1, 1, 2, 2])) // [ 1, 2 ]

console.log(_.tail([1, 2, 3, 4])); // [ 2, 3, 4 ]

console.log(_.take([1, 2, 3, 4, 5], 2)); // [ 1, 2]

console.log(_.takeRight([1, 2, 3, 4, 5], 2)); // [ 4, 5 ]

console.log(_.xor([1, 2, 3], [1, 2, 4])); // [ 3, 4 ]

console.log(_.zipObject(['key1', 'key2'], ['value1', 'value2'])); // { key1: 'value1', key2: 'value2' }
