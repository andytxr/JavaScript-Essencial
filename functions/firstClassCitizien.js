function fun1(){}
const fun2 = function(){}
const array = [function (a,b) { return a+b }, fun1, fun2]

const obj = {}
obj.talk = function () { return 'Hi' }
console.log(obj.talk());
console.log(array[0](1,5));

function run(fun){

    fun()

}

run(function(){console.log('running')});

function sum(a,b){

    return function(c){

        console.log(a+b+c);

    }

}

sum(2,3)(7);
const plusFive = sum(2,3);
plusFive(4);