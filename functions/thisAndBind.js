const people = {

    greeting: 'Bom dia',
    talk(){

        console.log(`${this.greeting}!`);
    
    }

}

people.talk();
const talk = people.talk;
talk();

const peopleTalk = people.talk.bind(people);
peopleTalk();