const classmates = [

    {name: 'José', grade: 9.8, colleger: false},
    {name: 'Maria', grade: 4.2, colleger: false},
    {name: 'Artur', grade: 10, colleger: true},
    {name: 'Bia', grade: 7.8, colleger: true},

]

const areColleger = (res, colleger) => res && colleger;
console.log(classmates.map(a=>a.colleger).reduce(areColleger));

const onlyColleger = (res, colleger) => res || colleger;
console.log(classmates.map(a=>a.colleger).reduce(onlyColleger));