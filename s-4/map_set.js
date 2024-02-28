const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set('c', 3);

_.go(
    m,
    L.filter(([k, v]) => v % 2),
    entries => new Map(entries),
    console.log
)

const s = new Set();
s.add(100);
s.add(200);
s.add(300);

console.log(_.reduce((a, b) => a + b, s))