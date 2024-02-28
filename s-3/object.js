const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

// const object = entries => _.go(
//     entries,
//     L.map(([k, v]) => ({ [k]: v })),
//     _.reduce(Object.assign)
// )



const object = entries => _.reduce((obj, [k, v]) => (obj[k] = v, obj), {}, entries);

const a = [['a', 1], ['b', 2], ['c', 3]]
console.log(object(a));
console.log(object(L.entries({ b: 2, c: 3 })));

let m = new Map();
m.set('a', 10);
m.set('b', 20);
m.set('c', 30);

console.log(object(m));