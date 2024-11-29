// Use the keyword class to create a class.
// Always add a method named constructor()



class car {
    constructor(name,year) {
        this.name=name;
        this.year=year;   
    }
}

// A JavaScript class is not an object.
// It is a template for JavaScript objects.


class Vehicle {
    constructor(name,year) {
        this.name=name;
        this.year=year;   
    }
    age(){
        const date=new Date();
        return date.getFullYear() -this.year
    }
}

const mycar= new Vehicle("Ford",2000);
console.log(mycar.age());





