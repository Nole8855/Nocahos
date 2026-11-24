const prompt = require("prompt-sync")()
let number = 100
let user_input = Number(prompt("Enter an integer: "))
let square = user_input ** 2;

console.log(user_input && square > number)
console.log(user_input && square === number)
console.log(user_input && square != number)

//if (user_input && square > number){
  //  console.log("True")
//}
//if (user_input && square === number){
  //  console.log("True")
//}
//if (user_input && square != number){
  //  console.log("True")
//}
//console.log(square)

