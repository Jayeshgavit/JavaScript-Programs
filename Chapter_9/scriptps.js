
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
}

let Jayesh = new user('Jayesh', 'gavitjayesh08@gmail.com');

Jayesh.viewData();