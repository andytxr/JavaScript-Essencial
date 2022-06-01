function talkAfterOf (secs, text){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(text);

        }, secs * 1000);


    })

}

talkAfterOf(3, 'Oie!').then(text => text.concat('!!')).then(otherText => console.log(otherText)).catch(error=>console.log(error));