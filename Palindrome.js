let text = "solomon"
let reverse_text = " "

for (character in text){
    reverse_text = character + reverse_text
    if (reverse_text == text){
        console.log("it is a palindrome")
        }
    else{
        console.log("it is not a palindrome")
}
}
