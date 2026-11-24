//const prompt = require("prompt-sync")()
//let total = 0;

//for(let number = 1; number <= 3; number++){
	//let num = Number(prompt("Enter an integer: "));
	
	//let square = 0;
	//for (let digit = 1; digit <= 3; digit++){
	  //  square = square + num;
    //}
  //  total = total + square;
//}
//console.log("Sum of square", total);


for(let hundred = 1; hundred <= 9; hundred++) {
    for(let ten = 0; ten <= 9; ten++) {
        for(let one = 0; one <= 9; one++) {
            let number = (hundred * 100) + (ten * 10) + one;
            let result = (hundred * hundred) + (ten * ten) + (one * one);
            if(result === number) {
                console.log(number);
            }
        }
    }
}
