/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 * @param {number} numb 
 * @returns the factorial of one number
 */

// Main function
function main() {
    console.log(factorial(5));
}

// Calculate Factorial of one number
const factorial = (n) => (n <= 0 ? 1 : n * factorial(n - 1));

main()
