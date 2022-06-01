const classmates = [

    {name: 'José', grade: 9.8, colleger: false},
    {name: 'Maria', grade: 4.2, colleger: false},
    {name: 'Artur', grade: 10, colleger: true},
    {name: 'Bia', grade: 7.8, colleger: true},

]

const res = classmates.map(a=>a.grade).reduce(function(acc, actual){

    console.log(acc, actual);
    return acc + actual

}, 2);

console.log(res);