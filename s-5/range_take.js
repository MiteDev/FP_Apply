const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

_.go(
    _.range(10), // <= 0부터 9까지의 배열
    L.map(_.delay(1000)),
    _.take(3), // <= 앞에서부터 3개만 자르기
    _.each(console.log)
)

_.go(
    L.range(10), // <= 0부터 9까지의 이터러블, 최대 10번 일어날 일
    L.map(_.delay(1000)),
    L.map(new Date),
    L.take(3), // <= 최대 3개의 값을 필요하고, 최대 3번의 일을 수행함
    _.each(console.log)
)