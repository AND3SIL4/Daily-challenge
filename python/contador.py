'''
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */
'''

# function to parse decimal to binary
def decimal_to_binary(decimal):
    number = decimal
    binary = ''

    while number != 0:
        reminder = number % 2
        number = number // 2

        binary = str(reminder) + binary

    return binary or '0'

# main function
def main():
    print(decimal_to_binary(319))
    print(decimal_to_binary(0))
    print(decimal_to_binary(3))

if __name__ == '__main__':
    main()