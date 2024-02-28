const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');


const obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };

const pickObj = (keys, obj) => _.go(
    obj,
    L.entries,
    L.filter(([k, _]) => keys.includes(k)),
    _.object
);

// const pickKeys = (keys, obj) => _.object(_.map(k => [k, obj[k]], keys))

const pickKeys = (keys, obj) => _.go(
    keys,
    L.map(k => [k, obj[k]]),
    _.reject(([_, v]) => !v),
    _.object,
)

const a = pickKeys(['b', 'c', 'z'], obj2);

console.log(a)

// const a = pick(['b', 'c'], obj2);
// console.log(a)
// {b: 2, c: 3}