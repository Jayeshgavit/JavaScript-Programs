
let str1 = "Jayesh";
let str2 = "Welcome to JavaScript";

document.write("Demo str1: ", str1, "<br/>");
document.write("Demo str2: ", str2, "<br/>");



let msg = `Hi ${str1}! ${str2}`;
console.log(msg);

document.write("<br/>Multi-line String using literals (`) : <br/>");
let str3 = `this is line one.
this is line two.`;

document.write("Multiline String Demo str3: ", str3, "<br/>");



// Create String using String Constructor
document.write("<br/>String created Suing Constructor : <br/>");
let str4 = new String("Hello..! This is created using String Constructor");

document.write("String Constructor: ", str4, "<br/>");

// Finding length of the String 

document.write("<br/>Length of str1 using length properties : ", str1.length, "<br/>");


// Concatenating strings 

str1 = 'Java';
str2 = 'Script';

let result = str1 + str2;
document.write(" Concatenation of ", str1, " and ", str2 , ' (+) is : ', result);


document.write("<br/><br/>Escape Characters : <br/>");


str1 = "\'Hi\', Bro!";
str2 = "\"Hi\", Bro!";
str3 = "\\Hi\\, Bro!";
document.write("Escaped String \'Hi\' : ", str1, "<br/>");
document.write("Escaped String \"hi\" : ", str2, "<br/>");
document.write("Escaped String \\Hi\\' : ", str3, "<br/>");

document.write("<br/><br/>Breaking Long Strings : <br/>");
str1 = 'hi, hello, how its \ going on...';
console.log(str1);