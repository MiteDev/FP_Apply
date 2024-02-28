const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const users = [
    { name: 'AA', age: 35 },
    { name: 'BB', age: 27 },
    { name: 'CC', age: 30 },
    { name: 'DD', age: 12 },
    { name: 'EE', age: 43 },
]

console.log(
    _.reduce((acc, cur) => acc + cur,
        L.filter(age => age > 30,
            L.map(user => user.age, users)
        )
    )
)
