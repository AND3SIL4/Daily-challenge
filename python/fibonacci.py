'''
Function that recived one number and return the fibonacci sequence 
Args: n (number): Initial argument
Returns: (Array of numbers)
'''
# Main function
def fibo(n):
    # Array to save numbers
    sequence = [ 0, 1 ]

    # Conditional
    while len(sequence) < n:

        # Sum o numbers and addition
        sequence.append(sequence[-1] + sequence[-2])
    
    # Return the value
    return sequence
    
# Print main function
print(fibo(5))

