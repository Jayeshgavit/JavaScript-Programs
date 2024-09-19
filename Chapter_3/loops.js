console.log("for Loop Program ")


for (var i = 1; i < 10; i++){
    console.log(i);

}


let num = 3;
for (var i = 1; i < 11; i++){ 
    console.log(num +"x"+ i + ":" + num*i);
}

for (var i = 1; i < 101; i++){ 
    if (i % 2 === 0) {
        console.log(i);
    }
}



for(var l = 1; l < 11; l++){
    document.write(l + '<br/>');
}


sum =0;
for(let t= 1; t <= 5; t++){
    console.log("Sum is ", sum ,"and t",t);
    sum = sum + t;
    console.log("Sum: ", sum);

}

document.write(" Sum of 5 number is : "+ sum)


console.log("While loop : ")
let count = 0;
while(count < 5){
    console.log(count);
    count++;
}

var n = 1;
var t1 = 5;
while(n < 11){
    console.log(n +" x "+ t1 +": "+ n*t1);
    n++;
}