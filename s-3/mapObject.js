const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const m = new Map();
m.set('a', 10);
m.set('b', 20);
m.set('c', 30);

const mapObject = (func, obj) => _.go(
    obj,
    L.entries,
    L.map(([k, v]) => [k, func(v)]),
    _.object
);
const a = mapObject(a => a + 10, { a: 1, b: 2, c: 3 });
console.log(a)