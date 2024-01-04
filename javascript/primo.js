/**
 * Write a function to know about un number is prime or it's not
 * @param {type: number}  number
 * @returns {boolean} That depends if the number is prime or it's not
 */

// Main function
function isPrime(number) {

    if (number < 2) {
        return false
    }

    // Iterable to know about the prime number
    for (let n = 2; n < number; n++) {
        if (number % n === 0) {
            return false
        }
    }

    return true
}

// Iterable to show the first 100 prime numbers
for (let i = 1; i < 101; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

const num = 7;

// Show the result of function
console.log(`The number ${num} is ${isPrime(num) ? 'prime' : 'not prime'}`);