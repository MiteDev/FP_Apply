const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const obj1 = {
    a: 1,
    b: undefined,
    c: 'CC',
    d: 'DD'
}

const join = _.curry((sep, iter) => _.reduce((a, b) => `${a}${sep}${b}`, iter));

const query = _.pipe(
    Object.entries,
    L.reject(([_, v]) => !v),
    L.map(join('=')),
    join('&')
)

const split = _.curry((sep, iter) => iter.split(sep));

const query_to_obj = _.pipe(
    split('&'),
    L.map(split('=')),
    L.map(([k, v]) => ({ [k]: v })),
    _.reduce(Object.assign)
)

console.log(query_to_obj(query(obj1)));