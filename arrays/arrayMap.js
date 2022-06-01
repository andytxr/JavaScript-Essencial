const n = [1, 2, 3, 4, 5];

let res = n.map(function(e){

    return e*2;

});

console.log(res);

const sum10 = e => e + 10;
const triple = e => e*3;
const toMoney = e =>  `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

res = n.map(sum10).map(triple).map(toMoney);
console.log(res);
