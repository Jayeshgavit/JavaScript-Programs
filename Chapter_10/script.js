

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

//example

function getData(dataId){
    setTimeout(()=>{
        console.log('data ',dataId);
    },9000);
}
getData(256);


//indidual delayes 
function getData1(dataId,getNextData){
    setTimeout(()=>{
        console.log('data ',dataId);
        getNextData();
    },9000);
}
// getData(257, ()=>{
//     getData(512);
// });

//multiple delayes
getData1(1, ()=>{
    getData1(2,()=>{
        getData1(3, ()=>{
            getData1(4);
        })
    });
});

// promises
//is an object for eventual completion of task

let promise = new Promises(resove,reject => {
    console.log('Promises');
    resolve('success');
    // reject('error');
});