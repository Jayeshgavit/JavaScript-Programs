//Objects
const student = {
    name : 'Jayesh Gavit',
    marks: 85,
    printMarks : function(){
        console.log(`Name: ${this.name}, Marks: ${this.marks}`);
    }
};

console.log(student.printMarks());

//prototype.
const jayesh = {
    salary : 50000,
};

const emp = {
    calTax(){
        console.log("tax rate of 10% is :", jayesh.salary * 0.10)
    },
}

jayesh.__proto__ = emp;
console.log(jayesh.calTax());

//Classes

class ToyotaVehi {

    constructor(brand){
        this.brand = brand;
    };
    start(){
        console.log("Car started");
    };

    stop(){
        console.log("Car stopped");
    };
    setBrand(brand){
        this.brand = brand;
    }
}

//instance / objects
let Fortuner = new ToyotaVehi();
Fortuner.setBrand('Fortuner');
Fortuner.start();
Fortuner.stop();

let Hilux = new ToyotaVehi();
Hilux.setBrand('Hilux');
Hilux.start();
Hilux.stop();


class Tesla {

    constructor(brand){
        this.brand = brand;
    };

    start(){
        console.log(` Tesls Model ${this.brand} car started`);
    };
};

let ModelS = new Tesla('ModeS');
ModelS.start();