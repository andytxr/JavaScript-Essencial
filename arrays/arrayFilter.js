const products = [

    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'Cup', price: 12.49, fragile: true},
    {name: 'Plastic Cup', price: 5, fragile: false},

]

console.log(products.filter(function(p){

    return false

}))

const bigValue = product => product.price >= 500;
const fragile = product => product.fragile;

console.log(products.filter(bigValue).filter(fragile));

