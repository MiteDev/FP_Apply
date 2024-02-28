const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const users = [
    { id: 1, name: 'AA', age: 35 },
    { id: 2, name: 'BB', age: 27 },
    { id: 3, name: 'CC', age: 30 },
    { id: 4, name: 'DD', age: 12 },
    { id: 5, name: 'EE', age: 43 },
    { id: 6, name: 'BB', age: 11 }
];

const indexBy = (func, iter) => _.reduce((obj, a) => (obj[func(a)] = a, obj), {}, iter);

const user_obj = indexBy(u => u.id, users);

const users3 = _.go(
    user_obj,
    L.entries,
    L.filter(([_, v]) => v.age < 30),
    L.take(2),
    _.object
)

console.log(users3['2'])