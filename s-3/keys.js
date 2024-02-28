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
    keys: function* (obj) {
        for (const k in obj)
            yield k;
    }
}

_.go(
    obj1,
    _L.keys,
    _.each(console.log)
)