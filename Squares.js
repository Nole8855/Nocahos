const prompt = require("prompt-sync")();

let numberone = Number(prompt("Enter first number: "));
let numbertwo = Number(prompt("Enter second number: " ));

let firstresult = numberone * numberone;
let secondresult = numbertwo * numbertwo;

let sum = firstresult + secondresult;
let difference = firstresult - secondresult; 

console.log(firstresult , secondresult)
console.log("Sum: ", sum) ;
console.log("Difference", difference)
    
