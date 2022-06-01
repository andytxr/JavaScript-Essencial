const http = require('http');

const getClass = (letter, callback) => {

    http.get(`http://files.cod3r.com.br/curso-js/turma${letter}.json`, res => {

        let result = '';

        res.on('data', data => {

            result += data;

        });

        res.on('end', () => {

            callback(JSON.parse(result));

        });

    });

}

let names = [];
getClass('A', classmates =>{

    names = names.concat(classmates.map(student => student.nome));

    getClass('B', classmates =>{

        names = names.concat(classmates.map(student => student.nome));

        getClass('C', classmates =>{

            names = names.concat(classmates.map(student => student.nome));

            console.log(names);

        });

    });

});