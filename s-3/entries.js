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
    entries: function* (obj) {
        for (const k in obj) {
            yield [k, obj[k]]
        }
    }
}

_.go(
    obj1,
    _L.entries,
    L.filter(([_, v]) => v % 2),
    L.map(([k, v]) => ({ [k]: v })),
    _.reduce(Object.assign),
    // _.take(2),
    console.log
)