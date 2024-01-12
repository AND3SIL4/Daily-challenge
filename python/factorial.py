'''
/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */
'''

# Main function
def main():
    print(factorial(5))

# Calculate factorial of number
def factorial(n):
    return 1 if n <= 0 else n * factorial(n - 1)
    
if __name__ == '__main__':
    main()