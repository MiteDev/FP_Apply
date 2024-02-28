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
}

class Product extends Model {

}

class Products extends Collection {
    getPrice() {
        return L.map(p => p.get('price'), this);
    }
    totalPrice() {
        // return _.go(
        //     [...this],
        //     L.map(p => p.get('price')),
        //     _.reduce((a, b) => a + b)
        // )
        return _.reduce((a, b) => a + b, this.getPrice());
    }
}

const products = new Products();

products.add(new Product({ id: 1, price: 10000 }));
console.log(products.totalPrice());

products.add(new Product({ id: 2, price: 20000 }));
console.log(products.totalPrice());

products.add(new Product({ id: 3, price: 30000 }));
console.log(products.totalPrice());