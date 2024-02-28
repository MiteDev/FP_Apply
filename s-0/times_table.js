const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const join = sep => _.reduce((a, b) => `${a}${sep}${b}`);

_.go(
    _.range(2, 10),
    _.map(a => _.go(
        _.range(1, 10),
        _.map(b => `${a}X${b}=${a * b}`),
        join('\n')
    )),
    join('\n\n'),
    console.log
)