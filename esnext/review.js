{

    var a = 2;
    let b = 3;

    console.log('Dentro do bloco: ', b);

}

console.log('Fora do bloco: ', a);
//console.log('Fora do bloco: ', b); - Erro de variável não definida.

const product = 'iPad';
console.log(`${product} é caro!`)

const [ l, e, ...tras] = 'Deco';
console.log(l, e, tras);

const [x, y] = [5, 8, 10];
console.log(x, y);

const { age, name } = { name: 'Deco', age: 18 };
console.log(name, age);