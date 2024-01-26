/*
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

/**
 * This function takes a initial year and returns the following years as a leap years
 * @param {Date} initialYear
 * @returns {Date}
 */
function leapYears(initialYear) {
  let fullYear = initialYear.getFullYear();
  let secuence = 0;
  do {
    console.log(fullYear);
    secuence++;
    fullYear += 4;
  } while (secuence < 30);
}

function another(year){
  let currentYear = year + 1;
  let yearCount = 0;
  while (yearCount < 30) {
    if (currentYear % 4 === 0 || currentYear % 100 !== 0 && currentYear % 400 === 0) {
      console.log(currentYear);
      yearCount++;
    }
    currentYear++;
  }

}

let year = new Date();

// Main function
function main() {
  // leapYears(year);
  another(2024);
}

main();
