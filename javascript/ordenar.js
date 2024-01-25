/*
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

/**
 * This function is used to return a string into a rectangle from
 * @param {string} string
 * @returns string
 */
function order(text) {
  let words = text.split(" ");
  let maxLength = 0;
  words.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = words.length;
    }
  });

  console.log("*".repeat(maxLength + 4));

  words.forEach((word) => {
    if (word.length > 0) {
      console.log(
        "* " + word + " ".repeat(0) + " *"
      );
    }
  });
  console.log("*".repeat(maxLength + 4));
}

// Main function
function main() {
  console.log(order("Andres Felipe Silva"));
}

main();
