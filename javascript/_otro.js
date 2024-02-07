// * Sintax one

let squareLength = 4;

// Main function that recived a parametter
function applyToSquare(callback) {
  return callback(squareLength);
}

// Second function that is a parameter
function areOfSquare(number) {
  return number * number;
}

console.log(applyToSquare(areOfSquare));

// * Sintax two

console.log(
  applyToSquare(function sqaurePerimeter(side) {
    return side * 4;
  })
);
