const student = {
    name : 'Jayesh Gavit',
    marks: 85,
    printMarks : function(){
        console.log(`Name: ${this.name}, Marks: ${this.marks}`);
    }
};

console.log(student.printMarks());


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