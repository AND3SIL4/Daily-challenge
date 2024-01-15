/**
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto. 
 */

/**
 * This function let us know if the number inputted is a armstrong number or it's not
 * @param {num} number 
 * @returns boolean depends on validation
 */

// Potencial = número de digitos
// Suma de digitos elevado al potencial
// Math.pow(base, exponent)
function numberArmstrong(num) {

    // Initial Validation
    if (num < 0) {
        return false;
    }

    const POTENCIAL = num.toString().length;

    let result = 0;

    for (const i of num.toString()) {
        // Boots the number 
        result += Math.pow(i, POTENCIAL);
    }

    return result === num;
}

// Main function
function main() {
    console.log(numberArmstrong(371));
    console.log(numberArmstrong(-371));
}

main()