const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const _L = {
    values: function* (obj) {
        for (const k in obj) {
            yield obj[k];
        }
    }
}

_.go(
    obj1,
    Object.values,
    _.map(a => a + 10),
    _.reduce((a, b) => a + b),
    console.log
)

_.go(
    obj1,
    _L.values,
    L.map(a => a + 10),
    L.take(2),
    _.reduce((a, b) => a + b),
    console.log
)