const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const f = x => x + 10;
const g = x => x - 10;

const fg = x => f(g(x));

_.go(
    10,
    fg,
    console.log
) // => 초기 인자가 빠지면 NaN return


// map을 이용한 안전한 함수 합성 (모나드)
_.go(
    [],
    L.map(fg),
    _.each(console.log)
)

_.go(
    [10],
    L.map(fg),
    _.each(console.log)
)