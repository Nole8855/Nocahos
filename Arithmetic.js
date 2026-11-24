const prompt = require("prompt-sync")()

let numberone = Number(prompt("Enter first number: "));
let numbertwo = Number(prompt("Enter second number: " ));
let numberthree = Number(prompt("Enter third number: "));

let sum = numberone + numbertwo + numberthree;
console.log("Sum", sum)
    
let average = sum/3;
console.log("Average", average)
    
let product = numberone * numbertwo * numberthree
console.log("Product", product)
    
let smallest = Math.min(numberone, numbertwo, numberthree)
console.log("Smallest", smallest);

let largest = Math.max(numberone, numbertwo, numberthree)
console.log("Largest", largest);

