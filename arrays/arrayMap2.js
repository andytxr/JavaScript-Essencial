const cart = [

    '{"name":"Pen","price": 5}',
    '{"name":"Book","price": 20}',
    '{"name":"Pencil","price": 2}',
    '{"name":"Rubber","price": 2}',

]

const toObject = json => json.parse(json);
const onlyPrice = product => product.price;

const res = cart.map(toObject).map(onlyPrice);
console.log(res);