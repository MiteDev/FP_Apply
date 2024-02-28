const fxjs = require('fxjs');
const _ = require('fxjs/Strict');
const L = require('fxjs/Lazy');
const C = require('fxjs/Concurrency');

function f1(limit, iter) {
    let acc = 0;
    for (const it of iter) {
        if (it % 2) {
            const a = it * it;
            acc += a;
            if (!--limit) break;
        }
    }
    console.log(acc)
}

_.go(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    _.filter(a => a % 2),
    _.map(a => a * a),
    _.take(3),
    _.reduce((a, b) => a + b),
    console.log
)

// console.log(a[1, 2, 3, 4, 5, 6, 7, 8, 9])

// f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9])