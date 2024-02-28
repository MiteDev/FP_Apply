const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');

function f(end) {
    let i = 0;
    while (i < end) {
        console.log(i)
        i++;
    }
}

_.go(
    L.range(1, 10, 2),
    _.each(console.log)
)
