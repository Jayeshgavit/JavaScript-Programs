
let data = 'This is information';

class user{
  
    constructor(name, email){
        this.name = name;
        this.email = email;
    };

    viewData(){
        console.log('Data is:', data);
    };
}

let Jayesh = new user('Jayesh', 'gavitjayesh08@gmail.com');

jayesh.viewData();