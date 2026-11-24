result = 0.0;
count = 0;
print("Enter -1 to quit");

while True:
    num = int(input("Enter a number: "))
    if num == -1:
        print("break")
        break
    
    result += num;
    count = count + 1
    average = result / count
    print(average)

