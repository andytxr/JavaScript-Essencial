const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Sem callback

let gradesUnder7 = [];

for(let i in grades){

    if(grades[i]<7){

        gradesUnder7.push(grades[i]);

    }

}

console.log(gradesUnder7);

//Callback

let gradesUnder7b = grades.filter(function (grade){

    return grade<7;

});

console.log(gradesUnder7b);

let gradesUnder7c = grades.filter(grade => grade<7);

console.log(gradesUnder7c);