# Escribir un programa que se encargue de decir si un numero es primo

# Main function
def is_prime(number):
    if number < 2:
        return False

    for i in range(2, number):
        if number % i == 0:
            return False
    
    return True

# Srtucture to iteration of every single prime number
for number in range(1, 101):
    if is_prime(number):
        print(number)

num = 7

# Show function result
print(f'The number {num} { 'is prime' if is_prime(num) else 'is not prime' }')