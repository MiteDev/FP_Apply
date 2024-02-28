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
    { name: 'BB', age: 11 }
]

// try {
//     const find = _.find(u => u.name === 'ASd', users);
//     console.log(find.age);
// } catch (e) {

// }


// _.each(console.log, L.take(Infinity, L.filter(u => u.name === 'ASd', users)));

_.go(
    users,
    L.filter(u => {
        console.log(u)
        return u.name === 'BB'
    }),
    L.take(2),
    L.map(u => u.age),
    _.each(console.log)
)

