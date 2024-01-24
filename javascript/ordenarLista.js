/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

const LIST = [5, 2, 4, 6, 9];

/**
 * This function recive the list of items in the given list, and return a list of sorted in ascending order or descending order depends on de second param.
 * @param {number[]} matriz
 * @param {string} param
 * @returns number[] in ascending order or descending order
 */
function sortList(matriz, param) {
  if (param.toLowerCase() === "desc") {
    let condition = false;
    do {
      condition = true;
      for (let i = 1; i < matriz.length; i++) {
        if (matriz[i - 1] > matriz[i]) {
          condition = false;
          let tmp = matriz[i - 1];
          matriz[i - 1] = matriz[i];
          matriz[i] = tmp;
        }
      }
    } while (!condition);
    return matriz;
  } else {
    let condition = false;
    do {
      condition = true;
      for (let i = 1; i < matriz.length; i++) {
        if (matriz[i - 1] < matriz[i]) {
          condition = false;
          let tmp = matriz[i - 1];
          matriz[i - 1] = matriz[i];
          matriz[i] = tmp;
        }
      }
    } while (!condition);
    return matriz;
  }
}

// Main function
function main() {
  // console.log(sortList((matriz = LIST), (param = "Asc")));
  console.log(sortList((matriz = LIST), (param = "Desc")));
  console.log(sortList((matriz = LIST), (param = "Asc")));
}

main();
