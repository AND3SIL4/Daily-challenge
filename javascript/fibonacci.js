/**
 * Return the 50 firts numbers of Fibonacci sequence
 * @param {number} n 
 * @returns {Array of numbers}
 */

// Main function
function Fibonacci(n) {
    // Define one array to save the numbers
    const sequence = [ 0, 1 ]

    // Conditional
    while (sequence.length < n) {
        // Variable to save the new number 
        const number = sequence[sequence.length -1 ] + sequence[sequence.length - 2] 
        // New number added
        sequence.push(number)
    }
    // Return the response
    return sequence
}

// Show in console
console.log(Fibonacci(10));