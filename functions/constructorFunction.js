function Car(maxVel = 200, delta = 5){

    let actualVel = 0;

    this.accelerate = function(){

        if(actualVel + delta <= maxVel){

            actualVel += delta;

        }else{
                
            actualVel = maxVel;
    
        }

    }

    this.getActualVel = function(){

        return actualVel;

    }

}

const uno = new Car;
uno.accelerate();
console.log(uno.getActualVel());

const ferrari = new Car(350, 10);
ferrari.accelerate();
console.log(ferrari.getActualVel());

console.log(typeof Car);
console.log(typeof uno);
console.log(typeof ferrari);