const http = require('http');

const getClass = letter => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;

    return new Promise((resolve, reject) => {

        http.get(url, res => {

            let result = '';
    
            res.on('data', data => {
    
                result += data;
    
            });
    
            res.on('end', () => {
    
                try{

                    resolve(JSON.parse(result));

                }catch(error){

                    reject(error);

                }
    
            });
    
        });

    });
          
}

/*let names = [];
getClass('A').then(classmates =>{

    names = names.concat(classmates.map(student => student.nome));

    getClass('B').then(classmates =>{

        names = names.concat(classmates.map(student => student.nome));

        getClass('C').then(classmates =>{

            names = names.concat(classmates.map(student => student.nome));

            console.log(names);

        });

    });

});*/

Promise.all([getClass('A'), getClass('B'), getClass('C')]).then(classes => [].concat(...classes)).then(classmates => classmates.map(classmate => classmate.nome)).then(names => console.log(names));
getClass('D').catch(e=>console.log(e));