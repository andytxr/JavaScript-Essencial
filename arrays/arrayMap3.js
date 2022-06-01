Array.prototype.map2 = function(callback){

    const newArray = [];

    for(let i=0; i<this.length; i++){

        newArray.push(callback(this[i], i, this));

    }

    return newArray;


}

const cart = [

    '{"name":"Pen","price": 5}',
    '{"name":"Book","price": 20}',
    '{"name":"Pencil","price": 2}',
    '{"name":"Rubber","price": 2}',

]

const toObject = json => JSON.parse(json);
const onlyPrice = product => product.price;

const res = cart.map2(toObject).map2(onlyPrice);
console.log(res);