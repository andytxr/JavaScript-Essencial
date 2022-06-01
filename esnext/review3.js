const obj = {a: 1, b: 2, c: 3, d: 4};
console.log(Object.values(obj));
console.log(Object.entries(obj));

const name = 'Bia';
const people = {

    name,
    hello(){

        return "Hi"

    }

}

console.log(people.name, people.hello());

class Animal {}
class Dog extends Animal{

    talk(){

        return 'Woof!'

    }

}

console.log(new Dog().talk());