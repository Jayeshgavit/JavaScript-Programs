const student = {
    name : 'Jayesh Gavit',
    marks: 85,
    printMarks : function(){
        console.log(`Name: ${this.name}, Marks: ${this.marks}`);
    }
};

console.log(student.printMarks());