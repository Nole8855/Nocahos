for hundred in range(1, 10): 
    for ten in range(0, 9):
        for one in range(0 ,9): 
            number = (hundred * 100) + (ten * 10) + one
            result = (hundred ** 2) + (ten ** 2) + (one ** 2)
            if result == number : 
                print(number)
            
