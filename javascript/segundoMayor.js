/*
 * Dado un listado de números, encuentra el SEGUNDO más grande
 */

// Main function
function main() {
  console.log(findSecondGreater(new Array(4, 6, 1, 8, 2)));
  console.log(findSecondGreater(new Array(4, 6, 1, 8, 2)));
  console.log(findSecondGreater(new Array(4, 4)));
  console.log(findSecondGreater(new Array()));
}

main();

function findSecondGreater(numbers) {

  let sortedNumbers = [];

  for (let number of numbers) {

      let found = false;

      for (let [index, sortedNumber] of sortedNumbers.entries()) {

          if (number >= sortedNumber) {
              if (number != sortedNumber) {
                  sortedNumbers.splice(index, 0, number);
              }
              found = true;
              break;
          }
      }

      if (!found) {
          sortedNumbers.push(number);
      }
  }

  return sortedNumbers.length >= 2 ? sortedNumbers[1] : null;
}
