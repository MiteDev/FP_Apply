const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

const obj1 = {
    a: 1,
    b: undefined,
    c: 'CC',
    d: 'DD'
}

function query1(obj) {
    let res = '';
    for (const k in obj) {
        const v = obj[k];
        if (!v) continue;
        if (res.length) res += '&';
        res += k + '=' + v;
    }
    return res;
}

function query2(obj) {
    return Object.entries(obj).reduce((acc, [k, v], i) => {
        if (!v) return acc;
        // return acc + (i > 0 ? '&' : '') + k + '=' + v;
        return `${acc}${i > 0 ? '&' : ''}${k}=${v}`;
    }, '')
}

const join = _.curry((sep, iter) => _.reduce((a, b) => `${a}${sep}${b}`, iter));

function query3(obj) {
    return join('&',
        _.map(([k, v]) => `${k}=${v}`,
            _.reject(([_, v]) => !v,
                Object.entries(obj)
            )
        )
    )
}

const query4 = _.pipe(
    Object.entries,
    L.reject(([_, v]) => !v),
    L.map(join('=')),
    join('&')
)


console.log(query1(obj1))
console.log(query2(obj1))
console.log(query3(obj1))
console.log(query4(obj1))