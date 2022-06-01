const sum = function(x, y){

    return x+y

}

const results = function(a, b, op = sum){

    console.log(op(a, b));

}

results(3, 4);
results(3, 4, sum);
results(3, 4, function(x,y){

    return x-y

})
results(3, 4, (x, y)=>x*y);
const people = {

    talk: function (){

        console.log('Oi');

    }

}

people.talk();