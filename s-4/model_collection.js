const L = require('fxjs/Lazy');
const _ = require('fxjs/Strict');
const C = require('fxjs/Concurrency');
const fxjs = require('fxjs');

class Model {
    constructor(attrs = []) {
        this._attrs = attrs;
    }

    get(k) {
        return this._attrs[k];
    }

    set(k, v) {
        this._attrs[k] = v;
        return this;
    }
}

class Collection {
    constructor(models = []) {
        this._models = models;
    }
    at(idx) {
        return this._models[idx];
    }
    add(model) {
        this._models.push(model);
    }
    *[Symbol.iterator]() {
        yield* this._models
    }
    // or
    // [Symbol.iterator]() {
    //     return this._models[Symbol.iterator]();
    // }
}

const coll = new Collection();
coll.add(new Model({ id: 1, name: 'AA' }));
coll.add(new Model({ id: 2, name: 'BB' }));
coll.add(new Model({ id: 3, name: 'CC' }));

console.log(coll.at(0).get('name'));
console.log([...coll])

_.go(
    coll,
    L.map(m => m.get('name')),
    _.each(console.log)
)