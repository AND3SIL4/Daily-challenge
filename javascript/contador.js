/** 
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */


/**
 * Function that returns the number on binary previously inputted
 * @param {integer} decimal 
 * @returns binary 
 */
function numberTransform(decimal) {
    let number  = decimal;
    let binary = '';

    while (number !== 0) {
        let reminder = number % 2;
        number = Math.floor(number / 2);
        binary = reminder.toString() + binary;
       
    }

    return binary || '0';
}

console.log(numberTransform(387));
console.log(numberTransform(0));