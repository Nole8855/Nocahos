const prompt = require("prompt-sync")()

let sum = 0.0;
let count = 0;
console.log("Enter -1 to quit");

while(true) {
let num = Number(prompt("Enter a number: "))
if (num === -1) {
    console.log("break")
    break;
    }
    
sum += num;
count++;
let average = sum / count
console.log(average)
}
