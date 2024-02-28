const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

// 만능 reduce 그만하기

const users = [
    { name: 'AA', age: 35 },
    { name: 'BB', age: 27 },
    { name: 'CC', age: 30 },
    { name: 'DD', age: 12 },
    { name: 'EE', age: 43 },
]

console.log(
    _.reduce((acc, cur) => {
        return acc += cur.age
    }, 0, users)
) // => 이거보다 아래가 더 좋음

console.log(
    _.reduce((acc, cur) => acc + cur, _.map(users => users.age, users))
)

