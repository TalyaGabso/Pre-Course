const input = require('readline-sync');

let num1 = input.question("Please enter a number: ");
let num2 = input.question("Enter another number: ");

let result = Number(num1) + Number(num2);
if (result == 10){
    console.log("makes 10");   
}
else{
    console.log("nope");
}