const assert = require('assert').strict;
const { createPropertyByOtherOne, compose, map } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en "createPropertyByOtherOne function: "');
var persons = [
    {id: 1, name: 'wen'},
    {id: 5, name: 'JJ'},
    {id: 6, name: 'nene'},
];
const newPersons = map(
	compose(createPropertyByOtherOne('code', 'id')),
	persons,
)
var expected = [
    {id: 1, name: 'wen', code: 1},
    {id: 5, name: 'JJ', code: 5},
    {id: 6, name: 'nene', code: 6},
];
assert.deepEqual(
	newPersons,
	expected,
	'Los arreglos no son iguales',
);
console.log('==> createPropertyByOtherOne function Ok!');
