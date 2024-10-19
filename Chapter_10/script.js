

setTimeout(()=>{
    console.log('I will run after 5 seconds');
},5000);


console.log('This will run immediately');

//new example

function Sum(a,b){
    console.log(`sum of ${a} + ${b} is : ${a+b}`);
}

function calculator(a,b,callBack){
    callBack(a,b);
}

calculator(5,10,Sum);

