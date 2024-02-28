const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const join = sep => _.reduce((a, b) => `${a}${sep}${b}`);

_.go(
    _.range(1, 6),
    _.map(_.range),
    _.map(_.map(_ => '*')),
    _.map(join('')),
    join('\n'),
    console.log
)

_.go(
    _.range(1, 6),
    _.map(s => _.go(
        _.range(s),
        _.map(_ => '*'),
        _.reduce((a, b) => `${a}${b}`)
    )),
    _.reduce((a, b) => `${a}\n${b}`),
    console.log
)