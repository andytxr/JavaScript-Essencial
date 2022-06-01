const producers = ['Mercedes', 'Ford', 'BMW'];

function print(name, i){

    console.log(`${i + 1}. ${name}`);

}   

producers.forEach(print);
producers.forEach(function(prod){

    console.log(prod);

});
producers.forEach(prod=>console.log(prod));