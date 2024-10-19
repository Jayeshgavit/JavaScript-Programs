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

    constructor(brand, mileage){
        this.brand = brand;
        this.mileage = mileage;
    };

    start(){
        console.log(` Tesls Model ${this.brand} car started`);
    };
    info(){
        console.log(` Tesls Model ${this.brand} mileage is ${this.mileage}`)};
};

let ModelS = new Tesla('ModelS',12);
ModelS.info();


//inheritance
/* class person{
    constructor(name, age, address, salary){
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }

    desc(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Salary: ${this.salary}`);
    }
}

class engineer extends person{
    
}

let john = new engineer('John Doe', 30, '123 Main St', 50000);

john.desc();
*/

//super keyword and constructor
class person {
    constructor(name){
        this.spacies = 'homo sepiens';
        this.name = name;
    };

    eat(){
        console.log('eating');
    }
    sleep(){
        console.log("sleep");
    }

    work(){
        console.log("nothing to do..!");
    }
}

class engineer extends person{
    
    constructor(branch,name){
        super(name); // invoke the parent constructor
        this.branch = branch
    }
    work(){
        super.eat(); // invoke the parent method 
        console.log("build something...");
    }

    printinfo(){
        console.log(`Speciase name is :  ${this.spacies} and name is : ${this.name}` )
    }
}

// class doctor extends person{

//     work(){
//         console.log("dignosys..!");
//     }

// }


let john = new engineer('chemical', 'John');
john.eat();
john.work();
john.printinfo();


let Jayesh = new engineer('chemical', 'Jayesh');
Jayesh.eat();
Jayesh.work();
Jayesh.printinfo();