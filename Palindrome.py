text = "wow"
reverse_text = ""
for character in text:
    reverse_text = character + reverse_text
if reverse_text == text:
    print("it is a palindrome")
else:
    print("it is not a palindrome")


