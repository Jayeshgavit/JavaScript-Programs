
let data = 'This is information about';

class user{
  
    constructor(name, email){
        this.name = name;
        this.email = email;
    };

    viewData(){
        console.log(` Name is ${this.name} and Email is ${this.email}`);
        console.log('Data is:', data, ' : ', this.name );
    };

    printRoll(){
        console.log('Roll is :');
    }
}

let Jayesh = new user('Jayesh', 'gavitjayesh08@gmail.com');

Jayesh.viewData();


class admin extends user{
    constructor(name, email){
        super(name, email);
        this.role = 'Admin';
    }
    editData(){
        console.log('Name is : ',this.name, 'and Email is : ',this.email);
        console.log('Roll is :' , this.role);
        console.log('Editing data');
        data = 'This is updated information about';
        console.log('Data updated:', data);
    }
}

let Gavit = new admin('Gavit', 'gavit@gmail.com');
Gavit.editData();